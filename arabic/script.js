// ONTARIO G1 PRACTICE TEST - ARABIC APPLICATION
// Mirrors the English app behavior with Arabic RTL labels and review text.

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

const optionLabels = ['أ', 'ب', 'ج', 'د'];
const testTypeLabels = {
    signs: 'إشارات الطريق',
    rules: 'قواعد الطريق',
    full: 'اختبار كامل'
};
const resultTypeLabels = {
    signs: 'إشارات الطريق فقط',
    rules: 'قواعد الطريق',
    full: 'اختبار تدريبي كامل'
};

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function getOptionLabel(index) {
    return optionLabels[index] || String(index + 1);
}

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => {
        s.classList.remove('active');
    });

    document.getElementById(screen).classList.add('active');
}

function selectTestType(type) {
    document.querySelectorAll('.test-card').forEach(option => {
        option.classList.remove('selected');
    });

    const selectedCard = document.querySelector(`.test-card[data-test-type="${type}"]`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    startBtn.disabled = false;
    startBtn.innerHTML = `<i class="fas fa-play-circle"></i> ابدأ ${testTypeLabels[type]} <span class="btn-subtext">سيتم اختيار الأسئلة عشوائياً</span>`;
    currentTestType = type;
}

function startTest() {
    if (!currentTestType) return;

    let selectedQuestions = [];
    let questionCount = 0;
    let testTypeText = '';

    switch (currentTestType) {
        case 'signs': {
            const shuffledSigns = [...roadSignsQuestions];
            shuffleArray(shuffledSigns);
            selectedQuestions = shuffledSigns.slice(0, 20);
            questionCount = 20;
            testTypeText = testTypeLabels.signs;
            break;
        }
        case 'rules': {
            const shuffledRules = [...rulesOfTheRoadQuestions];
            shuffleArray(shuffledRules);
            selectedQuestions = shuffledRules.slice(0, 20);
            questionCount = 20;
            testTypeText = testTypeLabels.rules;
            break;
        }
        case 'full': {
            const allSigns = [...roadSignsQuestions];
            const allRules = [...rulesOfTheRoadQuestions];
            shuffleArray(allSigns);
            shuffleArray(allRules);
            selectedQuestions = [
                ...allSigns.slice(0, 20),
                ...allRules.slice(0, 20)
            ];
            shuffleArray(selectedQuestions);
            questionCount = 40;
            testTypeText = testTypeLabels.full;
            break;
        }
    }

    currentQuestions = selectedQuestions;
    currentQuestionIndex = 0;
    userAnswers = new Array(questionCount).fill(null);
    score = 0;
    questionsAttempted = 0;
    testStarted = true;
    startTime = new Date();
    elapsedTime = 0;

    testTypeDisplay.textContent = testTypeText;

    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);
    updateTimerDisplay();

    showScreen('quizContainer');
    loadQuestion();
}

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

function imageFallback(id) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect width="400" height="300" fill="#f1f5f9"/><text x="200" y="150" font-family="Arial" font-size="24" text-anchor="middle" fill="#94a3b8">صورة ${id}</text></svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

