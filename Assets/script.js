const startButton = document.getElementById("startBtn")

const questionsElement = document.getElementById("questions")

const startGame = document.querySelector(".container");
console.log(startGame)

let timer = document.getElementById("timer");
console.log(timer)

const questions = [
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

startButton.addEventListener('click', startGame)

function beginGame() {
    console.log('Started')
    startGame.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    startButton.classList.add('hide')
    // add timer & start the clock
    timer // initiate timer and countdown
    getNextQuestions();
}

var count = 30;
var counter = setInterval (timer, 1000)

function countDown() {
    count = count -1;
    if (count <= 0) {
        clearInterval(counter);
        //counter method, do something here
        return;
    }
}

document.getElementById("timer").innerHTML = count + "seconds left";

function getNextQuestion() {
    questionsElement.innerText = questions.questions
    //this function will get all the questions from the array of objects
    //create for loop and buttons for the answer choices
}

// function selectAnswer {

// }

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements

//separate function for addEventListener "click"
// startBtn.onclick = startGame;