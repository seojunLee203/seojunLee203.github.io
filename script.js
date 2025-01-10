import { auth } from './firebase-config.js';

// Quiz Data
const quizData = {
    beginner: [
        {
            question: "Which of these describes an ongoing pursuit by an individual/group?",
            options: ["Stalking", "Identity theft", "Phishing", "Bullying"],
            answer: "Stalking"
        },
        {
            question: "Which one of the following is considered in the category of computer threats?",
            options: ["Soliciting", "DoS attack", "Phishing", "Both A and B"],
            answer: "DoS attack"
        }
        // Add more beginner questions here
    ],
    intermediate: [
        {
            question: "What kind of malware does not replicate or clone itself through infection?",
            options: ["Rootkits", "Worms", "Viruses", "Trojans"],
            answer: "Trojans"
        },
        {
            question: "The DNS would convert any domain name into:",
            options: ["Hex", "Binary", "URL", "IP"],
            answer: "IP"
        }
        // Add more intermediate questions here
    ],
    advanced: [
        {
            question: "What is changed when cypher algorithms are used?",
            options: ["Scalar test", "Plain test", "Complex test", "None"],
            answer: "Plain test"
        },
        {
            question: "Which of the following is the least strong security encryption?",
            options: ["WPA", "WPA3", "WEP", "WPA2"],
            answer: "WEP"
        }
        // Add more advanced questions here
    ]
};

// State
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;
let solutions = [];

// DOM Elements
const questionBlock = document.getElementById("question-block");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const viewSolutionsButton = document.getElementById("view-solutions-btn");
const resetButton = document.getElementById("reset-btn");
const solutionsBlock = document.getElementById("solutions-block");
const solutionList = document.getElementById("solution-list");

// Event Listeners
document.getElementById("beginner-btn").addEventListener("click", () => startQuiz("beginner"));
document.getElementById("intermediate-btn").addEventListener("click", () => startQuiz("intermediate"));
document.getElementById("advanced-btn").addEventListener("click", () => startQuiz("advanced"));
resetButton.addEventListener("click", resetQuiz);
viewSolutionsButton.addEventListener("click", showSolutions);

// Start Quiz
function startQuiz(category) {
    currentCategory = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    solutions = [];
    questionBlock.classList.remove("hidden");
    loadQuestion();
}

// Load Question
function loadQuestion() {
    const currentQuestion = currentCategory[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
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
    solutions.push({ question: currentQuestion.question, selectedOption, isCorrect });
    if (isCorrect) score++;
    currentQuestionIndex++;
    if (currentQuestionIndex < currentCategory.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// End Quiz
function endQuiz() {
    questionElement.textContent = "Quiz Complete!";
    answersElement.innerHTML = "";
    scoreElement.textContent = `Your Score: ${score}/${currentCategory.length}`;
    viewSolutionsButton.classList.remove("hidden");
    resetButton.classList.remove("hidden");
}

// Show Solutions
function showSolutions() {
    solutionsBlock.classList.remove("hidden");
    solutionList.innerHTML = "";
    solutions.forEach(solution => {
        const listItem = document.createElement("li");
        listItem.textContent = `${solution.question} - Your Answer: ${solution.selectedOption} (${solution.isCorrect ? "Correct" : "Incorrect"})`;
        solutionList.appendChild(listItem);
    });
}

// Reset Quiz
function resetQuiz() {
    questionBlock.classList.add("hidden");
    solutionsBlock.classList.add("hidden");
    scoreElement.textContent = "";
    viewSolutionsButton.classList.add("hidden");
    resetButton.classList.add("hidden");
}
