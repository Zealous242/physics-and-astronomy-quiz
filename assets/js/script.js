const maxNumberOfQuestions = 10;

let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let questionOrder = [];
let currentQuestionData = null;
let currentCorrectAnswerIndex = 0;
let selectedQuestionSet = allQuestions; // Default to all questions

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("results-screen").hidden = true;
});

const categoryButtons = document.querySelectorAll("#physics-btn, #astronomy-btn, #mixed-btn");


categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;
        if (category === "physics") {
            selectedQuestionSet = physicsQuestions;
            document.getElementById("header-category-title").textContent = "Physics";
        } else if (category === "astronomy") {
            selectedQuestionSet = astronomyQuestions;
            document.getElementById("header-category-title").textContent = "Astronomy";
        } else if (category === "mixed") {
            selectedQuestionSet = allQuestions;
            document.getElementById("header-category-title").textContent = "Mixed";
        }

        document.getElementById("welcome-screen").style.display = "none";
        initQuiz();
    });
});

let headerTitle = document.getElementById("header-category-title");
//headerTitle.textContent = document.getElementById("category-title").textContent

function showWelcomeScreen() {
    document.getElementById("welcome-screen").style.display = "block";
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("results-screen").hidden = true;
}

function initQuiz() {
    document.getElementById("total-questions").textContent = maxNumberOfQuestions;
    document.getElementById("current-question").textContent = 1;
    document.getElementById("score-value").textContent = score;
    document.getElementById("next-btn").disabled = true;
    document.getElementById("results-screen").hidden = true;
    document.getElementById("welcome-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "flex";

    document.querySelectorAll(".answer-btn").forEach((button) => {
        button.addEventListener("click", () => handleAnswer(Number(button.dataset.index)));
    });

    document.getElementById("next-btn").addEventListener("click", handleNext);
    document.getElementById("restart-btn").addEventListener("click", restartQuiz);
    document.getElementById("restart-in-quiz-btn").addEventListener("click", restartQuiz);
    document.getElementById("choose-category-btn").addEventListener("click", showWelcomeScreen);
    document.getElementById("results-choose-category-btn").addEventListener("click", showWelcomeScreen);

    questionOrder = shuffleArray(selectedQuestionSet.map((_, index) => index));
    loadQuestion();
}

function shuffleArray(items) {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

function loadQuestion() {
    const questionId = questionOrder[currentQuestionIndex];
    const questionData = selectedQuestionSet[questionId];

    if (!questionData) {
        return;
    }

    const shuffledOptions = shuffleArray(questionData.options);
    const correctAnswerText = questionData.options[questionData.answer];
    currentCorrectAnswerIndex = shuffledOptions.indexOf(correctAnswerText);

    currentQuestionData = {
        ...questionData,
        options: shuffledOptions,
        answer: currentCorrectAnswerIndex
    };

    document.getElementById("question").textContent = currentQuestionData.question;
    document.getElementById("current-question").textContent = currentQuestionIndex + 1;

    const answerOptions = document.querySelectorAll("#answers-container .answer-option");

    answerOptions.forEach((optionElement, index) => {
        const button = optionElement.querySelector(".answer-btn");
        const text = optionElement.querySelector(".answer-text");

        button.classList.remove("correct", "incorrect");
        button.disabled = false;
        button.textContent = String.fromCharCode(65 + index);
        text.textContent = currentQuestionData.options[index];
    });

    document.getElementById("feedback-message").textContent = "";
    document.getElementById("correct-answer").textContent = "";
    answered = false;
    document.getElementById("next-btn").disabled = true;
}

function handleAnswer(selectedIndex) {
    if (answered) {
        return;
    }

    answered = true;
    const answerButtons = document.querySelectorAll(".answer-btn");

    answerButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === currentCorrectAnswerIndex) {
            button.classList.add("correct");
        } else if (index === selectedIndex) {
            button.classList.add("incorrect");
        }
    });

    if (selectedIndex === currentCorrectAnswerIndex) {
        score += 1;
        document.getElementById("score-value").textContent = score;
        document.getElementById("feedback-message").textContent = "Correct!";
    } else {
        document.getElementById("feedback-message").textContent = "Not quite — try the next one.";
        document.getElementById("correct-answer").textContent = `Correct answer: ${currentQuestionData.options[currentCorrectAnswerIndex]}`;
    }

    document.getElementById("next-btn").disabled = false;
}

function handleNext() {
    if (!answered) {
        return;
    }

    currentQuestionIndex += 1;

    if (currentQuestionIndex >= maxNumberOfQuestions) {
        showResults();
        return;
    }

    loadQuestion();
}

function showResults() {
    document.getElementById("quiz-screen").style.display = "none";
    document.getElementById("results-screen").hidden = false;
    document.getElementById("final-score").textContent = score;
    document.getElementById("max-score").textContent = maxNumberOfQuestions;

    if (score === maxNumberOfQuestions) {
        document.getElementById("result-message").textContent = "Perfect Score! Well Done, Einstein Would Be Proud!";
    } else if (score >= Math.round(maxNumberOfQuestions * 0.7)) {
        document.getElementById("result-message").textContent = "Good job, Rocket Scientist in Training!";
    } else if (score >= Math.round(maxNumberOfQuestions * 0.5)) {
        document.getElementById("result-message").textContent = "Ooooo, Halfway to the Stars!";
    } else {
        document.getElementById("result-message").textContent = "Light Years to Go... Keep  Studying!";
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    questionOrder = shuffleArray(selectedQuestionSet.map((_, index) => index));

    document.getElementById("score-value").textContent = score;
    document.getElementById("results-screen").hidden = true;
    document.getElementById("quiz-screen").style.display = "flex";
    loadQuestion();
}