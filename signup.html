// Quiz data
const questions = [
    {
        question: "What is the main goal of CyberPatriot?",
        options: [
            "To promote youth interest in cybersecurity and STEM.",
            "To secure government networks.",
            "To develop new cybersecurity tools."
        ],
        correct: 0,
        explanation: "CyberPatriot focuses on preparing the next generation for careers in cybersecurity and STEM."
    },
    {
        question: "What operating systems are commonly used in CyberPatriot competitions?",
        options: [
            "Linux and Windows",
            "MacOS and Linux",
            "Windows and Android"
        ],
        correct: 0,
        explanation: "CyberPatriot teaches cybersecurity skills using Linux and Windows virtual machines."
    },
    {
        question: "What does the 'National Youth Cyber Defense Competition' focus on?",
        options: [
            "Fixing vulnerabilities in virtual networks",
            "Creating software programs",
            "Designing websites"
        ],
        correct: 0,
        explanation: "The competition challenges teams to find and fix vulnerabilities in virtual networks."
    },
    {
        question: "Which of these is an example of phishing?",
        options: [
            "An email pretending to be your bank asking for sensitive information.",
            "A notification about a software update from a trusted source.",
            "A reminder from your school about homework deadlines."
        ],
        correct: 0,
        explanation: "Phishing involves tricking users into revealing sensitive information, often through fake emails."
    },
    {
        question: "What is one way to protect your network from unauthorized access?",
        options: [
            "Using strong passwords and enabling two-factor authentication.",
            "Disabling all firewall protections.",
            "Sharing your passwords with trusted colleagues."
        ],
        correct: 0,
        explanation: "Strong passwords and two-factor authentication are essential for securing your network."
    },
    {
        question: "What is two-factor authentication (2FA)?",
        options: [
            "A method requiring two forms of verification for secure access.",
            "A way to encrypt data.",
            "A process for creating strong passwords."
        ],
        correct: 0,
        explanation: "2FA adds an extra layer of security by requiring two forms of identification before granting access."
    },
    {
        question: "What is a virtual machine?",
        options: [
            "A software-based computer that runs on a physical machine.",
            "A machine used for virtual reality gaming.",
            "A backup device for storing files."
        ],
        correct: 0,
        explanation: "A virtual machine emulates a physical computer and is commonly used in CyberPatriot competitions."
    },
    {
        question: "Why is patch management important?",
        options: [
            "It ensures systems are up-to-date with security fixes.",
            "It increases internet speed.",
            "It improves hardware performance."
        ],
        correct: 0,
        explanation: "Patch management helps protect systems from vulnerabilities by applying updates and fixes."
    },
    {
        question: "What does HTTPS stand for?",
        options: [
            "Hyper Text Transfer Protocol Secure",
            "Hyper Text Transport Protocol Secure",
            "Hyper Transfer Text Protocol Standard"
        ],
        correct: 0,
        explanation: "HTTPS ensures that the communication between your browser and the website is encrypted and secure."
    },
    {
        question: "What is ransomware?",
        options: [
            "Malware that locks your files and demands payment to unlock them.",
            "A tool used to improve cybersecurity.",
            "A type of antivirus software."
        ],
        correct: 0,
        explanation: "Ransomware locks your files and demands payment to unlock them."
    }
];

// Quiz state
let currentQuestion = 0;
let answers = new Array(questions.length).fill(null);

// Display a question
function displayQuestion() {
    const question = questions[currentQuestion];
    const quizContainer = document.getElementById('quiz');
    
    let html = `
        <div class="question">${currentQuestion + 1}. ${question.question}</div>
        <div class="options">
    `;
    
    question.options.forEach((option, index) => {
        const isSelected = answers[currentQuestion] === index;
        html += `
            <div class="option ${isSelected ? 'selected' : ''}" 
                 onclick="selectOption(${index})">
                ${option}
            </div>
        `;
    });
    
    html += '</div>';
    quizContainer.innerHTML = html;
    
    updateProgress();
    updateButtons();
}

// Select an option
function selectOption(index) {
    answers[currentQuestion] = index;
    displayQuestion();
}

// Navigate to the next question or show results
function nextQuestion() {
    if (answers[currentQuestion] === null) {
        alert("Please select an answer before moving on.");
        return;
    }

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

// Navigate to the previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
    }
}

// Update the progress bar
function updateProgress() {
    const progress = document.querySelector('.progress');
    const percentage = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = `${percentage}%`;
}

// Update navigation buttons
function updateButtons() {
    document.getElementById('prev-btn').disabled = currentQuestion === 0;
    const nextBtn = document.getElementById('next-btn');
    nextBtn.textContent = currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next';
}

// Show quiz results
function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.querySelector('.navigation').style.display = 'none';
    document.getElementById('results').style.display = 'block';

    const score = answers.reduce((total, answer, index) => 
        total + (answer === questions[index].correct ? 1 : 0), 0);
    
    document.getElementById('score').textContent = score;
    
    const feedback = document.getElementById('feedback');
    if (score <= 3) {
        feedback.textContent = "It's definitely time to brush up on your cybersecurity basics.";
    } else if (score <= 7) {
        feedback.textContent = "Good effort! But there's room for improvement in your cybersecurity knowledge.";
    } else {
        feedback.textContent = "Excellent! You have a strong understanding of cybersecurity basics.";
    }

    displayAnswerReview();
}

// Display the review of answers
function displayAnswerReview() {
    const reviewContainer = document.getElementById('answer-review');
    let html = '<h2>Review Your Answers</h2>';

    questions.forEach((question, index) => {
        const userAnswer = answers[index] !== null ? question.options[answers[index]] : 'Not answered';
        const correctAnswer = question.options[question.correct];
        
        html += `
            <div class="answer-item">
                <h3>Question ${index + 1}</h3>
                <p><strong>Your answer:</strong> ${userAnswer}</p>
                <p><strong>Correct answer:</strong> ${correctAnswer}</p>
                <p><strong>Explanation:</strong> ${question.explanation}</p>
            </div>
        `;
    });

    reviewContainer.innerHTML = html;
}

// Restart the quiz
function restartQuiz() {
    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);
    document.getElementById('quiz').style.display = 'block';
    document.querySelector('.navigation').style.display = 'flex';
    document.getElementById('results').style.display = 'none';
    displayQuestion();
}

// Initialize quiz
displayQuestion();
