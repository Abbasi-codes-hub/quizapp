import quizData from "./quizquestionData";

// Dom elements 

let [question , option_1 , option_2 , option_3 , option_4, scoreCount , submitBtn] = document.querySelectorAll("h1 ,  .option_1 , .option_2 , .option_3 , .option_4 , .Score ,.submit ") ;

let answer = document.querySelectorAll(".answer")
let currentQuestion = 0;
let score = 0;




// loadingQuiz() function initialize

console.log(question);

