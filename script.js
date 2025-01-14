const quizData = [
    {
        question: "Complete the sentence: ‘Bringing your own device is usually…’",
        options: [
            "More risky than using work-supplied devices",
            "Just as risky as using work-supplied devices",
            "Less risky than using work-supplied devices"
        ],
        answer: "More risky than using work-supplied devices",
        explanation: "‘Bringing your own device’ is usually more risky because they aren’t protected by your company’s security solutions."
    },
    {
        question: "Which of the following is more likely to be the victim of a cyberattack?",
        options: ["Small business", "Large business"],
        answer: "Small business",
        explanation: "Small businesses are more likely targets as they often lack robust cybersecurity measures."
    },
    {
        question: "Of the following passwords, which is the most secure?",
        options: [
            "123456",
            "dragon",
            "Bi%DuIn!So57Lo",
            "D00R8377"
        ],
        answer: "Bi%DuIn!So57Lo",
        explanation: "Strong passwords combine letters, numbers, and symbols to resist brute-force attacks."
    }
];

let currentQuestionIndex = 0;
let score = 0;

// DOM Elements
const startQuizBtn = document.getElementById("start-quiz-btn");
const quizMain = document.getElementById("quiz-main");
const quizContainer = document.getElementById("quiz-container");
const quizQuestion = document.getElementById("quiz-question");
const quizAnswers = document.getElementById("quiz-answers");
const nextQuestionBtn = document.getElementById("next-question-btn");
const quizResults = document.getElementById("quiz-results");
const finalScore = document.getElementById("final-score");
const solutions = document.getElementById("solutions");
const restartQuizBtn = document.getElementById("restart-quiz-btn");

// Event Listeners
startQuizBtn.addEventListener("click", startQuiz);
nextQuestionBtn.addEventListener("click", loadNextQuestion);
restartQuizBtn.addEventListener("click", restartQuiz);

function startQuiz() {
    startQuizBtn.classList.add("hidden");
    quizMain.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    loadNextQuestion();
}

function loadNextQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const currentQuestion = quizData[currentQuestionIndex];
        quizQuestion.textContent = currentQuestion.question;
        quizAnswers.innerHTML = "";
        currentQuestion.options.forEach(option => {
            const button = document.createElement("button");
            button.classList.add("btn");
            button.textContent = option;
            button.addEventListener("click", () => handleAnswer(option));
            quizAnswers.appendChild(button);
        });
        quizContainer.classList.remove("hidden");
        nextQuestionBtn.classList.add("hidden");
    } else {
        showResults();
    }
}

function handleAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
        alert("Correct!");
    } else {
        alert(`Incorrect! Correct Answer: ${currentQuestion.answer}`);
    }
    currentQuestionIndex++;
    nextQuestionBtn.classList.remove("hidden");
}

function showResults() {
    quizContainer.classList.add("hidden");
    quizResults.classList.remove("hidden");
    finalScore.textContent = `You scored ${score}/${quizData.length}!`;
    solutions.innerHTML = quizData
        .map((q, i) => `<p><strong>Q${i + 1}:</strong> ${q.question} <br><em>Answer:</em> ${q.answer} <br>${q.explanation}</p>`)
        .join("");
}

function restartQuiz() {
    quizResults.classList.add("hidden");
    quizMain.classList.add("hidden");
    startQuizBtn.classList.remove("hidden");
}
