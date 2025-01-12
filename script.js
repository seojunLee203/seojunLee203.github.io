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
        },
        {
            question: "What does 'https' in a URL stand for?",
            options: ["Hyper Text Transfer Protocol Secure", "High Text Transfer Secure", "None of the above"],
            answer: "Hyper Text Transfer Protocol Secure"
        }
    ],
    intermediate: [
        {
            question: "What does DNS convert domain names into?",
            options: ["IP Address", "Hex Code", "Binary"],
            answer: "IP Address"
        },
        {
            question: "What is a DoS attack?",
            options: ["Denial of Service", "Data on Site", "Dynamic Overload System"],
            answer: "Denial of Service"
        },
        {
            question: "Which of the following describes encryption?",
            options: ["Securing data into unreadable form", "Data transfer method", "Code to decrypt passwords"],
            answer: "Securing data into unreadable form"
        }
    ],
    advanced: [
        {
            question: "What is used for encrypting data at the network level?",
            options: ["IPSec", "S/MIME", "SMTP", "HTTPS"],
            answer: "IPSec"
        },
        {
            question: "Which protocol is the least secure?",
            options: ["WEP", "WPA2", "WPA3", "SFTP"],
            answer: "WEP"
        },
        {
            question: "Which tool is used to scan for vulnerabilities?",
            options: ["Angry IP Scanner", "Wireshark", "Metasploit", "Nmap"],
            answer: "Nmap"
        }
    ]
};

// Initialize Quiz
let currentCategory = null;
let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const scoreElement = document.getElementById("score");
const resetButton = document.getElementById("reset-btn");

// Attach Event Listeners
document.getElementById("beginner-btn").addEventListener("click", () => startQuiz("beginner"));
document.getElementById("intermediate-btn").addEventListener("click", () => startQuiz("intermediate"));
document.getElementById("advanced-btn").addEventListener("click", () => startQuiz("advanced"));

// Start Quiz
function startQuiz(category) {
    currentCategory = quizData[category];
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
}

// Display Question
function displayQuestion() {
    const currentQuestion = currentCategory[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answersElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(option);
        answersElement.appendChild(button);
    });
    questionContainer.style.display = "block";
}

// Check Answer
function checkAnswer(selectedOption) {
    const currentQuestion = currentCategory[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < currentCategory.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

// End Quiz
function endQuiz() {
    questionContainer.style.display = "none";
    scoreElement.textContent = `Your Score: ${score}/${currentCategory.length}`;
    scoreElement.style.display = "block";
    resetButton.style.display = "block";
}

// Reset Quiz
resetButton.addEventListener("click", () => {
    scoreElement.style.display = "none";
    resetButton.style.display = "none";
    quest
