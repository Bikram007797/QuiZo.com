// State Management
const STATE = {
    user: {
        points: 0,
        coins: 0,
        xp: 0,
        level: 1,
        soundEnabled: true,
        theme: 'light'
    },
    progress: {},
    bookmarks: [],
    badges: [
        { id: 'first_complete', name: 'First Steps', icon: '🎯', earned: false, description: 'Complete your first quiz set' },
        { id: 'perfect_10', name: 'Perfect 10', icon: '⭐', earned: false, description: 'Get 10 perfect scores' },
        { id: 'bookmark_20', name: 'Collector', icon: '📚', earned: false, description: 'Bookmark 20 questions' },
        { id: 'streak_7', name: 'Week Warrior', icon: '🔥', earned: false, description: 'Complete quizzes for 7 days straight' },
        { id: 'speed_demon', name: 'Speed Demon', icon: '⚡', earned: false, description: 'Complete 5 sets under time' },
        { id: 'century', name: 'Centurion', icon: '💯', earned: false, description: 'Score 100+ points' },
        { id: 'gold_rush', name: 'Gold Rush', icon: '💰', earned: false, description: 'Collect 50 coins' },
        { id: 'level_5', name: 'Rising Star', icon: '🌟', earned: false, description: 'Reach Level 5' },
        { id: 'bookworm', name: 'Bookworm', icon: '🐛', earned: false, description: 'Review 30 bookmarked questions' }
    ],
    currentScreen: 'home',
    currentQuiz: null,
    quizState: null
};

// Load state from localStorage
function loadState() {
    try {
        const saved = localStorage.getItem('quizo_state');
        if (saved) {
            const parsed = JSON.parse(saved);
            Object.assign(STATE, parsed);
            applyTheme();
        }
    } catch (e) {
        console.error('Error loading state:', e);
    }
}

// Save state to localStorage
function saveState() {
    try {
        localStorage.setItem('quizo_state', JSON.stringify(STATE));
    } catch (e) {
        console.error('Error saving state:', e);
    }
}

// Theme management
function applyTheme() {
    document.documentElement.setAttribute('data-theme', STATE.user.theme);
}

function toggleTheme() {
    STATE.user.theme = STATE.user.theme === 'light' ? 'dark' : 'light';
    applyTheme();
    saveState();
    playSound('click');
}

// Sound effects
function playSound(type) {
    if (!STATE.user.soundEnabled) return;
    
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'correct':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'incorrect':
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'click':
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
    }
}

