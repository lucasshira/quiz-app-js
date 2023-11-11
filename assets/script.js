const quiz = [
    {
        question: 'What does HTML stand for?',
        a: 'Hyper Text Markup Language',
        b: 'High Tech Modern Language',
        c: 'Home Tool Markup Language',
        d: 'Hyperlink and Text Markup Language',
        correct: 'a',
    }, {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'Python',
        c: 'C#',
        d: 'JavaScript',
        correct: 'd',
    }, {
        question: 'Which of the following is a valid way to comment code in JavaScript?',
        a: '// This is a comment',
        b: '/* This is a comment */',
        c: '<!-- This is a comment -->',
        d: '# This is a comment',
        correct: 'a',
    }, {
        question: 'What is the purpose of the JavaScript forEach method?',
        a: 'Iterating over an array\'s elements',
        b: 'Performing complex mathematical calculations',
        c: 'Changing the background color of a web page',
        d: 'Defining CSS styles',
        correct: 'a',
    }, {
        question: 'What is the CSS box model used for?',
        a: 'Defining the color of a box',
        b: 'Creating 3D shapes',
        c: 'Controlling the layout and spacing of elements',
        d: 'Modeling physical boxes',
        correct: 'c',
    }, {
        question: 'Which data type in JavaScript represents a list of values and is often used to store multiple items?',
        a: 'Number',
        b: 'String',
        c: 'Array',
        d: 'Object',
        correct: 'c',
    }, {
        question: 'In Python, how do you define a function?',
        a: 'def function_name():',
        b: 'function function_name:',
        c: 'define function_name():',
        d: 'func function_name():',
        correct: 'a',
    }, {
        question: 'What does the acronym "SQL" stand for?',
        a: 'Structured Query Language',
        b: 'Simple Query Language:',
        c: 'System Query Language',
        d: 'Script Query Language',
        correct: 'a',
    }, {
        question: 'What is the primary use of the "try...catch" statement in JavaScript?',
        a: 'Handling exceptions and errors',
        b: 'Declaring variables',
        c: 'Defining functions',
        d: 'Controlling the flow of a program',
        correct: 'a',
    }, {
        question: 'What is the primary role of a JavaScript framework like React?',
        a: 'Storing data in a database',
        b: 'Styling web pages',
        c: 'Creating interactive user interfaces',
        d: 'Running server-side code',
        correct: 'c',
    }
];

const quizData = document.getElementById('quizData');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');
const radios = document.getElementsByName('answer');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quiz[currentQuiz];
    questionElement.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

loadQuiz();

submitBtn.addEventListener('click', () => {
    let selectedAnswer = false;
    let userAnswer = null;
    
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedAnswer = true;
            userAnswer = radios[i].value;
            break;
        }
    }

    if (!selectedAnswer) {
        alert("You need to choose an option");
    } else {

        const rightAnswer = quiz[currentQuiz].correct;

        if (userAnswer === rightAnswer) {
            alert("The answer is right!");
            score++;
        } else {
            const correctAnswerContent = quiz[currentQuiz][rightAnswer];
            alert("The right answer is: " + correctAnswerContent);
        }

        radios.forEach((radio) => {
            radio.checked = false;
        });

        currentQuiz++;

        if (currentQuiz < quiz.length) {
            loadQuiz();
        } else {
            quizData.innerHTML = `<h2>You answered ${score}/${quiz.length} questions correctly!</h2><button onClick="location.reload()">Try Again!</button>`
        }
    }
});
