// ONTARIO G1 PRACTICE TEST - MAIN APPLICATION
// Complete working application with ALL features

// ============================================
// APPLICATION STATE
// ============================================

let currentTestType = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let testStarted = false;
let score = 0;
let startTime = null;
let timerInterval = null;
let elapsedTime = 0;
let questionsAttempted = 0;

// ============================================
// DOM ELEMENTS
// ============================================

const startScreen = document.getElementById('startScreen');
const quizContainer = document.getElementById('quizContainer');
const resultsContainer = document.getElementById('resultsContainer');
const startBtn = document.getElementById('startBtn');
const currentQuestionEl = document.getElementById('currentQuestion');
const currentScoreEl = document.getElementById('currentScore');
const currentTimeEl = document.getElementById('currentTime');
const progressBar = document.getElementById('progressBar');
const questionContainer = document.getElementById('questionContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const scorePercent = document.getElementById('scorePercent');
const passFail = document.getElementById('passFail');
const resultMessage = document.getElementById('resultMessage');
const statCorrect = document.getElementById('statCorrect');
const statIncorrect = document.getElementById('statIncorrect');
const statTime = document.getElementById('statTime');
const testTypeResult = document.getElementById('testTypeResult');
const yourScoreResult = document.getElementById('yourScoreResult');
const questionsAttemptedEl = document.getElementById('questionsAttempted');
const completionDate = document.getElementById('completionDate');
const reviewContainer = document.getElementById('reviewContainer');
const scoreCircle = document.getElementById('scoreCircle');
const testTypeDisplay = document.getElementById('testTypeDisplay');

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Shuffle array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Format time as MM:SS
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

// Show screen helper
function showScreen(screen) {
    // Hide all screens
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });
    
    // Show selected screen
    document.getElementById(screen).classList.add('active');
}

// ============================================
// TEST TYPE SELECTION
// ============================================

function selectTestType(type) {
    // Remove selected class from all options
    document.querySelectorAll('.test-card').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    document.querySelector(`.test-card[data-test-type="${type}"]`).classList.add('selected');
    
    // Enable start button
    startBtn.disabled = false;
    startBtn.innerHTML = `<i class="fas fa-play-circle"></i> Start ${type === 'signs' ? 'Road Signs' : type === 'rules' ? 'Rules' : 'Full'} Test`;
    currentTestType = type;
}

// ============================================
// START TEST
// ============================================

function startTest() {
    if (!currentTestType) return;
    
    let selectedQuestions = [];
    let questionCount = 0;
    let testTypeText = "";
    
    // Select questions based on test type
    switch(currentTestType) {
        case 'signs':
            // Randomly select 20 from 77 road sign questions
            const shuffledSigns = [...roadSignsQuestions];
            shuffleArray(shuffledSigns);
            selectedQuestions = shuffledSigns.slice(0, 20);
            questionCount = 20;
            testTypeText = "Road Signs";
            break;
            
        case 'rules':
            // Randomly select 20 from 104 rules questions
            const shuffledRules = [...rulesOfTheRoadQuestions];
            shuffleArray(shuffledRules);
            selectedQuestions = shuffledRules.slice(0, 20);
            questionCount = 20;
            testTypeText = "Rules of Road";
            break;
            
        case 'full':
            // Randomly select 20 signs + 20 rules = 40 total
            const allSigns = [...roadSignsQuestions];
            const allRules = [...rulesOfTheRoadQuestions];
            shuffleArray(allSigns);
            shuffleArray(allRules);
            
            selectedQuestions = [
                ...allSigns.slice(0, 20),
                ...allRules.slice(0, 20)
            ];
            shuffleArray(selectedQuestions); // Mix them up
            questionCount = 40;
            testTypeText = "Full Test";
            break;
    }
    
    // Initialize test state
    currentQuestions = selectedQuestions;
    currentQuestionIndex = 0;
    userAnswers = new Array(questionCount).fill(null);
    score = 0;
    questionsAttempted = 0;
    testStarted = true;
    startTime = new Date();
    elapsedTime = 0;
    
    // Update test type display
    testTypeDisplay.textContent = testTypeText;
    
    // Start timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimerDisplay();
    
    // Show quiz screen
    showScreen('quizContainer');
    
    // Load first question
    loadQuestion();
}

// ============================================
// TIMER FUNCTIONS
// ============================================

function updateTimer() {
    if (startTime) {
        const now = new Date();
        elapsedTime = Math.floor((now - startTime) / 1000);
        updateTimerDisplay();
    }
}

function updateTimerDisplay() {
    if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(elapsedTime);
    }
}

// ============================================
// LOAD QUESTION
// ============================================

