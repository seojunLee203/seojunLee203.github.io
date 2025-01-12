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
            options: ["Sending fake emails", "Hacking into systems", "Installing malware"],
            answer: "Sending fake emails"
        },
        {
            question: "What does 'https' in a URL stand for?",
            options: ["Hyper Text Transfer Protocol Secure", "High Transfer Protocol Service", "None of the above"],
            answer: "Hyper Text Transfer Protocol Secure"
        },
        {
            question: "What is the primary purpose of antivirus software?",
            options: ["Speed up your computer", "Prevent malware infections", "Provide internet access"],
            answer: "Prevent malware infections"
        }
    ],
    intermediate: [
        {
            question: "What does DNS convert domain names into?",
            options: ["IP Address", "Binary", "Encrypted Text"],
            answer: "IP Address"
        },
        {
            question: "What is a DoS attack?",
            options: ["Denial of Service", "Dynamic Overload System", "Data on Site"],
            answer: "Denial of Service"
        },
        {
            question: "Which protocol is used for secure communication over the internet?",
            options: ["HTTP", "HTTPS", "FTP"],
            answer: "HTTPS"
        },
        {
            question: "Which of the following is an example of social engineering?",
            options: ["Using brute force attacks", "Tricking someone into giving personal information", "Installing a virus"],
            answer: "Tricking someone into giving personal information"
        }
    ],
    advanced: [
        {
            question: "What is used for encrypting data at the network level?",
            options: ["IPSec", "S/MIME", "SMTP"],
            answer: "IPSec"
        },
        {
            question: "Which is the least secure encryption protocol?",
            options: ["WEP", "WPA2", "WPA3"],
            answer: "WEP"
        },
        {
            question: "What does CHAP stand for?",
            options: [
                "Circuit Handshake Authentication Protocols",
                "Challenge Handshake Authentication Protocols",
                "Challenge Hardware Authentication Protocols"
            ],
            answer: "Challenge Handshake Authentication Protocols"
        },
        {
            question: "What is the process of hiding information within an image called?",
            options: ["Steganography", "Data Masking", "Encryption"],
            answer: "Steganography"
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
        alert("Correct!");
        score++;
    } else {
        alert(`Incorrect! The correct answer is: ${currentQuestion.answer}`);
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
    questionContainer.style.display = "none";
    scoreElement.style.display = "none";
    resetButton.style.display = "none";
});
