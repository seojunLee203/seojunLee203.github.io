const quizData = [
    {
        question: "What is the primary goal of cybersecurity?",
        options: [
            "Protecting computer hardware",
            "Safeguarding sensitive information",
            "Creating computer viruses"
        ],
        answer: "Safeguarding sensitive information"
    },
    {
        question: "Which is a common cybersecurity threat?",
        options: ["Phishing", "DoS Attack", "Both"],
        answer: "Both"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startQuizBtn = document.getElementById("start-quiz");
const quizSection = document.getElementById("quiz-section");
const questionContainer = document.getElementById("question-container");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const nextQuestionBtn = document.getElementById("next-question");
const quizResults = document.getElementById("quiz-results");
const scoreDisplay = document.getElementById("score-display");
const restartQuizBtn = document.getElementById("restart-quiz");

// Event Listeners
startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", loadNextQuestion);
restartQuizBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    startQuizBtn.parentElement.classList.add("hidden");
    quizSection.classList.remove("hidden");
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.textContent = currentQuestion.question;
        quizOptions.innerHTML = currentQuestion.options
            .map(
                (option, index) =>
                    `<button class="btn" onclick="checkAnswer('${option}')">${index + 1}. ${option}</button>`
            )
            .join("");
        nextQuestionBtn.classList.add("hidden");
    } else {
        showResults();
    }
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        alert("Correct!");
        score++;
    } else {
        alert(`Incorrect! The correct answer is: ${correctAnswer}`);
    }
    currentQuestionIndex++;
    nextQuestionBtn.classList.remove("hidden");
}

function showResults() {
    quizSection.classList.add("hidden");
    quizResults.classList.remove("hidden");
    scoreDisplay.textContent = `Your Score: ${score}/${quizData.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizResults.classList.add("hidden");
    startQuizBtn.parentElement.classList.remove("hidden");
}
