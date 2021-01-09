const startButton = document.getElementById("startBtn")
const questionTitle = document.getElementById("questions")
const questionsElement = document.getElementById("question-container")
const btnArray = document.querySelectorAll(".answer-btn");
console.log(btnArray)

const startGame = document.querySelector(".container");
console.log(startGame)

let timer = document.getElementById("timer");
console.log(timer)

const questionsArray = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: 2
    },
    {
        title: "What CSS property changes the background color",
        choices: ["backgroundColor", "color", "background", "background-color"],
        answer: 3
    },
    {
        title: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tools and Markup Language", "Hyper Text Makeup Language", "Hyperlinks and Text Markup Logistics"],
        answer: 0
    },
    {
        title: "How do you create a function in Javascript",
        choices: ["function Myfunction()", "function = MyFunction", "function myFunction()", "funcion:myFunction()"],
        answer: 2
    },
    {
        title: "How can you make a numbered list using HTML?",
        choices: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: 0
    }
]

startButton.addEventListener('click', beginGame)

function beginGame() {
    isGameOver = false;
    counter = 75;
    console.log('Started')
    startGame.setAttribute('class', 'hide');
    questionsElement.classList.remove('hide');
    startButton.classList.add('hide')
    // add timer & start the clock
    countDown(); // initiate timer and countdown
    getNextQuestion();
}

var counter = 75;
var isGameOver = false;
var currentQuestion = 0;

function endGame() {

}

function countDown() {
    var timerInterval = setInterval(function(){
        counter --;
    if (counter === 0 || isGameOver === true) {
        isGameOver = true;
        endGame();
        clearInterval(timerInterval);
    }
    timer.textContent = counter 
    },1000);
}

function getNextQuestion() {
    questionTitle.innerText = questionsArray[currentQuestion].title; 
    for (var i = 0; i < btnArray.length; i++) {
        btnArray[i].textContent = questionsArray[currentQuestion].choices[i];
    }
    //this function will get all the questions from the array of objects
    //create for loop and buttons for the answer choices
}

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements
function selectAnswer() {
    // if/ else statement for correct-answer id
// increase currentQuestion variable and then run getNextQuestion function at the end. 
currentQuestion++ //check to see if we are done (on question 5)
if (currentQuestion > 5) {
    isGameOver = true;
    endGame();
}
else {
    getNextQuestion();
}}


//separate function for addEventListener "click"
// startBtn.onclick = startGame;


//if statements on my selectAnswer fuction (to check if answer is correct or wrong)
//event listeners on each button with the choices 
//endGame function
//highscores