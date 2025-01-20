const questions = [
    {
        question: "Complete the sentence: ‘Bringing your own device is usually…’",
        options: ["More risky", "More secure", "No different"],
        answer: 0,
        explanation: "‘Bringing your own device’ is usually more risky than using work-supplied devices because they aren’t protected by your company’s security solutions but may be used to connect to unsecured WiFi or download malicious apps."
    },
    {
        question: "What does HTTPS stand for?",
        options: ["Hyper Text Transfer Protocol Secure", "Hyper Text Transport Protocol Secure", "Hyper Text Transport Protocol Secure"],
        answer: 0,
        explanation: "HTTPS stands for Hyper Text Transfer Protocol Secure, which ensures secure communication over the internet."
    },
    {
        question: "What is Malware?",
        options: ["Malicious software", "A secure software", "An anti-virus program"],
        answer: 0,
        explanation: "Malware is software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system."
    },
    {
        question: "What is Phishing?",
        options: ["A type of fishing", "Fraudulent attempt to steal sensitive data", "A secure login method"],
        answer: 1,
        explanation: "Phishing is a fraudulent attempt to obtain sensitive information, typically through email or fake websites."
    },
    {
        question: "What is a Denial of Service (DOS) attack?",
        options: ["A cyber-attack that overloads a system with traffic", "A method of securing a website", "A software to track website visitors"],
        answer: 0,
        explanation: "A DOS attack aims to make a network service unavailable by overwhelming it with excessive requests."
    },
    {
        question: "What does VPN stand for?",
        options: ["Virtual Private Network", "Very Public Network", "Visual Private Network"],
        answer: 0,
        explanation: "A VPN, or Virtual Private Network, provides a secure connection to the internet by encrypting your data."
    },
    {
        question: "What is Ransomware?",
        options: ["Software that encrypts files and demands a ransom", "A secure backup tool", "A type of firewall"],
        answer: 0,
        explanation: "Ransomware is a type of malware that locks your files and demands a ransom to restore access."
    },
    {
        question: "What is SQL Injection?",
        options: ["A method to manage databases", "A form of cyber-attack that exploits a vulnerability in web applications", "A network defense mechanism"],
        answer: 1,
        explanation: "SQL Injection is a code injection technique that exploits a vulnerability in a web application's database."
    },
    {
        question: "What is Spear Phishing?",
        options: ["Phishing targeting a specific individual", "A method of phishing for general users", "A legitimate way to communicate via email"],
        answer: 0,
        explanation: "Spear Phishing is a highly targeted form of phishing where attackers impersonate a trusted entity to steal information."
    },
    {
        question: "What is Two-Factor Authentication (2FA)?",
        options: ["A process of verifying a user's identity using two different methods", "A method of encrypting data", "A way to disable security systems"],
        answer: 0,
        explanation: "Two-Factor Authentication (2FA) adds an extra layer of security by requiring two forms of identification before granting access."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let results = [];

document.getElementById('start-btn').addEventListener('click', function () {
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
    showQuestion();
});

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const answersList = document.getElementById('answers');
    answersList.innerHTML = '';

    question.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => checkAnswer(index));
        answersList.appendChild(li);
    });

    document.getElementById('question-number').textContent = currentQuestionIndex + 1;
}

function checkAnswer(selectedIndex) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedIndex === correctAnswer) {
        score++;
    }

    results.push({
        question: questions[currentQuestionIndex].question,
        correctAnswer: questions[currentQuestionIndex].options[correctAnswer],
        selectedAnswer: questions[currentQuestionIndex].options[selectedIndex],
        explanation: questions[currentQuestionIndex].explanation
    });

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-screen').style.display = 'none';
    document.getElementById('results-screen').style.display = 'block';
    document.getElementById('score').textContent = `Your score: ${score} / ${questions.length}`;

    const answersExplanation = document.getElementById('answers-explanation');
    results.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('result-item');
        div.innerHTML = `
            <p><strong>Question:</strong> ${result.question}</p>
            <p><strong>Your Answer:</strong> ${result.selectedAnswer}</p>
            <p><strong>Correct Answer:</strong> ${result.correctAnswer}</p>
            <p><strong>Explanation:</strong> ${result.explanation}</p>
            <hr />
        `;
        answersExplanation.appendChild(div);
    });
}

document.getElementById('retry-btn').addEventListener('click', function () {
    score = 0;
    currentQuestionIndex = 0;
    results = [];
    showQuestion();
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';
});

document.getElementById('home-btn').addEventListener('click', function () {
    window.location.href = 'index.html';
});
