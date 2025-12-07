// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBCbox-Hw5lB9cPuCMF3WGW73v5aZJw2Ag",
    authDomain: "studio-8178033783-96aea.firebaseapp.com",
    projectId: "studio-8178033783-96aea",
    storageBucket: "studio-8178033783-96aea.firebasestorage.app",
    messagingSenderId: "1042317564782",
    appId: "1:1042317564782:web:ae283edddb81f200f43f7f"
};

// Initialize Firebase
let auth, db;
let currentUser = null;

// Make currentUser accessible globally
window.currentUser = null;

async function initFirebase() {
    try {
        console.log('🔥 Starting Firebase initialization...');
        
        // Import Firebase modules
        console.log('📦 Loading Firebase modules...');
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
        const { getAuth, signInAnonymously, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        const { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs, updateDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        console.log('✅ Firebase modules loaded successfully');
        
        // Initialize Firebase
        console.log('🚀 Initializing Firebase app...');
        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        
        console.log('✅ Firebase app initialized');
        console.log('🔑 Project ID:', firebaseConfig.projectId);
        
        // Auto sign-in anonymously
        console.log('👤 Setting up authentication...');
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                currentUser = user;
                window.currentUser = user;
                console.log('✅ User authenticated successfully');
                console.log('🆔 User ID:', user.uid);
                await loadUserDataFromFirebase();
            } else {
                console.log('🔐 No user found, signing in anonymously...');
                await signInAnonymously(auth);
            }
        });
        
        console.log('🎉 Firebase initialization complete!');
        return { auth, db };
    } catch (error) {
        console.error('❌ Firebase initialization FAILED!');
        console.error('📛 Error details:', error.message);
        console.error('🔍 Full error:', error);
        alert('⚠️ Firebase connection failed. Some features may not work.\n\nError: ' + error.message);
        return null;
    }
}

// Save user data to Firebase
async function saveUserDataToFirebase() {
    if (!currentUser || !db) return;
    
    try {
        const { doc, setDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(userRef, {
            user: STATE.user,
            progress: STATE.progress,
            bookmarks: STATE.bookmarks,
            badges: STATE.badges,
            lastUpdated: serverTimestamp()
        }, { merge: true });
        
        // Update leaderboard
        await updateLeaderboard();
    } catch (error) {
        console.error('Error saving to Firebase:', error);
    }
}

// Load user data from Firebase
async function loadUserDataFromFirebase() {
    if (!currentUser || !db) return;
    
    try {
        const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const userRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userRef);
        
        if (userDoc.exists()) {
            const data = userDoc.data();
            STATE.user = data.user || STATE.user;
            STATE.progress = data.progress || STATE.progress;
            STATE.bookmarks = data.bookmarks || STATE.bookmarks;
            STATE.badges = data.badges || STATE.badges;
            
            applyTheme();
            render();
        }
    } catch (error) {
        console.error('Error loading from Firebase:', error);
    }
}

