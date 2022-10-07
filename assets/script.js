//dependencies
// button to start the game

//container that displays question and choices
//another container holding the timer
//container for the highscores 
    //form to record name
    //submit button to confirm name
    //reset button to reset global highscores
var newGameButton = document.getElementById("new-game");
var questionDisplay = document.getElementById("question-display");
var questionContainer = document.getElementById("question");
var answers = document.getElementById("answers");
var timeContainer = document.getElementById("time-container");
var timeCountdown = document.getElementById("timer")
var highscoreContainer = document.getElementById("highscore-container");
var scores = document.getElementById("scores");
var resetButton = document.getElementById("reset-button")
var newGameContainer = document.getElementById("new-game-container");
var feedback = document.getElementById("feedback");
var submitButton = document.getElementById("submit-button");
var player = document.getElementById("name");
//Data
var questions = [
    {question: "What is a variable that holds a group of data?", correctAnswer: "an array", choices: [ "an array", "a hotdog", "an object", "a function"]},
    {question: "What do you use to locate a single item inside of an array?", correctAnswer: "an index", choices: [ "a function", "a scope", "an index", "variables"]},
    {question: "What does the default keyword 'this' refer to?", correctAnswer: "the global object", choices: [ "the console", "the ladder", "the global object", "a social media post"]},
    {question: "How do you select an element by ID?", correctAnswer: "getElementById", choices: [ "querySelector", "#", "screamItsName", "getElementById"]}
];
var questionIndex = 0    
var questionHolder = "";
var selectedAnswer = "";
var timer; //going to hold the timer passed from set interval
var countdownRemaining = 120;
var points = 0;

var newGameButtonCallBack = function(event) {
    event.stopPropagation();

}
var resetButtonCallBack = function(event) {
    event.stopPropagation();
}
//array with the question and answers
//variable to conatin the wuestions
//variable to hold the answers
//variable to hold the actual timer
//variable to hold the countdown of the remaining seconds
//variable to hold recorded scores
//variable to save scores in local storage

//functions
// will fill in appropriate answers when the question is chosen
function startQuiz() {
    console.log("hello");
    newGameContainer.style.display = "none";
    questionDisplay.style.display = "block";
    highscoreContainer.style.display = "none";
    questionIndex = 0;
    startTimer();
    displayQuestion();
}

function displayQuestion() {
    console.log("index" + questionIndex);
    if (questionIndex === questions.length) {
        endGame();
        return;
    }
    questionContainer.textContent = questions[questionIndex].question;
    answers.innerHTML = "";
    for(var i=0; i<questions[questionIndex].choices.length; i++){
        var element = document.createElement("button")
        element.textContent = questions[questionIndex].choices[i];
        element.addEventListener("click", verifyAnswer);
        answers.append(element);
    }
};

function verifyAnswer(event) {
    if (event.target.innerText === questions[questionIndex].correctAnswer) {
        countdownRemaining += 5;
        points++;
        feedback.textContent = "Correct!"
        feedback.style.color = "green"
        setTimeout(function() {
            feedback.textContent = ""
            feedback.style.color = "black"
            questionIndex++;
            displayQuestion();
        },1000)

    } else {
        countdownRemaining -= 5;
        feedback.textContent = "Wrong!"
        feedback.style.color = "red"
        setTimeout(function() {
            feedback.textContent = ""
            feedback.style.color = "black"
            questionIndex++;
            displayQuestion();
            },1000)
    } 
    // console.log(event);
}

function endGame() {
//hide element 
    newGameContainer.style.display = "block";
    highscoreContainer.style.display = "block";
    questionDisplay.style.display = "none";
    clearInterval(timer);
//input name
}

function startTimer() {
    timeCountdown.textContent=countdownRemaining;
    timer = setInterval(function() {
        countdownRemaining--;
        if (countdownRemaining<=0){
            clearInterval(timer);
            endGame()
        }
        timeCountdown.textContent = countdownRemaining;
    }, 1000);
};

        // var element = document.createElement("button")
        // element.textContent = questions[questionIndex].choices[i];
        // element.addEventListener("click", verifyAnswer);
        // answers.append(element);
function submitHighscore() {
    var element = document.createElement("li");
    element.textContent = player.value + "-" + points;
    scores.append(element);

    //package the player name and points in an object
    var highScore = {
        name: player.value, 
        score: points
    };
    //get item, add to it
    var leaderBoard = JSON.parse(localStorage.getItem("highScore"));
    console.log(leaderBoard);
    //put them in local storage
    //
    localStorage.setItem("highScore", JSON.stringify(highScore));
    
    //
}
 //take input and create a string 
    //package that up with points
    //create a list item
    //append it into the OL


// chooseQuestion();
// displayQuestion();
// startTimer();

newGameButton.addEventListener("click", startQuiz);
resetButton.addEventListener("click",resetButtonCallBack);
submitButton.addEventListener("click", submitHighscore)

//user experience 
//The user will be able to click the start button
    //once this happens the timer will start
    //a question appears with multiple choice questions
//user can click on the multiple choices to choose an answer
    //when this happens the answer will be verified as correct or incorrect
    //correct answers will award the user a point
    //incorrect answer will subtract time from the clock
    //a new question will appear after answer
//when the user runs out of time or answers all the questions the game will end
    //if the user answers all the questions the timer will stop
//when the game ends the user will see a scoreboard of previous attemps
    //the user will be able to record their name 
    //their name along with their score will be recorded on scoreboard
    //user can reset scoreboard with button
//user can start a new game with start game button

//intialization





//intialization