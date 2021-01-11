const startButton = document.getElementById("startBtn")
const questionTitle = document.getElementById("questions")
const questionsElement = document.getElementById("question-container")
const btnArray = document.querySelectorAll(".answer-btn");
const correctAns = document.getElementById("correct-answer")
const endArea = document.getElementById("end-game")
const submitBtn = document.getElementById("submit-button")
const playerInitials = document.getElementById("initials")
const startQuiz = document.getElementById("start-quiz")
// console.log(btnArray)

const startGame = document.querySelector(".container");
// console.log(startGame)

let timerElement = document.getElementById("timer");
console.log(timer)

const questionsArray = [
    {
        prompt: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        prompt: "What CSS property changes the background color",
        choices: ["backgroundColor", "color", "background", "background-color"],
        answer: "background-color"
    },
    {
        prompt: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Home Tools and Markup Language", "Hyper Text Makeup Language", "Hyperlinks and Text Markup Logistics"],
        answer: "Hyper Text Markup Language"
    },
    {
        prompt: "How do you create a function in Javascript",
        choices: ["function Myfunction()", "function = MyFunction", "function myFunction()", "funcion:myFunction()"],
        answer: "function myFunction()"
    },
    {
        prompt: "How can you make a numbered list using HTML?",
        choices: ["<ol>", "<ul>", "<li>", "<list>"],
        answer: "<ol>"
    }
]


startButton.addEventListener('click', beginGame)

function beginGame() {
    questionsCounter = 0;
    score = 0;
    isGameOver = false;
    counter = 75;
    console.log('Started')
    startGame.setAttribute('class', 'hide');
    questionsElement.classList.remove('hide');
    // startButton.classList.add('hide')
    // add timer & start the clock
    countDown(); // initiate timer and countdown
    getNextQuestion();
}

var counter = 75;
var isGameOver = false;
var currentQuestion = 0;

function endGame() {
    questionsElement.setAttribute('class', 'hide');
    endArea.classList.remove('hide');
}

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

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements
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

function saveScores(){
    var initials = playerInitials.value;
    var userInfo = {
        initials: initials,
        score: counter
    }
    localStorage.setItem("score", JSON.stringify(userInfo))
    endArea.setAttribute('class', 'hide');
    startQuiz.classList.remove('hide');
    counter = 0;
    timerElement.textContent = 0;
}




//separate function for addEventListener "click"
// startBtn.onclick = startGame;


//if statements on my selectAnswer fuction (to check if answer is correct or wrong)
//event listeners on each button with the choices 
//endGame function
//highscores