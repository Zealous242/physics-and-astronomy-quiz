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

const sampleQuestions2 = [{
        question: "What is 2 + 2?",
        options: [
            "3",
            "4",
            "5",
            "6",
        ],
        answer: "4",
        explanation: ""
    },
    {
        question: "What is 2 x 3?",
        options: [
            "3",
            "4",
            "5",
            "6",
        ],
        answer: "6",
        explanation: ""
    },
    {
        question: "What is 2 + 3?",
        options: [
            "3",
            "4",
            "5",
            "6",
        ],
        answer: "5",
        explanation: ""
    },
    {
        question: "What is 6 -  3?",
        options: [
            "3",
            "4",
            "5",
            "6",
        ],
        answer: "6",
        explanation: ""
    }
]


document.addEventListener("DOMContentLoaded", loadNextQuestion())

//document.getElementsByClassName

function loadNextQuestion() {
    let question = document.getElementById("question");

    let optionChoices = document.getElementsByClassName("question-response");

    let chosenQuestion = sampleQuestions2[Math.floor(Math.random() * sampleQuestions2.length)]

    question.textContent = `${chosenQuestion.question}`


    for (let option of optionChoices) {
        let chosenOptions = [];
        let randomPick = chosenQuestion.options[Math.floor(Math.random() * 4)]
        if (!chosenOptions.includes(randomPick)) {
            chosenOptions.push(randomPick)

        }

        option.textContent = `${randomPick}`

    }

    let firstResponseValue = document.getElementById("first-question-response").textContent;

    document.getElementById("first-question-response-btn").value = firstResponseValue


    let secondResponseValue = document.getElementById("second-question-response").textContent;

    document.getElementById("second-question-response-btn").value = secondResponseValue


    let thirdResponseValue = document.getElementById("third-question-response").textContent;

    document.getElementById("third-question-response-btn").value = thirdResponseValue


    let fourthResponseValue = document.getElementById("fourth-question-response").textContent;

    document.getElementById("fourth-question-response-btn").value = fourthResponseValue


}

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1 / ++count)
            result = prop;
    return result;
}



document.getElementById("total-questions").textContent = `${maxNumberOfQuestions}`;