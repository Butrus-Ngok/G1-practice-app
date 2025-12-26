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
const statScore = document.getElementById('statScore');
const statTime = document.getElementById('statTime');
const testTypeResult = document.getElementById('testTypeResult');
const yourScoreResult = document.getElementById('yourScoreResult');
const questionsAttemptedEl = document.getElementById('questionsAttempted');
const completionDate = document.getElementById('completionDate');
const reviewContainer = document.getElementById('reviewContainer');
const scoreCircle = document.getElementById('scoreCircle');

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

// ============================================
// TEST TYPE SELECTION
// ============================================

function selectTestType(type) {
    // Remove selected class from all options
    document.querySelectorAll('.test-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selected class to clicked option
    document.querySelector(`.test-option[data-test-type="${type}"]`).classList.add('selected');
    
    // Enable start button
    startBtn.disabled = false;
    currentTestType = type;
}

// ============================================
// START TEST
// ============================================

function startTest() {
    if (!currentTestType) return;
    
    let selectedQuestions = [];
    let questionCount = 0;
    
    // Select questions based on test type
    switch(currentTestType) {
        case 'signs':
            // Randomly select 20 from 77 road sign questions
            const shuffledSigns = [...roadSignsQuestions];
            shuffleArray(shuffledSigns);
            selectedQuestions = shuffledSigns.slice(0, 20);
            questionCount = 20;
            break;
            
        case 'rules':
            // Randomly select 20 from 104 rules questions
            const shuffledRules = [...rulesOfTheRoadQuestions];
            shuffleArray(shuffledRules);
            selectedQuestions = shuffledRules.slice(0, 20);
            questionCount = 20;
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
    
    // Start timer
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimerDisplay();
    
    // Show quiz, hide start screen
    startScreen.style.display = 'none';
    quizContainer.style.display = 'block';
    resultsContainer.style.display = 'none';
    
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
                     onerror="this.onerror=null; this.src='images/placeholder.png';">
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
    prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-block' : 'none';
    
    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-block';
    } else {
        nextBtn.style.display = 'inline-block';
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
    statScore.textContent = `${percentage}%`;
    statTime.textContent = formatTime(elapsedTime);
    
    // Set pass/fail message
    if (passed) {
        passFail.textContent = "PASS";
        passFail.className = "pass-fail pass";
        resultMessage.textContent = "Congratulations! You passed the practice test.";
    } else {
        passFail.textContent = "FAIL";
        passFail.className = "pass-fail fail";
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
    
    // Update score circle
    scoreCircle.style.background = `conic-gradient(var(--primary-blue) 0% ${percentage}%, var(--medium-gray) ${percentage}% 100%)`;
    
    // Generate review
    generateReview();
    
    // Show results, hide quiz
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ============================================
// GENERATE REVIEW
// ============================================

function generateReview() {
    let reviewHTML = '<h3 class="review-title"><i class="fas fa-clipboard-check"></i> Question Review</h3>';
    
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
                     onerror="this.onerror=null; this.src='images/placeholder.png';">
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
    
    // Show start screen
    resultsContainer.style.display = 'none';
    startScreen.style.display = 'block';
    
    // Reset test type selection
    document.querySelectorAll('.test-option').forEach(option => {
        option.classList.remove('selected');
    });
    startBtn.disabled = true;
    currentTestType = null;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function goToStart() {
    resultsContainer.style.display = 'none';
    startScreen.style.display = 'block';
    window.scrollTo(0, 0);
}

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', function(e) {
    // Only handle if quiz is active
    if (quizContainer.style.display !== 'block') return;
    
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
    document.querySelectorAll('.test-option').forEach(option => {
        option.addEventListener('click', function() {
            selectTestType(this.dataset.testType);
        });
    });
    
    // Initialize start button
    startBtn.disabled = true;
    
    // Add CSS for option text
    const style = document.createElement('style');
    style.textContent = `
        .option-text { flex: 1; }
        .question-image-container { margin-bottom: 20px; }
        .review-item.unanswered { border-left-color: var(--warning-yellow); }
        .review-answer.unanswered { background-color: #fef3c7; border-left-color: var(--warning-yellow); }
        .review-question.unanswered i { color: var(--warning-yellow); }
    `;
    document.head.appendChild(style);
    
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
