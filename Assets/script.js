var startBtn = document.getElementById("startBtn")
var questionsEl = document.getElementById("questions")


var startGame = document.querySelector(".container");
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



function beginGame() {
    startGame.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    // add timer & start the clock
    timer // initiate timer and countdown
    retrieveQuestions();
}

function retrieveQuestions() {
    //this function will get all the questions from the array of objects
    //create for loop and buttons for the answer choices
}

//separate function for on click when user clicks right or wrong question. Subtract from timer: if/else statements

//separate function for addEventListener "click"
startBtn.onclick = beginGame;