function loadQuestion() {
    if (!testStarted || currentQuestionIndex >= currentQuestions.length) return;

    const question = currentQuestions[currentQuestionIndex];

    currentQuestionEl.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
    currentScoreEl.textContent = score;

    const progressPercent = ((currentQuestionIndex + 1) / currentQuestions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    let questionHTML = '';

    if (question.image) {
        questionHTML += `
            <div class="question-image-container">
                <img src="${question.image}" alt="وسيلة إيضاح للسؤال" class="question-image"
                     onerror="this.onerror=null; this.src='${imageFallback(question.id)}';">
            </div>
        `;
    }

    questionHTML += `<div class="question-text">${question.question}</div>`;

    let optionsHTML = '<div class="options-container">';

    question.options.forEach((option, index) => {
        let optionClass = 'option';
        let numberClass = 'option-number';

        if (userAnswers[currentQuestionIndex] === index) {
            optionClass += ' selected';
            numberClass += ' selected';
        }

        if (userAnswers[currentQuestionIndex] !== null) {
            if (index === question.correctAnswer) {
                optionClass += ' correct';
            } else if (index === userAnswers[currentQuestionIndex] && index !== question.correctAnswer) {
                optionClass += ' incorrect';
            }
        }

        optionsHTML += `
            <div class="${optionClass}" onclick="selectAnswer(${index})">
                <div class="${numberClass}">${getOptionLabel(index)}</div>
                <div class="option-text">${option}</div>
            </div>
        `;
    });

    optionsHTML += '</div>';
    questionContainer.innerHTML = questionHTML + optionsHTML;

    prevBtn.style.display = currentQuestionIndex > 0 ? 'inline-flex' : 'none';

    if (currentQuestionIndex === currentQuestions.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'inline-flex';
    } else {
        nextBtn.style.display = 'inline-flex';
        submitBtn.style.display = 'none';
    }
}

function selectAnswer(answerIndex) {
    if (!testStarted || userAnswers[currentQuestionIndex] !== null) return;

    userAnswers[currentQuestionIndex] = answerIndex;
    questionsAttempted++;

    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correctAnswer;

    if (isCorrect) {
        score++;
        question.userCorrect = true;
    } else {
        question.userCorrect = false;
    }

    currentScoreEl.textContent = score;
    loadQuestion();

    if (currentQuestionIndex < currentQuestions.length - 1) {
        setTimeout(() => {
            if (userAnswers[currentQuestionIndex] !== null) {
                nextQuestion();
            }
        }, 1000);
    }
}

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

function finishTest() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const totalQuestions = currentQuestions.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 80;

    scorePercent.textContent = `${percentage}%`;
    statCorrect.textContent = score;
    statIncorrect.textContent = totalQuestions - score;
    statTime.textContent = formatTime(elapsedTime);

    if (passed) {
        passFail.textContent = 'ناجح';
        passFail.className = 'pass';
        resultMessage.textContent = 'تهانينا! لقد نجحت في الاختبار التدريبي.';
    } else {
        passFail.textContent = 'لم تنجح';
        passFail.className = 'fail';
        resultMessage.textContent = 'استمر في التدريب! تحتاج إلى 80% للنجاح في اختبار G1 الحقيقي.';
    }

    testTypeResult.textContent = resultTypeLabels[currentTestType] || testTypeLabels[currentTestType] || '-';
    yourScoreResult.textContent = `${score}/${totalQuestions} (${percentage}%)`;
    questionsAttemptedEl.textContent = questionsAttempted;

    const now = new Date();
    if (completionDate) {
        completionDate.textContent = now.toLocaleDateString('ar-CA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    setTimeout(() => {
        scoreCircle.style.background = `conic-gradient(var(--primary) 0% ${percentage}%, var(--gray-200) ${percentage}% 100%)`;
    }, 100);

    generateReview();
    showScreen('resultsContainer');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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
                    ${icon} السؤال ${index + 1}: ${question.question}
                </div>
        `;

        if (question.image) {
            reviewHTML += `
                <img src="${question.image}" alt="وسيلة إيضاح للسؤال" class="review-image"
                     onerror="this.onerror=null; this.src='${imageFallback(question.id)}';">
            `;
        }

        if (answerGiven) {
            const userAnswerText = question.options[userAnswer];
            const correctAnswerText = question.options[question.correctAnswer];
            const userAnswerLetter = getOptionLabel(userAnswer);
            const correctAnswerLetter = getOptionLabel(question.correctAnswer);

            reviewHTML += `
                <div class="review-answer ${isCorrect ? 'correct' : 'incorrect'}">
                    <strong>إجابتك: ${userAnswerLetter}) ${userAnswerText}</strong>
                    ${!isCorrect ? `<br><strong>الإجابة الصحيحة: ${correctAnswerLetter}) ${correctAnswerText}</strong>` : ''}
                </div>
            `;
        } else {
            const correctAnswerLetter = getOptionLabel(question.correctAnswer);
            const correctAnswerText = question.options[question.correctAnswer];

            reviewHTML += `
                <div class="review-answer unanswered">
                    <strong>لم تُجب عن هذا السؤال.</strong><br>
                    <strong>الإجابة الصحيحة: ${correctAnswerLetter}) ${correctAnswerText}</strong>
                </div>
            `;
        }

        reviewHTML += `
            <div class="review-explanation">
                <strong>الشرح:</strong> ${question.explanation}
            </div>
        `;

        reviewHTML += '</div>';
    });

    reviewContainer.innerHTML = reviewHTML;
}

function restartTest() {
    currentQuestions.forEach(q => {
        q.answered = false;
        q.userCorrect = false;
    });

    document.querySelectorAll('.test-card').forEach(option => {
        option.classList.remove('selected');
    });

    startBtn.disabled = true;
    startBtn.innerHTML = '<i class="fas fa-play-circle"></i> ابدأ الاختبار <span class="btn-subtext">اختر نوع الاختبار للبدء</span>';
    currentTestType = null;

    showScreen('startScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToStart() {
    showScreen('startScreen');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('keydown', function(e) {
    if (startScreen.classList.contains('active')) {
        switch (e.key) {
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

    if (!quizContainer.classList.contains('active')) return;

    switch (e.key) {
        case 'ArrowRight':
            if (prevBtn.style.display !== 'none') prevQuestion();
            break;
        case 'ArrowLeft':
            if (nextBtn.style.display !== 'none') nextQuestion();
            break;
        case '1':
        case '2':
        case '3':
        case '4': {
            const optionIndex = parseInt(e.key, 10) - 1;
            if (optionIndex >= 0 && optionIndex <= 3) {
                selectAnswer(optionIndex);
            }
            break;
        }
        case 'Enter':
            if (submitBtn.style.display !== 'none') {
                finishTest();
            } else if (nextBtn.style.display !== 'none') {
                nextQuestion();
            }
            break;
        case 'Escape':
            if (confirm('هل أنت متأكد من إنهاء الاختبار؟ سيتم فقدان تقدمك في هذه المحاولة.')) {
                goToStart();
            }
            break;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.test-card').forEach(option => {
        option.addEventListener('click', function() {
            selectTestType(this.dataset.testType);
        });
    });

    startBtn.disabled = true;

    console.log('تم تشغيل اختبار G1 العربي بنجاح.');
    console.log(`تم تحميل الأسئلة: ${roadSignsQuestions.length} إشارات + ${rulesOfTheRoadQuestions.length} قواعد = ${roadSignsQuestions.length + rulesOfTheRoadQuestions.length} سؤالاً`);
});

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
