// Quiz Data
const quizData = {
    passwords: [
        {
            question: "What is a strong password?",
            options: [
                "12345678",
                "Your name and birthday",
                "A mix of letters, numbers, and symbols",
            ],
            answer: "A mix of letters, numbers, and symbols",
            explanation: "Strong passwords are difficult to guess and combine letters, numbers, and symbols.",
        },
        {
            question: "Should you use the same password for multiple accounts?",
            options: ["Yes", "No"],
            answer: "No",
            explanation: "Using the same password increases risk. If one account is compromised, others will be too.",
        },
    ],
    phishing: [
        {
            question: "What is a phishing email?",
            options: [
                "An email asking for personal information",
                "A newsletter from a trusted source",
                "An email with no links",
            ],
            answer: "An email asking for personal information",
            explanation: "Phishing emails try to trick you into providing sensitive information.",
        },
    ],
    safeBrowsing: [
        {
            question: "How can you tell if a website is secure?",
            options: [
                "It has 'https://' in the URL",
                "It has a lot of ads",
                "It has a flashy design",
            ],
            answer: "It has 'https://' in the URL",
            explanation: "'https://' means the site uses encryption for data protection.",
        },
    ],
};

// Global Variables
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let solutions = [];

// DOM Elements
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");
const quizContainer = document.getElementById("quiz-container");
const categorySelection = document.getElementById("category-selection");
const resetButton = document.getElementById("reset-button");
const viewSolutionsButton = document.getElementById("view-solutions");
const solutionsContainer = document.getElementById("solutions-container");
const solutionList = document.getElementById("solution-list");

// Load Current User
const currentUser = localStorage.getItem("currentUser");
if (!currentUser) {
    alert("Please log in to access the quiz.");
    window.location.href = "login.html";
} else {
    const userDisplay = document.getElementById("current-user");
    if (userDisplay) {
        userDisplay.textContent = currentUser;
    }
}

// Attach Event Listeners to Category Buttons
document.getElementById("passwords-btn").addEventListener("click", () => startQuiz("passwords"));
document.getElementById("phishing-btn").addEventListener("click", () => startQuiz("phishing"));
document.getElementById("safeBrowsing-btn").addEventListener("click", () => startQuiz("safeBrowsing"));

// Start Quiz
function startQuiz(category) {
    currentCategory = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    solutions = [];

    categorySelection.style.display = "none";
    quizContainer.style.display = "block";
    scoreElement.style.display = "block";
    scoreElement.textContent = `Score: ${score}`;

    loadQuestion();
}

// Load Question
function loadQuestion() {
    const currentQuestion = currentCategory[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    answersElement.innerHTML = "";
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
}

// Check Answer
function checkAnswer(selectedOption) {
    const currentQuestion = currentCategory[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    solutions.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        yourAnswer: selectedOption,
        isCorrect: isCorrect,
        explanation: currentQuestion.explanation,
    });

    if (isCorrect) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < currentCategory.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// End Quiz
function endQuiz() {
    quizContainer.style.display = "none";
    finalScoreElement.style.display = "block";
    finalScoreElement.textContent = `You scored ${score}/${currentCategory.length}!`;
    resetButton.style.display = "block";
    viewSolutionsButton.style.display = "block";

    // Update the scoreboard
    updateScoreboard();
}

// Reset Quiz
resetButton.addEventListener("click", resetQuiz);

function resetQuiz() {
    categorySelection.style.display = "block";
    quizContainer.style.display = "none";
    finalScoreElement.style.display = "none";
    scoreElement.style.display = "none";
    resetButton.style.display = "none";
    viewSolutionsButton.style.display = "none";
    solutionsContainer.style.display = "none";
}

// Show Solutions
viewSolutionsButton.addEventListener("click", showSolutions);

function showSolutions() {
    solutionsContainer.style.display = "block";
    solutionList.innerHTML = "";
    solutions.forEach((solution) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${solution.question} | Correct Answer: ${solution.correctAnswer} | Your Answer: ${solution.yourAnswer} (${solution.isCorrect ? "Correct" : "Incorrect"}) | Explanation: ${solution.explanation}`;
        solutionList.appendChild(listItem);
    });
}

// Update Scoreboard
function updateScoreboard() {
    const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];
    scoreboard.push({ username: currentUser, score });
    scoreboard.sort((a, b) => b.score - a.score); // Sort by highest score
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
}
