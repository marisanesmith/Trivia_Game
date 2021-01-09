const startButton = document.getElementById("startBtn")

const questionsElement = document.getElementById("question-container")

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
        endGame();
        clearInterval(timerInterval);
    }
    timer.textContent = counter 
    },1000);
}



function getNextQuestion() {
    questionsElement.innerText = questionsArray[currentQuestion].title;
    //this function will get all the questions from the array of objects
    //create for loop and buttons for the answer choices
}

function selectAnswer() {
// increase currentQuestion variable and then run getNextQuestion function at the end. 
getNextQuestion();
}

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements

//separate function for addEventListener "click"
// startBtn.onclick = startGame;