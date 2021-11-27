const quizData = [
    {
        question: "React.js is a free and open-source frontend __________",
        a: " Bootstrap library",
        b: " JavaScript library",
        c: " CSS library",
        d: " None of the Above",
        correct: "b",
    },
    {
        question: "React.js was initially released in__________",
        a: " May 29, 2013",
        b: " April 29, 2013",
        c: " June 29, 2013",
        d: " May 29, 2014",
        correct: "a",
    },
    {
        question: "React.js had written in__________",
        a: ' JavaScript' ,
        b: ' Python',
        c: ' Java',
        d: ' Php',
        correct: "a",
    },
    {
        question: "__________ is used in Reat.js to increase performanece?",
        a: "Virtual DOM",
        b: "Original DOM",
        c: "Both Original & Virtual DOM",
        d: "None of the Above",
        correct: "a",
    },
    {
        question: "What is Babel?",
        a: " A JavaScript transpiler",
        b: " A JavaScript interpreter",
        c: " A JavaScript Compiler",
        d: " None of the above",
        correct: "c",
    },{
        question: "Which of the following command is used to create a react app?",
        a: " install -g create-react-app",
        b: " npm install create-react-app",
        c: " npm install -g create-react-app",
        d: " None of the Above",
        correct: "a",
    },{
        question: "__________ port is the default where the webpack-dev-server will run",
        a: " 3030",
        b: " 8080",
        c: " 3306",
        d: " 3000",
        correct: "b",
    },{
        question: "A valid react componenet can return only __________ element.",
        a: " 2",
        b: " 1",
        c: " 3",
        d: " 4",
        correct: "b",
    },{
        question: "A state in React.js is also known as _________",
        a: " A permanent storage.",
        b: " An Internal storage of the component.",
        c: " An External storage of the component",
        d: " All of the above",
        correct: "b",
    },{
        question: "In React what is used to pass data to a component from outside?",
        a: " setState",
        b: " render with arguments",
        c: " props",
        d: " PropTypes",
        correct: "c",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});