const startBtn = document.getElementById("startBtn")

const questionsEl = document.getElementById("questions")

const startGame = document.querySelector(".container");
console.log(startGame)

var timer = document.getElementById("timer");
console.log(timer)

var questions = [
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

startBtn.addEventListener('click', startGame)

function startGame() {
    startGame.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    startBtn.classList.add('hide')
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
    //this function will get all the questions from the array of objects
    //create for loop and buttons for the answer choices
}

function selectAnswer {

}

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements

//separate function for addEventListener "click"
// startBtn.onclick = startGame;