function loadQuestion() {
    if (!testStarted || currentQuestionIndex >= currentQuestions.length) return;
    
    const question = currentQuestions[currentQuestionIndex];
    
    // Update progress indicators
    currentQuestionEl.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    currentScoreEl.textContent = score;
    
    // Update progress bar
    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    // Build question HTML
    let questionHTML = '';
    
    // Add image if available
    if (question.image) {
        questionHTML += `
            <div class="question-image-container">
                <img src="${question.image}" alt="Question visual aid" class="question-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><rect width=\"400\" height=\"300\" fill=\"%23f1f5f9\"/><text x=\"200\" y=\"150\" font-family=\"Arial\" font-size=\"24\" text-anchor=\"middle\" fill=\"%2394a3b8\">Image ${question.id}</text></svg>';">
            </div>
        `;
    }
    
    questionHTML += `<div class="question-text">${question.question}</div>`;
    
    // Build options HTML
    let optionsHTML = '<div class="options-container">';
    
    question.options.forEach((option, index) => {
        let optionClass = 'option';
        let numberClass = 'option-number';
        
        // Check if this option was selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionClass += ' selected';
            numberClass += ' selected';
        }
        
        // Check if we should show correct/incorrect (for review after answering)
        if (userAnswers[currentQuestionIndex] !== null) {
            if (index === question.correctAnswer) {
                optionClass += ' correct';
            } else if (index === userAnswers[currentQuestionIndex] && index !== question.correctAnswer) {
                optionClass += ' incorrect';
            }
        }
        
        optionsHTML += `
            <div class="${optionClass}" onclick="selectAnswer(${index})">
                <div class="${numberClass}">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            </div>
        `;
    });
    
    optionsHTML += '</div>';
    
    // Update container
    questionContainer.innerHTML = questionHTML + optionsHTML;
    
    // Update navigation buttons
    prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

// ============================================
// SELECT ANSWER
// ============================================

function selectAnswer(answerIndex) {
    if (!testStarted || userAnswers[currentQuestionIndex] !== null) return;
    
    // Record answer
    userAnswers[currentQuestionIndex] = answerIndex;
    questionsAttempted++;
    
    // Check if answer is correct
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;
    
    // Update score
    if (isCorrect) {
        score++;
        question.userCorrect = true;
    } else {
        question.userCorrect = false;
    }
    
    // Update score display
    currentScoreEl.textContent = score;
    
    // Reload question to show correct/incorrect highlights
    loadQuestion();
    
    // Auto-proceed to next question after 1 second
    if (currentQuestionIndex < currentQuestions.length - 1) {
        setTimeout(() => {
            if (userAnswers[currentQuestionIndex] !== null) {
                nextQuestion();
            }
        }, 1000);
    }
}

// ============================================
// NAVIGATION FUNCTIONS
// ============================================

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// ============================================
// FINISH TEST
// ============================================

