const maxNumberOfQuestions = 15;

const correctAnswers = 0;

const incorrectAnswers = 0;

const sampleQuestions = {
    "What is 2 + 2?": {
        "responses": ["3", "4", "5", "6"],
        "correctAnswer": "4"
    },
    "What is 2 x 2?": {
        "responses": ["3", "4", "5", "6"],
        "correctAnswer": "4"
    },
    "What is 4 / 2": {
        "responses": ["3", "4", "5", "6"],
        "correctAnswer": "4"
    },
    "What is 4 x 4": {
        "responses": ["20", "8", "14", "16"],
        "correctAnswer": "4"
    }
}

// Move this back into function block starting on line 20 when done with testing

document.addEventListener("DOMContentLoaded", () => {
    let question = document.getElementById("question");

    let optionChoices = document.getElementsByClassName("question-response");

    question.textContent = `${pickRandomProperty(sampleQuestions)}`


    for (let option of optionChoices) {
        option.textContent = `${sampleQuestions[pickRandomProperty(sampleQuestions)]["responses"][Math.floor(Math.random()*4)]}`
    }



})

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}

document.getElementById("total-questions").textContent = `${maxNumberOfQuestions}`;