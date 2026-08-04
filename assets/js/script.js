/**
 * script.js
---------
Quiz logic for the Physics & Astronomy Quiz.
Depends on the QUESTIONS array defined in questions.js
(which must be loaded before this file — it already is,
per the <script> order in index.html).
 */

document.addEventListener("DOMContentLoaded", () => {
// ---------------------------------------------------------
// Config
// ---------------------------------------------------------
const QUESTIONS_PER_QUIZ = 10;

// ---------------------------------------------------------
// DOM references
// ---------------------------------------------------------
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



// ---------------------------------------------------------
// Category selection
// ---------------------------------------------------------
btn.addEventListener("click", () => {
    categoryButtons.forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");

    if (btn.id === "physics-btn") {
        state.category = "physics";
    } else if (btn.id === "astronomy-btn") {
        state.category = "astronomy";
    } else if (btn.id === "mixed-btn") {
        state.category = "mixed";
    }
});

/**
 * Not sure how to add the function to select a category
 * and then to have the user click start quiz
 */