// Haptic feedback
function vibrate(pattern = 50) {
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

// Confetti animation
function triggerConfetti() {
    const colors = ['#14b8a6', '#fbbf24', '#ef4444', '#10b981', '#3b82f6'];
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Level calculation
function calculateLevel(xp) {
    if (xp < 100) return 1;
    if (xp < 250) return 2;
    if (xp < 500) return 3;
    if (xp < 1000) return 4;
    if (xp < 2000) return 5;
    return Math.floor(5 + (xp - 2000) / 500);
}

function getXPForNextLevel(level) {
    if (level === 1) return 100;
    if (level === 2) return 250;
    if (level === 3) return 500;
    if (level === 4) return 1000;
    if (level === 5) return 2000;
    return 2000 + (level - 5) * 500;
}

// Badge checking
function checkBadges() {
    const earned = [];
    
    // First complete
    if (!STATE.badges[0].earned) {
        const completedSets = Object.values(STATE.progress).filter(p => p.completed).length;
        if (completedSets >= 1) {
            STATE.badges[0].earned = true;
            earned.push(STATE.badges[0]);
        }
    }
    
    // Perfect 10
    if (!STATE.badges[1].earned) {
        const perfectScores = Object.values(STATE.progress).filter(p => p.bestScore === 5).length;
        if (perfectScores >= 10) {
            STATE.badges[1].earned = true;
            earned.push(STATE.badges[1]);
        }
    }
    
    // Bookmark 20
    if (!STATE.badges[2].earned && STATE.bookmarks.length >= 20) {
        STATE.badges[2].earned = true;
        earned.push(STATE.badges[2]);
    }
    
    // Century
    if (!STATE.badges[5].earned && STATE.user.points >= 100) {
        STATE.badges[5].earned = true;
        earned.push(STATE.badges[5]);
    }
    
    // Gold rush
    if (!STATE.badges[6].earned && STATE.user.coins >= 50) {
        STATE.badges[6].earned = true;
        earned.push(STATE.badges[6]);
    }
    
    // Level 5
    if (!STATE.badges[7].earned && STATE.user.level >= 5) {
        STATE.badges[7].earned = true;
        earned.push(STATE.badges[7]);
    }
    
    return earned;
}

// Routing
function navigate(screen, data = null) {
    STATE.currentScreen = screen;
    STATE.currentQuiz = data;
    render();
    window.scrollTo(0, 0);
    playSound('click');
}

// Render functions
function render() {
    const app = document.getElementById('app');
    
    let content = '';
    
    switch(STATE.currentScreen) {
        case 'home':
            content = renderHome();
            break;
        case 'challenge':
            content = renderChallengeSelect();
            break;
        case 'subjects':
            content = renderSubjects();
            break;
        case 'chapters':
            content = renderChapters();
            break;
        case 'sets':
            content = renderSets();
            break;
        case 'quiz':
            content = renderQuiz();
            break;
        case 'report':
            content = renderReport();
            break;
        case 'profile':
            content = renderProfile();
            break;
        case 'bookmarks':
            content = renderBookmarks();
            break;
    }
    
    app.innerHTML = content + '<div class="watermark">QUIZO</div>';
    attachEventListeners();
}

function renderHome() {
    return `
        <div class="header">
            <div class="header-left">
                <div class="logo">Q</div>
                <div>
                    <div class="app-name">QUIZO</div>
                    <div class="developer-credit">Developed by Bikr@m</div>
                </div>
            </div>
            <div class="header-right">
                <div class="stats-chip">
                    <div class="stat-item">
                        <span class="stat-icon">⭐</span>
                        <span>${STATE.user.points}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🪙</span>
                        <span>${STATE.user.coins}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">✨</span>
                        <span>${STATE.user.xp}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-icon">🏆</span>
                        <span>L${STATE.user.level}</span>
                    </div>
                </div>
                <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
                    ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
                </button>
            </div>
        </div>
        
        <div class="container">
            <div style="margin: 32px 0 24px; text-align: center;">
                <h2 style="font-size: 28px; margin-bottom: 8px;">Learn. Play. Level Up.</h2>
                <p style="color: var(--text-secondary);">Choose your challenge and start learning!</p>
            </div>
            
            <div class="cta-grid">
                <div class="card cta-card" onclick="navigate('challenge', 'daily')">
                    <div style="font-size: 48px; margin-bottom: 12px;">📅</div>
                    Daily Challenge
                </div>
                <div class="card cta-card" onclick="navigate('challenge', 'weekly')">
                    <div style="font-size: 48px; margin-bottom: 12px;">📊</div>
                    Weekly Challenge
                </div>
                <div class="card cta-card" onclick="navigate('bookmarks')">
                    <div style="font-size: 48px; margin-bottom: 12px;">🔖</div>
                    Bookmarks
                </div>
                <div class="card cta-card" onclick="navigate('profile')">
                    <div style="font-size: 48px; margin-bottom: 12px;">👤</div>
                    Profile
                </div>
            </div>
        </div>
    `;
}

function renderChallengeSelect() {
    return `
        <div class="header">
            <button class="btn btn-icon" onclick="navigate('home')" aria-label="Back">
                ← Back
            </button>
            <div class="app-name">${STATE.currentQuiz === 'daily' ? 'Daily' : 'Weekly'} Challenge</div>
            <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
                ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
        
        <div class="container">
            <h3 style="margin: 24px 0 16px; font-size: 20px;">Select a Subject</h3>
            
            <div class="card subject-card" onclick="navigate('subjects', {type: '${STATE.currentQuiz}', subject: 'GEOGRAPHY'})">
                <div class="card-header">
                    <div>
                        <div class="card-title">🌍 GEOGRAPHY</div>
                        <p style="font-size: 14px; color: var(--text-secondary); margin-top: 4px;">
                            Explore the world's physical and human landscapes
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="card subject-card" onclick="navigate('subjects', {type: '${STATE.currentQuiz}', subject: 'POLITY'})">
                <div class="card-header">
                    <div>
                        <div class="card-title">⚖️ POLITY</div>
                        <p style="font-size: 14px; color: var(--text-secondary); margin-top: 4px;">
                            Master constitutional law and governance
                        </p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderSubjects() {
    const { type, subject } = STATE.currentQuiz;
    const subjectData = QUIZ_DATA[type][subject];
    
    return `
        <div class="header">
            <button class="btn btn-icon" onclick="navigate('challenge', '${type}')" aria-label="Back">
                ← Back
            </button>
            <div class="app-name">${subject}</div>
            <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
                ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
        
        <div class="container">
            <h3 style="margin: 24px 0 16px; font-size: 20px;">Select a Chapter</h3>
            
            ${subjectData.chapters.map((chapter, chIdx) => `
                <div class="card chapter-card" onclick="navigate('chapters', {type: '${type}', subject: '${subject}', chapterIdx: ${chIdx}})">
                    <div class="card-header">
                        <div>
                            <div class="card-title">📖 ${chapter.name}</div>
                            <p style="font-size: 14px; color: var(--text-secondary); margin-top: 4px;">
                                ${chapter.sets.length} sets available
                            </p>
                        </div>
                        <div class="badge">${chIdx + 1}</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function renderChapters() {
    const { type, subject, chapterIdx } = STATE.currentQuiz;
    const chapter = QUIZ_DATA[type][subject].chapters[chapterIdx];
    
    return `
        <div class="header">
            <button class="btn btn-icon" onclick="navigate('subjects', {type: '${type}', subject: '${subject}'})" aria-label="Back">
                ← Back
            </button>
            <div class="app-name">${chapter.name}</div>
            <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
                ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
        
        <div class="container">
            <h3 style="margin: 24px 0 16px; font-size: 20px;">Select a Quiz Set</h3>
            
            ${chapter.sets.map((set, setIdx) => {
                const setKey = `${type}_${subject}_${chapterIdx}_${setIdx}`;
                const progress = STATE.progress[setKey] || { attempts: 0, bestScore: 0, completed: false };
                
                return `
                    <div class="card set-card" onclick="navigate('sets', {type: '${type}', subject: '${subject}', chapterIdx: ${chapterIdx}, setIdx: ${setIdx}})">
                        <div class="card-header">
                            <div>
                                <div class="card-title">📝 Set ${setIdx + 1}</div>
                                <div class="set-progress">
                                    Attempts: ${progress.attempts} | Best Score: ${progress.bestScore}/5
                                    ${progress.completed ? ' ✓ Completed' : ''}
                                </div>
                            </div>
                            <div>
                                ${progress.bestScore === 5 ? '🏅' : progress.bestScore >= 3 ? '⭐' : ''}
                            </div>
                        </div>
                        <button class="btn btn-primary" style="margin-top: 12px; width: 100%;" onclick="event.stopPropagation(); startQuiz('${type}', '${subject}', ${chapterIdx}, ${setIdx})">
                            ${progress.attempts > 0 ? 'Play Again' : 'Start Quiz'}
                        </button>
                    </div>
                `;
            }).join('')}
        </div>
    `;
}

function renderSets() {
    // This is handled by startQuiz function
    return '';
}

function startQuiz(type, subject, chapterIdx, setIdx) {
    const questions = QUIZ_DATA[type][subject].chapters[chapterIdx].sets[setIdx].questions;
    
    STATE.quizState = {
        type,
        subject,
        chapterIdx,
        setIdx,
        questions,
        currentQuestion: 0,
        answers: [],
        startTime: Date.now(),
        questionStartTime: Date.now(),
        questionTimes: [],
        isFullscreen: false
    };
    
    navigate('quiz');
}

function renderQuiz() {
    if (!STATE.quizState) return renderHome();
    
    const { questions, currentQuestion, answers, startTime, isFullscreen } = STATE.quizState;
    const question = questions[currentQuestion];
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    
    const isBookmarked = STATE.bookmarks.some(b => b.id === question.id);
    
    const containerClass = isFullscreen ? 'quiz-container fullscreen-mode' : 'quiz-container';
    
    return `
        <div class="${containerClass}">
            <div class="quiz-header">
                <button class="btn btn-icon" onclick="exitQuiz()" aria-label="Exit quiz">
                    ✕
                </button>
                <div class="timer">
                    ⏱️ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}
                </div>
                <div class="quiz-controls">
                    <button class="btn btn-icon" onclick="toggleBookmark()" aria-label="Bookmark question">
                        ${isBookmarked ? '🔖' : '📑'}
                    </button>
                    <button class="btn btn-icon" onclick="toggleSound()" aria-label="Toggle sound">
                        ${STATE.user.soundEnabled ? '🔊' : '🔇'}
                    </button>
                    <button class="btn btn-icon" onclick="toggleFullscreen()" aria-label="Toggle fullscreen">
                        ${isFullscreen ? '⛶' : '⛶'}
                    </button>
                    <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
                        ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
            
            <div class="question-container slide-in">
                <div class="question-progress">
                    Question ${currentQuestion + 1} of ${questions.length}
                </div>
                
                <h2 class="question-text">${question.question}</h2>
                
                <div class="options-container">
                    ${question.options.map((option, idx) => {
                        const answer = answers[currentQuestion];
                        let className = 'option-btn';
                        
                        if (answer !== undefined) {
                            if (idx === question.correct) {
                                className += ' correct';
                            } else if (idx === answer) {
                                className += ' incorrect';
                            }
                        }
                        
                        return `
                            <button 
                                class="${className}" 
                                onclick="selectAnswer(${idx})"
                                ${answer !== undefined ? 'disabled' : ''}
                            >
                                ${String.fromCharCode(65 + idx)}. ${option}
                            </button>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="quiz-navigation">
                <button 
                    class="btn btn-secondary" 
                    onclick="previousQuestion()"
                    ${currentQuestion === 0 ? 'disabled' : ''}
                    style="${currentQuestion === 0 ? 'opacity: 0.5; cursor: not-allowed;' : ''}"
                >
                    ← Previous
                </button>
                
                ${currentQuestion === questions.length - 1 && answers[currentQuestion] !== undefined
                    ? `<button class="btn btn-primary" onclick="submitQuiz()">Submit Quiz</button>`
                    : `<button 
                        class="btn btn-primary" 
                        onclick="nextQuestion()"
                        ${answers[currentQuestion] === undefined ? 'disabled' : ''}
                        style="${answers[currentQuestion] === undefined ? 'opacity: 0.5; cursor: not-allowed;' : ''}"
                       >
                        Next →
                       </button>`
                }
            </div>
        </div>
    `;
}

function selectAnswer(optionIdx) {
    if (!STATE.quizState) return;
    
    const { questions, currentQuestion, answers, questionStartTime } = STATE.quizState;
    
    if (answers[currentQuestion] !== undefined) return;
    
    const timeTaken = Date.now() - questionStartTime;
    STATE.quizState.questionTimes.push(timeTaken);
    STATE.quizState.answers[currentQuestion] = optionIdx;
    
    const question = questions[currentQuestion];
    const isCorrect = optionIdx === question.correct;
    
    vibrate(isCorrect ? [50, 50, 50] : 100);
    playSound(isCorrect ? 'correct' : 'incorrect');
    
    // Show reward popup briefly
    if (isCorrect) {
        const popup = document.createElement('div');
        popup.className = 'reward-popup';
        popup.innerHTML = `
            <div style="font-size: 32px; margin-bottom: 8px;">✨</div>
            <div style="font-weight: 600;">+10 Points, +2 Coins!</div>
        `;
        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 1500);
    }
    
    render();
}

function nextQuestion() {
    if (!STATE.quizState) return;
    
    if (STATE.quizState.currentQuestion < STATE.quizState.questions.length - 1) {
        STATE.quizState.currentQuestion++;
        STATE.quizState.questionStartTime = Date.now();
        render();
    }
}

function previousQuestion() {
    if (!STATE.quizState && STATE.quizState.currentQuestion > 0) {
        STATE.quizState.currentQuestion--;
        STATE.quizState.questionStartTime = Date.now();
        render();
    }
}

function toggleBookmark() {
    if (!STATE.quizState) return;
    
    const { questions, currentQuestion, type, subject, chapterIdx, setIdx } = STATE.quizState;
    const question = questions[currentQuestion];
    
    const bookmarkIdx = STATE.bookmarks.findIndex(b => b.id === question.id);
    
    if (bookmarkIdx >= 0) {
        STATE.bookmarks.splice(bookmarkIdx, 1);
    } else {
        STATE.bookmarks.push({
            ...question,
            source: `${type} > ${subject} > Ch${chapterIdx + 1} > Set${setIdx + 1}`
        });
    }
    
    saveState();
    playSound('click');
    render();
}

function toggleSound() {
    STATE.user.soundEnabled = !STATE.user.soundEnabled;
    saveState();
    playSound('click');
    render();
}

function toggleFullscreen() {
    if (!STATE.quizState) return;
    STATE.quizState.isFullscreen = !STATE.quizState.isFullscreen;
    playSound('click');
    render();
}

function exitQuiz() {
    if (confirm('Are you sure you want to exit? Your progress will be lost.')) {
        const { type, subject, chapterIdx } = STATE.quizState;
        STATE.quizState = null;
        navigate('chapters', { type, subject, chapterIdx });
    }
}

function submitQuiz() {
    if (!STATE.quizState) return;
    
    const { type, subject, chapterIdx, setIdx, questions, answers, startTime, questionTimes } = STATE.quizState;
    
    const totalTime = Date.now() - startTime;
    let correctCount = 0;
    
    questions.forEach((q, idx) => {
        if (answers[idx] === q.correct) {
            correctCount++;
        }
    });
    
    const setKey = `${type}_${subject}_${chapterIdx}_${setIdx}`;
    const progress = STATE.progress[setKey] || { attempts: 0, bestScore: 0, completed: false, bestTime: Infinity };
    
    progress.attempts++;
    if (correctCount > progress.bestScore) {
        progress.bestScore = correctCount;
    }
    if (totalTime < progress.bestTime) {
        progress.bestTime = totalTime;
    }
    
    STATE.progress[setKey] = progress;
    
    // Calculate rewards
    const pointsEarned = correctCount * 10;
    let coinsEarned = correctCount * 2;
    let xpEarned = 0;
    
    // Time bonus (if completed under 5 minutes)
    const targetTime = 5 * 60 * 1000;
    if (totalTime < targetTime && correctCount === 5) {
        coinsEarned += 5;
    }
    
    // XP for completed set
    if (correctCount === 5) {
        xpEarned = 30; // Extra XP for perfect score
    } else if (correctCount >= 3) {
        xpEarned = 15;
    }
    
    // Accuracy multiplier
    const accuracy = correctCount / questions.length;
    if (accuracy >= 0.9) {
        const bonus = Math.floor(pointsEarned * 0.1);
        STATE.user.points += bonus;
    }
    
    STATE.user.points += pointsEarned;
    STATE.user.coins += coinsEarned;
    STATE.user.xp += xpEarned;
    
    const oldLevel = STATE.user.level;
    STATE.user.level = calculateLevel(STATE.user.xp);
    
    // Check for badges
    const newBadges = checkBadges();
    
    STATE.quizState.results = {
        correctCount,
        totalTime,
        pointsEarned,
        coinsEarned,
        xpEarned,
        leveledUp: STATE.user.level > oldLevel,
        newBadges
    };
    
    saveState();
    
    if (correctCount === 5) {
        triggerConfetti();
    }
    
    navigate('report');
}

function renderReport() {
    if (!STATE.quizState || !STATE.quizState.results) return renderHome();
    
    const { questions, answers, results, type, subject, chapterIdx, setIdx } = STATE.quizState;
    const { correctCount, totalTime, pointsEarned, coinsEarned, xpEarned, leveledUp, newBadges } = results;
    
    const minutes = Math.floor(totalTime / 60000);
    const seconds = Math.floor((totalTime % 60000) / 1000);
    const accuracy = Math.round((correctCount / questions.length) * 100);
    
    const setKey = `${type}_${subject}_${chapterIdx}_${setIdx}`;
    
    return `
        <div class="header">
            <button class="btn btn-icon" onclick="navigate('chapters', {type: '${type}', subject: '${subject}', chapterIdx: ${chapterIdx}})" aria-label="Back">
                ← Back
            </button>
            <div class="app-name">Quiz Results</div>
            <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
                ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
            </button>
        </div>
        
        <div class="report-container">
            <div class="report-summary">
                <div style="font-size: 64px; margin-bottom: 16px;">
                    ${correctCount === 5 ? '🏆' : correctCount >= 3 ? '⭐' : '💪'}
                </div>
                <div class="report-score">${correctCount}/5</div>
                <div style="font-size: 18px; margin-bottom: 24px;">
                    ${correctCount === 5 ? 'Perfect Score!' : correctCount >= 3 ? 'Great Job!' : 'Keep Practicing!'}
                </div>
                
                <div class="report-stats">
                    <div class="report-stat">
                        <div class="report-stat-value">${accuracy}%</div>
                        <div class="report-stat-label">Accuracy</div>
                    </div>
                    <div class="report-stat">
                        <div class="report-stat-value">${minutes}:${String(seconds).padStart(2, '0')}</div>
                        <div class="report-stat-label">Time Taken</div>
                    </div>
                    <div class="report-stat">
                        <div class="report-stat-value">+${pointsEarned}</div>
                        <div class="report-stat-label">Points</div>
                    </div>
                    <div class="report-stat">
                        <div class="report-stat-value">+${coinsEarned}</div>
                        <div class="report-stat-label">Coins</div>
                    </div>
                    <div class="report-stat">
                        <div class="report-stat-value">+${xpEarned}</div>
                        <div class="report-stat-label">XP</div>
                    </div>
                    <div class="report-stat">
                        <div class="report-stat-value">L${STATE.user.level}</div>
                        <div class="report-stat-label">Level ${leveledUp ? '⬆️' : ''}</div>
                    </div>
                </div>
                ${newBadges.length > 0 ? `
                <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.2); border-radius: 12px;">
                    <div style="font-weight: 600; margin-bottom: 12px;">🎉 New Badges Earned!</div>
                    ${newBadges.map(b => `<div>${b.icon} ${b.name}</div>`).join('')}
                </div>
            ` : ''}
        </div>
        
        <div style="display: flex; gap: 12px; margin: 24px 0;">
            <button class="btn btn-secondary" style="flex: 1;" onclick="markAsCompleted('${setKey}')">
                ${STATE.progress[setKey].completed ? '✓ Completed' : 'Mark Complete'}
            </button>
            <button class="btn btn-primary" style="flex: 1;" onclick="retryQuiz()">
                🔄 Retry Quiz
            </button>
        </div>
        
        <h3 style="margin: 32px 0 16px; font-size: 20px;">Review Questions</h3>
        
        ${questions.map((q, idx) => {
            const userAnswer = answers[idx];
            const isCorrect = userAnswer === q.correct;
            
            return `
                <div class="card question-review ${idx === 0 ? 'expanded' : ''}" id="review-${idx}">
                    <div class="question-review-header" onclick="toggleReview(${idx})">
                        <div>
                            <strong>Question ${idx + 1}</strong>
                            ${isCorrect ? ' ✓' : ' ✗'}
                        </div>
                        <span>▼</span>
                    </div>
                    <div class="question-review-content">
                        <p style="font-weight: 600; margin-bottom: 16px;">${q.question}</p>
                        
                        ${q.options.map((opt, optIdx) => {
                            let className = 'answer-row';
                            if (optIdx === q.correct) className += ' correct';
                            else if (optIdx === userAnswer && !isCorrect) className += ' incorrect';
                            
                            return `
                                <div class="${className}">
                                    ${String.fromCharCode(65 + optIdx)}. ${opt}
                                    ${optIdx === q.correct ? ' ✓ Correct' : ''}
                                    ${optIdx === userAnswer && !isCorrect ? ' ✗ Your answer' : ''}
                                </div>
                            `;
                        }).join('')}
                        
                        <div class="explanation">
                            <strong>Explanation:</strong> ${q.explanation}
                        </div>
                    </div>
                </div>
            `;
        }).join('')}
    </div>
`;
  }
function toggleReview(idx) {
const element = document.getElementById(`review-${idx}`);
if (element) {
element.classList.toggle('expanded');
}
}
function markAsCompleted(setKey) {
STATE.progress[setKey].completed = !STATE.progress[setKey].completed;
saveState();
playSound('click');
render();
}
function retryQuiz() {
const { type, subject, chapterIdx, setIdx } = STATE.quizState;
startQuiz(type, subject, chapterIdx, setIdx);
}
function renderProfile() {
const xpForNext = getXPForNextLevel(STATE.user.level);
const xpProgress = (STATE.user.xp / xpForNext) * 100;
  const totalSets = Object.keys(STATE.progress).length;
const completedSets = Object.values(STATE.progress).filter(p => p.completed).length;
const perfectScores = Object.values(STATE.progress).filter(p => p.bestScore === 5).length;
const earnedBadges = STATE.badges.filter(b => b.earned).length;

return `
    <div class="header">
        <button class="btn btn-icon" onclick="navigate('home')" aria-label="Back">
            ← Back
        </button>
        <div class="app-name">Profile & Rewards</div>
        <button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
            ${STATE.user.theme === 'light' ? '🌙' : '☀️'}
        </button>
    </div>
    
    <div class="container">
        <div class="card" style="text-align: center; padding: 32px;">
            <div style="font-size: 64px; margin-bottom: 16px;">👤</div>
            <h2 style="font-size: 24px; margin-bottom: 8px;">Level ${STATE.user.level} Player</h2>
            <p style="color: var(--text-secondary);">Keep learning and level up!</p>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: 16px;">Level Progress</h3>
            <div class="level-progress">
                <div class="level-bar">
                    <div class="level-bar-fill" style="width: ${xpProgress}%"></div>
                    <div class="level-text">${STATE.user.xp} / ${xpForNext} XP</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: 16px;">Statistics</h3>
            <div class="report-stats">
                <div class="report-stat">
                    <div class="report-stat-value">${STATE.user.points}</div>
                    <div class="report-stat-label">Total Points</div>
                </div>
                <div class="report-stat">
                    <div class="report-stat-value">${STATE.user.coins}</div>
                    <div class="report-stat-label">Total Coins</div>
                </div>
                <div class="report-stat">
                    <div class="report-stat-value">${totalSets}</div>
                    <div class="report-stat-label">Sets Played</div>
                </div>
                <div class="report-stat">
                    <div class="report-stat-value">${completedSets}</div>
                    <div class="report-stat-label">Completed</div>
                </div>
                <div class="report-stat">
                    <div class="report-stat-value">${perfectScores}</div>
                    <div class="report-stat-label">Perfect Scores</div>
                </div>
                <div class="report-stat">
                    <div class="report-stat-value">${STATE.bookmarks.length}</div>
                    <div class="report-stat-label">Bookmarked</div>
                </div>
            </div>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: 16px;">Badges & Achievements (${earnedBadges}/${STATE.badges.length})</h3>
            <div class="badges-grid">
                ${STATE.badges.map(badge => `
                    <div class="badge-item ${badge.earned ? 'earned' : ''}">
                        <div class="badge-icon" style="${!badge.earned ? 'filter: grayscale(100%); opacity: 0.5;' : ''}">${badge.icon}</div>
                        <div class="badge-name">${badge.name}</div>
                        <p style="font-size: 10px; color: var(--text-secondary); margin-top: 4px;">${badge.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="card">
            <h3 style="margin-bottom: 16px;">Settings</h3>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                <span>Sound Effects</span>
                <button class="btn btn-secondary" onclick="toggleSound()">
                    ${STATE.user.soundEnabled ? '🔊 On' : '🔇 Off'}
                </button>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px solid var(--border-color);">
                <span>Theme</span>
                <button class="btn btn-secondary" onclick="toggleTheme()">
                    ${STATE.user.theme === 'light' ? '☀️ Light' : '🌙 Dark'}
                </button>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0;">
                <span>Reset All Data</span>
                <button class="btn" style="background: var(--error); color: white;" onclick="resetData()">
                    Reset
                </button>
            </div>
        </div>
    </div>
`;
}
function resetData() {
if (confirm('Are you sure you want to reset all your progress? This cannot be undone!')) {
localStorage.removeItem('quizo_state');
location.reload();
}
}
function renderBookmarks() {
return `
<div class="header">
<button class="btn btn-icon" onclick="navigate('home')" aria-label="Back">
← Back
</button>
<div class="app-name">Bookmarks</div>
<button class="btn btn-icon" onclick="toggleTheme()" aria-label="Toggle theme">
${STATE.user.theme === 'light' ? '🌙' : '☀️'}
</button>
</div>
<div class="container">
        <h3 style="margin: 24px 0 16px; font-size: 20px;">
            Saved Questions (${STATE.bookmarks.length})
        </h3>
        
        ${STATE.bookmarks.length === 0 ? `
            <div class="card" style="text-align: center; padding: 48px;">
                <div style="font-size: 48px; margin-bottom: 16px;">📑</div>
                <p style="color: var(--text-secondary);">No bookmarked questions yet. Start a quiz and bookmark questions for later review!</p>
            </div>
        ` : STATE.bookmarks.map((bookmark, idx) => `
            <div class="card bookmark-item">
                <div class="bookmark-source">${bookmark.source}</div>
                <div class="bookmark-question">${bookmark.question}</div>
                <div style="display: flex; gap: 12px; margin-top: 12px;">
                    <button class="btn btn-secondary" style="flex: 1;" onclick="removeBookmark(${idx})">
                        Remove 🗑️
                    </button>
                </div>
            </div>
        `).join('')}
    </div>
`;
}
function removeBookmark(idx) {
STATE.bookmarks.splice(idx, 1);
saveState();
playSound('click');
render();
}
function attachEventListeners() {
// Timer update for quiz page
if (STATE.currentScreen === 'quiz' && STATE.quizState) {
const timerInterval = setInterval(() => {
if (STATE.currentScreen !== 'quiz') {
clearInterval(timerInterval);
return;
}
render();
}, 1000);
}
}
// Initialize app
document.addEventListener('DOMContentLoaded', () => {
loadState();
render();
});
