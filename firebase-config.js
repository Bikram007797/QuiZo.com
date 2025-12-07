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
        // Import Firebase modules
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
        const { getAuth, signInAnonymously, onAuthStateChanged } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js');
        const { getFirestore, doc, setDoc, getDoc, collection, query, orderBy, limit, getDocs, updateDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        auth = getAuth(app);
        db = getFirestore(app);
        
        // Auto sign-in anonymously
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                currentUser = user;
                window.currentUser = user; // ✅ Add this line
                await loadUserDataFromFirebase();
            } else {
                await signInAnonymously(auth);
            }
        });
        
        return { auth, db };
    } catch (error) {
        console.error('Firebase initialization error:', error);
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
    if (!db) return [];
    
    try {
        const { collection, query, orderBy, limit, getDocs } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const leaderboardRef = collection(db, 'leaderboard');
        let sortField = 'totalPoints';
        
        if (type === 'daily') sortField = 'dailyPoints';
        else if (type === 'weekly') sortField = 'weeklyPoints';
        else if (type === 'monthly') sortField = 'monthlyPoints';
        
        const q = query(leaderboardRef, orderBy(sortField, 'desc'), limit(100));
        const snapshot = await getDocs(q);
        
        const leaderboard = [];
        snapshot.forEach((doc) => {
            const data = doc.data();
            leaderboard.push({ 
                id: doc.id, 
                ...data,
                completed: true // Add this to fix the second error
            });
        });
        
        return leaderboard;
    } catch (error) {
        console.error('Error fetching leaderboard:', error);
        return [];
    }
}

// Save last attempt for a quiz set
async function saveLastAttempt(setKey, quizData) {
    if (!currentUser || !db) return;
    
    try {
        const { doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const attemptRef = doc(db, 'users', currentUser.uid, 'lastAttempts', setKey);
        await setDoc(attemptRef, {
            ...quizData,
            timestamp: new Date().toISOString(),
            completed: true // Add this to fix the second error
        });
    } catch (error) {
        console.error('Error saving last attempt:', error);
    }
}

// Load last attempt for a quiz set
async function loadLastAttempt(setKey) {
    if (!currentUser || !db) return null;
    
    try {
        const { doc, getDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const attemptRef = doc(db, 'users', currentUser.uid, 'lastAttempts', setKey);
        const attemptDoc = await getDoc(attemptRef);
        
        if (attemptDoc.exists()) {
            const data = attemptDoc.data();
            return {
                ...data,
                completed: data.completed || true // Ensure completed property exists
            };
        }
        return null;
    } catch (error) {
        console.error('Error loading last attempt:', error);
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
