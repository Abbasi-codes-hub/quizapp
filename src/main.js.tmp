import './css/style.css';
import quiz from './quizQuestionData.js';

const questionEl = document.querySelector('.question h1');
const optionLabels = document.querySelectorAll('[class^="option_"]');
const submitBtn = document.querySelector('.submit');
const answerInputs = document.querySelectorAll('.answer');
const scoreSpans = document.querySelectorAll('.scores span');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    
    const currentQuizData = quiz[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    optionLabels[0].innerText = currentQuizData.a;
    optionLabels[1].innerText = currentQuizData.b;
    optionLabels[2].innerText = currentQuizData.c;
    optionLabels[3].innerText = currentQuizData.d;
    
    scoreSpans[0].innerText = score;
    scoreSpans[1].innerText = quiz.length;
}

function deselectAnswers() {
    answerInputs.forEach(input => input.checked = false);
}

function getSelected() {
    let answer;
    answerInputs.forEach(input => {
        if(input.checked) {
            answer = input.id;
        }
    });
    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    
    if(answer) {
        if(answer === quiz[currentQuiz].correct) {
            score++;
        }
        
        currentQuiz++;
        
        if(currentQuiz < quiz.length) {
            loadQuiz();
        } else {
            questionEl.innerHTML = `
                You answered ${score}/${quiz.length} questions correctly
                <button onclick="location.reload()">Reload</button>
            `;
            submitBtn.style.display = 'none';
        }
    }
});
