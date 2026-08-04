/**
 * script.js
---------
Quiz logic for the Physics & Astronomy Quiz.
Depends on the QUESTIONS array defined in questions.js
(which must be loaded before this file — it already is,
per the <script> order in index.html).
 */

document.addEventListener("DOMContentLoaded", () => {

/**
 * Config
 */

const QUESTIONS_PER_QUIZ = 10;

/**
 * DOM references
 */

const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");

const categoryButtons = document.querySelectorAll(
    "#category-selection button"
);
const startBtn = document.getElementById("start-btn");

const currentQuestionEl = document.getElementById("current-question");
const totalQuestionsEl = document.getElementById("total-questions");
const scoreValueEl = document.getElementById("score-value");

const questionEl = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");
const answerButtons = document.querySelectorAll(".answer-btn");

const feedbackMessageEl = document.getElementById("feedback-message");
const correctAnswerEl = document.getElementById("correct-answer");
const nextBtn = document.getElementById("next-btn");

const finalScoreEl = document.getElementById("final-score");
const maxScoreEl = document.getElementById("max-score");
const resultMessageEl = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

/**
 * State
 */

let state = {
    category: "mixed",
    quizQuestions: [],
    currentIndex: 0,
    score: 0,
    answered: false
};

/**
 * Helpers 
 */

// Fisher-Yates shuffle, returns a new shuffled array
function shuffle(array) {
    const result = [...array];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}

function showScreen(screen) {
    [welcomeScreen, quizScreen, resultsScreen].forEach((s) => {
    s.hidden = s !== screen;
    });
}

function buildQuizQuestions(category) {
    let pool;
    if (category === "mixed") {
        pool = QUESTIONS;
    } else {
        pool = QUESTIONS.filter((q) => q.category === category);
    }
    const shuffled = shuffle(pool);
    return shuffled.slice(0, Math.min(QUESTIONS_PER_QUIZ, shuffled.length));
}

/**
 * Category Selection
 */

categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        categoryButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");

    if (btn.id === "physics-btn") state.category = "physics";
    else if (btn.id === "astronomy-btn") state.category = "astronomy";
    else state.category = "mixed";
    });
});

/**
 * Start quiz
 */

startBtn.addEventListener("click", () => {
    state.quizQuestions = buildQuizQuestions(state.category);
    state.currentIndex = 0;
    state.score = 0;
    scoreValueEl.textContent = "0";
    totalQuestionsEl.textContent = state.quizQuestions.length;

    showScreen(quizScreen);
    loadQuestion();
});

/**
 * Load a question onto the screen
 */

function loadQuestion() {
    state.answered = false;
    feedbackMessageEl.textContent = "";
    correctAnswerEl.textContent = "";
    nextBtn.hidden = true;

    const q = state.quizQuestions[state.currentIndex];
        currentQuestionEl.textContent = state.currentIndex + 1;
        questionEl.textContent = q.question;

    const answerRows = answersContainer.querySelectorAll("div");
        answerRows.forEach((row, i) => {
    const btn = row.querySelector(".answer-btn");
    const label = row.querySelector("p");
        label.textContent = q.answers[i];
        btn.disabled = false;
        btn.classList.remove("correct", "incorrect");
        });
    }

