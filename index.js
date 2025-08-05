const quizData = [
    {
        question: "What is 2 + 4?",
        options: ["3", "4", "5", "8"],
        correct: 1
    },
    {
        question: "Which color is the sky?",
        options: ["Red", "Green", "Blue", "Yellow"],
        correct: 2
    },
    {
        question: "How many days are in a week?",
        options: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "Capital of Pakistan?",
        options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
        correct: 1
    },
    {
        question: "2 x 3 = ?",
        options: ["4", "5", "6", "7"],
        correct: 2
    },
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Hybrid Text Making Language"],
        correct: 0
    },
    {
        question: "Which programming language is known as the 'father' of all programming languages?",
        options: ["Python", "C", "Assembly", "FORTRAN"],
        correct: 2
    },
    {
        question: "What is the most popular JavaScript framework?",
        options: ["Angular", "React", "Vue", "Svelte"],
        correct: 1
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Mozilla", "Netscape", "Oracle"],
        correct: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Counter Style Sheets", "Computer Style System", "Cascading Style Sheets", "Creative Style Software"],
        correct: 2
    },
    {
        question: "Which of these is not a programming language?",
        options: ["Java", "HTTP", "Python", "Ruby"],
        correct: 1
    },
    {
        question: "What is the default port for HTTP?",
        options: ["80", "443", "8080", "3000"],
        correct: 0
    },
    {
        question: "What does API stand for?",
        options: ["Application Programming Interface", "Advanced Program Integration", "Application Process Integration", "Advanced Programming Interface"],
        correct: 0
    },
    {
        question: "Which company owns GitHub?",
        options: ["Google", "Microsoft", "Amazon", "Apple"],
        correct: 1
    },
    {
        question: "What is the primary function of (sql)?",
        options: ["Web Design", "Database Management", "Network Security", "Graphics Design"],
        correct: 1
    }
];

// Dom elements 

let [questionelem, scoreCount, submitBtn] = document.querySelectorAll("h1 , .Score ,.submit ");

let optionElements = document.querySelectorAll(".option_1, .option_2, .option_3, .option_4");
let answer = document.querySelectorAll(".answer")
let currentQuestion = 0;
let score = 0;


// score target 
document.querySelector(".totalTarget").textContent = quizData.length;
// loadingQuiz() function initialize

const loadQuiz = () => {

    // const [quizobject] = quizData;

    const { question, options } = quizData[currentQuestion];
    // console.log(question);
    questionelem.textContent = question;
    document.querySelector(".Score").textContent = currentQuestion;

    //add options on html 
    options.forEach((elem, index) => {
        optionElements[index].innerHTML = `<i class="fas fa-check-circle"></i>${elem}`;

    })

}

loadQuiz()

const checkIndex = () => {
    let answerhub = Array.from(answer)
    return answerhub.findIndex(elem => elem.checked)
}


const defaultselectedOptions = () => {
    let defalutOptions = Array.from(answer);
    defalutOptions.forEach(elem => elem.checked = false)


}

submitBtn.addEventListener("click", () => {
    let userSelectedIndex = checkIndex()

    if(userSelectedIndex === quizData[currentQuestion].correct){
        score +=1 ;
    }

    currentQuestion++;



    if (currentQuestion < quizData.length) {
        defaultselectedOptions()
        loadQuiz()
    } else {
        const resultDiv = `
            <div class="quiz-result">
                <i class="fas fa-trophy result-icon"></i>
                <h2>Quiz Completed!</h2>
                <p class="final-score">Your Score: ${score}/${quizData.length}</p>
                <div class="score-details">
                    <i class="fas fa-check correct-icon"></i>
                    <span>Correct Answers: ${score}</span>
                    <i class="fas fa-times wrong-icon"></i>
                    <span>Wrong Answers: ${quizData.length - score}</span>
                </div>
                <button class="restart-btn" onclick="location.reload()">
                    <i class="fas fa-redo-alt"></i> Try Again
                </button>
            </div>
        `;
        document.querySelector(".quiz").innerHTML = resultDiv;
    }
    console.log(userSelectedIndex);


})

// !! let arraay = quizData;


let timeDate = document.querySelector(".timeDate");
setInterval(() => {
    
let date = new Date().toLocaleTimeString();

timeDate.textContent = date
}, 1000);

let div = document.createElement("div");
div.classList.add("style");
div.innerText = currentQuestion
timeDate.appendChild(div)