// Update leaderboard
async function updateLeaderboard() {
    if (!currentUser || !db) return;
    
    try {
        const { doc, setDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const now = new Date();
        const leaderboardRef = doc(db, 'leaderboard', currentUser.uid);
        
        await setDoc(leaderboardRef, {
            userId: currentUser.uid,
            username: STATE.user.username || `User${currentUser.uid.slice(0, 6)}`,
            totalPoints: STATE.user.points,
            level: STATE.user.level,
            dailyPoints: STATE.user.dailyPoints || 0,
            weeklyPoints: STATE.user.weeklyPoints || 0,
            monthlyPoints: STATE.user.monthlyPoints || 0,
            lastUpdated: serverTimestamp(),
            day: now.getDate(),
            week: getWeekNumber(now),
            month: now.getMonth()
        }, { merge: true });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
    }
}

// Get week number
function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// Fetch leaderboard data
async function fetchLeaderboard(type = 'total') {
    if (!db) {
        console.error('❌ Cannot fetch leaderboard: Database not initialized');
        return [];
    }
    
    try {
        console.log('📊 Fetching leaderboard data...');
        console.log('📈 Type:', type);
        
        const { collection, query, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const leaderboardRef = collection(db, 'leaderboard');
        let sortField = 'totalPoints';
        
        if (type === 'daily') sortField = 'dailyPoints';
        else if (type === 'weekly') sortField = 'weeklyPoints';
        else if (type === 'monthly') sortField = 'monthlyPoints';
        
        console.log('🔢 Sorting by field:', sortField);
        
        const q = query(leaderboardRef, orderBy(sortField, 'desc'), limit(100));
        const snapshot = await getDocs(q);
        
        console.log('📦 Documents fetched:', snapshot.size);
        
        const leaderboard = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            leaderboard.push({ 
                id: doc.id, 
                userId: data.userId,
                username: data.username || 'Anonymous',
                totalPoints: data.totalPoints || 0,
                dailyPoints: data.dailyPoints || 0,
                weeklyPoints: data.weeklyPoints || 0,
                monthlyPoints: data.monthlyPoints || 0,
                level: data.level || 1,
                completed: true
            });
        });
        
        console.log('✅ Leaderboard processed successfully');
        console.log('👥 Total players:', leaderboard.length);
        if (leaderboard.length > 0) {
            console.log('🏆 Top player:', leaderboard[0].username, 'with', leaderboard[0][sortField], 'points');
        }
        
        return leaderboard;
    } catch (error) {
        console.error('❌ Error fetching leaderboard:', error.message);
        console.error('🔍 Full error:', error);
        return [];
    }
}

// Save last attempt for a quiz set
async function saveLastAttempt(setKey, quizData) {
    if (!currentUser || !db) {
        console.error('❌ Cannot save attempt: User or DB not initialized');
        return;
    }
    
    try {
        console.log('💾 Saving quiz attempt...');
        console.log('🔑 Chapter key:', setKey);
        console.log('📝 Quiz data:', {
            type: quizData.type,
            subject: quizData.subject,
            chapterIdx: quizData.chapterIdx,
            questionsCount: quizData.questions?.length,
            answersCount: quizData.answers?.length
        });
        
        const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const attemptRef = doc(db, 'users', currentUser.uid, 'lastAttempts', setKey);
        await setDoc(attemptRef, {
            ...quizData,
            timestamp: new Date().toISOString(),
            completed: true
        });
        
        console.log('✅ Quiz attempt saved successfully!');
    } catch (error) {
        console.error('❌ Error saving last attempt:', error.message);
        console.error('🔍 Full error:', error);
    }
}

// Load last attempt for a quiz set
async function loadLastAttempt(setKey) {
    if (!currentUser || !db) {
        console.error('❌ Cannot load attempt: User or DB not initialized');
        return null;
    }
    
    try {
        console.log('📖 Loading last attempt...');
        console.log('🔑 Chapter key:', setKey);
        
        const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const attemptRef = doc(db, 'users', currentUser.uid, 'lastAttempts', setKey);
        const attemptDoc = await getDoc(attemptRef);
        
        if (attemptDoc.exists()) {
            console.log('✅ Last attempt found!');
            const data = attemptDoc.data();
            console.log('📊 Attempt data:', {
                timestamp: data.timestamp,
                questionsCount: data.questions?.length,
                correctCount: data.results?.correctCount
            });
            return {
                ...data,
                completed: data.completed || true
            };
        } else {
            console.log('⚠️ No previous attempt found for this chapter');
            return null;
        }
    } catch (error) {
        console.error('❌ Error loading last attempt:', error.message);
        console.error('🔍 Full error:', error);
        return null;
    }
}
// Export all functions
export {
    initFirebase,
    saveUserDataToFirebase,
    loadUserDataFromFirebase,
    updateLeaderboard,
    fetchLeaderboard, // This was missing export
    saveLastAttempt,
    loadLastAttempt,
    getWeekNumber,
    // Export variables if needed elsewhere
    auth,
    db,
    currentUser
};

// Also attach to window for global access (optional, but helps with debugging)
window.firebaseFunctions = {
    initFirebase,
    saveUserDataToFirebase,
    loadUserDataFromFirebase,
    updateLeaderboard,
    fetchLeaderboard,
    saveLastAttempt,
    loadLastAttempt
};