function finishTest() {
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
    
    // Calculate final score
    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 80;
    
    // Update results display
    scorePercent.textContent = `${percentage}%`;
    statCorrect.textContent = score;
    statIncorrect.textContent = totalQuestions - score;
    statTime.textContent = formatTime(elapsedTime);
    
    // Set pass/fail message
    if (passed) {
        passFail.textContent = "PASS";
        passFail.className = "pass";
        resultMessage.textContent = "Congratulations! You passed the practice test.";
    } else {
        passFail.textContent = "FAIL";
        passFail.className = "fail";
        resultMessage.textContent = "Keep practicing! You need 80% to pass the actual G1 test.";
    }
    
    // Set test type
    let testTypeText = "";
    switch(currentTestType) {
        case 'signs': testTypeText = "Road Signs Only"; break;
        case 'rules': testTypeText = "Rules of the Road"; break;
        case 'full': testTypeText = "Full Practice Test"; break;
    }
    testTypeResult.textContent = testTypeText;
    
    // Set score result
    yourScoreResult.textContent = `${score}/${totalQuestions} (${percentage}%)`;
    questionsAttemptedEl.textContent = questionsAttempted;
    
    // Set completion date
    const now = new Date();
    if (completionDate) {
        completionDate.textContent = now.toLocaleDateString('en-CA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Update score circle with animation
    setTimeout(() => {
        scoreCircle.style.background = `conic-gradient(var(--primary) 0% ${percentage}%, var(--gray-200) ${percentage}% 100%)`;
    }, 100);
    
    // Generate review
    generateReview();
    
    // Show results screen
    showScreen('resultsContainer');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// GENERATE REVIEW
// ============================================

function generateReview() {
    let reviewHTML = '';
    
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const answerGiven = userAnswer !== null;
        
        let reviewClass = 'review-item';
        let questionClass = 'review-question';
        let icon = '';
        
        if (answerGiven) {
            if (isCorrect) {
                reviewClass += ' correct';
                questionClass += ' correct';
                icon = '<i class="fas fa-check-circle"></i>';
            } else {
                reviewClass += ' incorrect';
                questionClass += ' incorrect';
                icon = '<i class="fas fa-times-circle"></i>';
            }
        } else {
            reviewClass += ' unanswered';
            questionClass += ' unanswered';
            icon = '<i class="fas fa-minus-circle"></i>';
        }
        
        reviewHTML += `
            <div class="${reviewClass}">
                <div class="${questionClass}">
                    ${icon} Question ${index + 1}: ${question.question}
                </div>
        `;
        
        // Add image if available
        if (question.image) {
            reviewHTML += `
                <img src="${question.image}" alt="Question visual aid" class="review-image" 
                     onerror="this.onerror=null; this.src='data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 300\"><rect width=\"400\" height=\"300\" fill=\"%23f1f5f9\"/><text x=\"200\" y=\"150\" font-family=\"Arial\" font-size=\"24\" text-anchor=\"middle\" fill=\"%2394a3b8\">Image ${question.id}</text></svg>';">
            `;
        }
        
        // Show user's answer if given
        if (answerGiven) {
            const userAnswerText = question.options[userAnswer];
            const correctAnswerText = question.options[question.correctAnswer];
            const userAnswerLetter = String.fromCharCode(65 + userAnswer);
            const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
            
            reviewHTML += `
                <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>Your answer: ${userAnswerLetter}) ${userAnswerText}</strong>
                    ${!isCorrect ? `<br><strong>Correct answer: ${correctAnswerLetter}) ${correctAnswerText}</strong>` : ''}
                </div>
            `;
        } else {
            const correctAnswerLetter = String.fromCharCode(65 + question.correctAnswer);
            const correctAnswerText = question.options[question.correctAnswer];
            
            reviewHTML += `
                <div class="review-answer unanswered">
                    <strong>You didn't answer this question.</strong><br>
                    <strong>Correct answer: ${correctAnswerLetter}) ${correctAnswerText}</strong>
                </div>
            `;
        }
        
        // Show explanation
        reviewHTML += `
            <div class="review-explanation">
                <strong>Explanation:</strong> ${question.explanation}
            </div>
        `;
        
        reviewHTML += `</div>`;
    });
    
    reviewContainer.innerHTML = reviewHTML;
}

// ============================================
// RESTART FUNCTIONS
// ============================================

function restartTest() {
    // Reset questions state
    currentQuestions.forEach(q => {
        q.answered = false;
        q.userCorrect = false;
    });
    
    // Reset test type selection
    document.querySelectorAll('.test-card').forEach(option => {
        option.classList.remove('selected');
    });
    startBtn.disabled = true;
    startBtn.innerHTML = `<i class="fas fa-play-circle"></i> Start Test <span class="btn-subtext">Select a test type to begin</span>`;
    currentTestType = null;
    
    // Show start screen
    showScreen('startScreen');
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToStart() {
    showScreen('startScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Handle start screen shortcuts
    if (startScreen.classList.contains('active')) {
        switch(e.key) {
            case '1':
                selectTestType('signs');
                break;
            case '2':
                selectTestType('rules');
                break;
            case '3':
                selectTestType('full');
                break;
            case 'Enter':
                if (!startBtn.disabled) {
                    startTest();
                }
                break;
        }
        return;
    }
    
    // Only handle if quiz is active
    if (!quizContainer.classList.contains('active')) return;
    
    switch(e.key) {
        case 'ArrowLeft':
            if (prevBtn.style.display !== 'none') prevQuestion();
            break;
        case 'ArrowRight':
            if (nextBtn.style.display !== 'none') nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4':
            const optionIndex = parseInt(e.key) - 1;
            if (optionIndex >= 0 && optionIndex <= 3) {
                selectAnswer(optionIndex);
            }
            break;
        case 'Enter':
            if (submitBtn.style.display !== 'none') {
                finishTest();
            } else if (nextBtn.style.display !== 'none') {
                nextQuestion();
            }
            break;
        case 'Escape':
            if (confirm('Are you sure you want to quit the test? Your progress will be lost.')) {
                goToStart();
            }
            break;
    }
});

// ============================================
// INITIALIZATION
// ============================================

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Set up event listeners for test options
    document.querySelectorAll('.test-card').forEach(option => {
        option.addEventListener('click', function() {
            selectTestType(this.dataset.testType);
        });
    });
    
    // Initialize start button
    startBtn.disabled = true;
    
    console.log("G1 Practice Test initialized successfully!");
    console.log(`Total questions loaded: ${roadSignsQuestions.length} Road Signs + ${rulesOfTheRoadQuestions.length} Rules = ${roadSignsQuestions.length + rulesOfTheRoadQuestions.length} questions`);
});

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        selectTestType,
        startTest,
        selectAnswer,
        nextQuestion,
        prevQuestion,
        finishTest,
        restartTest,
        goToStart,
        shuffleArray,
        formatTime
    };
}
