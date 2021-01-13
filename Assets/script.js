// GLOBAL VARIABLES

const startButton = document.getElementById("startBtn")
const questionTitle = document.getElementById("questions")
const questionsElement = document.getElementById("question-container")
const btnArray = document.querySelectorAll(".answer-btn");
const correctAns = document.getElementById("correct-answer")
const endArea = document.getElementById("end-game")
const submitBtn = document.getElementById("submit-button")
const playerInitials = document.getElementById("initials")
const startQuiz = document.getElementById("start-quiz")
const startGame = document.querySelector(".container");
let timerElement = document.getElementById("timer");
const highScoreDisplay = document.getElementById("highscore-display")
const finalScore = document.getElementById("final-score")

// ARRAY OF QUIZ QUESTIONS
const questionsArray = [
    {
        prompt: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        prompt: "Arrays in JavaScript can be used to store ________.",
        choices: ["booleans", "other arrays", "numbers and strings", "all of the above"],
        answer: "all of the above"
    },
    {
        prompt: "What do you use to enclose string values when assigned to variables?",
        choices: ["curly brackets", "quotes", "parenthesis", "commas"],
        answer: "quotes"
    },
    {
        prompt: "How do you create a function in Javascript",
        choices: ["function Myfunction()", "function = MyFunction", "function myFunction()", "funcion:myFunction()"],
        answer: "function myFunction()"
    },
    {
        prompt: "A very useful tool for users during development and debugging which is used to print content to the debugger is:",
        choices: ["terminal", "console log", "while loops", "an object"],
        answer: "console log"
    }
]

// Click event listener to begin the game
startButton.addEventListener('click', beginGame)

//function to start the game
function beginGame() {
    questionsCounter = 0;
    score = 0;
    isGameOver = false;
    counter = 75;
    console.log('Started')
    startGame.setAttribute('class', 'hide');
    // highScoreDisplay.setAttribute('class','hide');
    questionsElement.classList.remove('hide');
    // startButton.classList.add('hide')
    countDown(); // initiate timer and countdown
    getNextQuestion();
}

var counter = 75;
var isGameOver = false;
var currentQuestion = 0;

//function to end the game
function endGame() {
    questionsElement.setAttribute('class', 'hide');
    // highScoreDisplay.setAttribute('class','hide');
    endArea.classList.remove('hide');
}

//function to countdown the timer
function countDown() {
    var timerInterval = setInterval(function(){
        counter --;
    if (counter === 0 || isGameOver === true) {
        isGameOver = true;
        endGame();
        clearInterval(timerInterval);
    }
    timerElement.textContent = counter 
    },1000);
}

currentQuestion = 0;

//function to get the next question in the questions array
function getNextQuestion() {
    questionsCounter++
    // progressText.innerText = 'Question'
    questionTitle.innerText = questionsArray[currentQuestion].prompt; 
    for (var i = 0; i < btnArray.length; i++) {
        var currentChoice = questionsArray[currentQuestion].choices[i]
        console.log(currentChoice)
        btnArray[i].textContent = currentChoice;
        btnArray[i].setAttribute("onclick", "selectAnswer(" + "\"" + currentChoice + "\"" +")")
    }
}

//function for when the user selects an answer to determine if it is right or wrong 
function selectAnswer(choice) {
    console.log(choice);
    if (questionsArray[currentQuestion].answer != choice) {
        correctAns.textContent = 'Wrong!';
        counter = counter - 15;
    } else {
        correctAns.textContent = 'Correct!';
    }
// increase currentQuestion variable and then run getNextQuestion function at the end. 
currentQuestion++;
//check to see if we are done (on question 5)
if (currentQuestion < questionsArray.length) {
    getNextQuestion();
    // endGame();
}
else {
    isGameOver = true; 
}
if (isGameOver) {
    endGame();
}}

//function to save high scores
function saveScores(){
    var initials = playerInitials.value;
    var userInfo = {
        initials: initials,
        // score: counter
        score: finalScore.value
    }
    localStorage.setItem("score", JSON.stringify(userInfo))
    endArea.setAttribute('class', 'hide');
    startQuiz.classList.remove('hide');
    // highScoreDisplay.classList.remove('hide');
    counter = 0;
    timerElement.textContent = 0;
    // getNextQuestion();
}



//highscores