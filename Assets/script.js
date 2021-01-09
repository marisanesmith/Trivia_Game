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
        title: "lajkdlkfjlakj lkjlkjlkjl lkjlkj?",
        choices: ["lkjljl", "lkljlkjl", "ljklkj", "lkjlkj"],
        answer: "lkjlkjl"
    },
    {
        title: "lajkdlkfjlakj lkjlkjlkjl lkjlkj?",
        choices: ["lkjljl", "lkljlkjl", "ljklkj", "lkjlkj"],
        answer: "lkjlkjl"
    },
    {
        title: "lajkdlkfjlakj lkjlkjlkjl lkjlkj?",
        choices: ["lkjljl", "lkljlkjl", "ljklkj", "lkjlkj"],
        answer: "lkjlkjl"
    },
    {
        title: "lajkdlkfjlakj lkjlkjlkjl lkjlkj?",
        choices: ["lkjljl", "lkljlkjl", "ljklkj", "lkjlkj"],
        answer: "lkjlkjl"
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