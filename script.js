// Quiz Data
const quizData = {
    beginner: [
        {
            question: "What is a strong password?",
            options: ["12345678", "Your name and birthday", "A mix of letters, numbers, and symbols"],
            answer: "A mix of letters, numbers, and symbols"
        },
        {
            question: "Which of these describes phishing?",
            options: ["Sending fake emails", "Gaining unauthorized access", "Installing malware"],
            answer: "Sending fake emails"
        }
    ],
    intermediate: [
        {
            question: "What does DNS convert domain names into?",
            options: ["IP Address", "Hex Code", "Binary"],
            answer: "IP Address"
        }
    ]
};

// Initialize quiz
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const resetButton = document.getElementById("reset-btn");

document.getElementById("beginner-btn").addEventListener("click", () => startQuiz("beginner"));
document.getElementById("intermediate-btn").addEventListener("click", () => startQuiz("intermediate"));

// Start Quiz
function startQuiz(category) {
    currentCategory = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

// Show Question
function showQuestion() {
    const currentQuestion = currentCategory[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
    questionContainer.classList.remove("hidden");
}

// Check Answer
function checkAnswer(selectedOption) {
    if (selectedOption === currentCategory[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentCategory.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

// End Quiz
function endQuiz() {
    questionContainer.classList.add("hidden");
    scoreElement.textContent = `Your Score: ${score}/${currentCategory.length}`;
    scoreElement.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

// Reset Quiz
resetButton.addEventListener("click", () => {
    questionContainer.classList.add("hidden");
    scoreElement.classList.add("hidden");
    resetButton.classList.add("hidden");
});
