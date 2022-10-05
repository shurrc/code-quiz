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
var question = document.getElementById("question");
var choiceContainer = document.getElementById("Choices");
var timeContainer = document.getElementById("time-container");
var timeCountdown = document.getElementById("timer")
var highscoreContainer = document.getElementById("highscore-conatiner")
var scores = document.getElementById("scores");
var resetButton = document.getElementById("reset-button")
//Data
var questionList = ["Q1", "Q2", "Q3", "Q4", "Q5"];
var answerList = ["A1", "A2", "A3", "A4"];
var question = "";
var selectedAnswer = "";
var timer = {}; //going to hold the timer passed from set interval
var countdownRemaining = 15;
var points = 0;
var highscore = {
    name: "",
    score: ""
};
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
function chooseQuestion() {

};

function displayQuestion() {

};

function displayAnswers() {

}

function startTimer() {
    timeCountdown.textContent=countdownRemaining;
    timer = setInterval(function() {
        countdownRemaining--;
        if (countdownRemaining===0){
            clearInterval(timer);
        }
        timeCountdown.textContent = countdownRemaining;
    }, 1000);
};
startTimer()

newGameButton.addEventListener("click", newGameButtonCallBack);
resetButton.addEventListener("click",resetButtonCallBack)
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