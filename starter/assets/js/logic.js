// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//Button to start quiz
var startQuiz = document.querySelector("#start");

//Button to submit answer 
var submitAnswer = document.querySelector("#submit");

//Element for  user's initials 
var userInitals = document.querySelector("#initials");

//Element for the final score
var finalScore = document.querySelector("#final-score");

//Elements for the different screens in the quiz
var StartScreen = document.querySelector("#start-screen");
var QuestionsScreen = document.querySelector("#questions");
var EndScreen = document.querySelector("#end-screen");

//Elemements for questions and user's answers
var questionsEL = document.querySelector("#quizquestion");
var userChoicesEL = document.querySelector("#userChoices");



//sfx files. Elements to using Audio() constructor to add sound to the game for correct and incorrect answer
var correctSfx = new Audio("assets/sfx/correct.wav");
var incorrectSfx = new Audio("assets/sfx/incorrect.wav");

//start of logic for the timer
var interval;
var time = document.querySelector("#time");

//Allocating 60 seconds for the duration of the quiz
var startTime = 60;
// Indexes of an array start at 0 so this question number starts at -1 so no questions are displayed until the player starts the quiz
var questionNumber = -1;

//score for the player is set at 0. 
var score = 0;

//shuffling our questions
function shuffle(array) {
    var currentIndex = array.length;
    var randomIndex;

    // While there remains elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // swaps arrays index's to shuffle 
        var temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;

    }
    return array;
}

// shuffles questions and stores in an array
var shuffledQuestions = shuffle(choices);
// -1 to match arrays index number
var choicesLength = userchoices.length - 1;

//function to get the current time on the screen 
function currentTime() {
    return Number(time.textContent);
}

//function to set the new time and dsiplay it on the screen 
function setNewTime(newQuizTime) {
    time.textContent = newQuizTime;
}


//Function to countdown the quiz and end it at 0
function countdown() {
    var displayedTime = currentTime(); 
    var stoppageValue = displayedTime - value;
    // if the value of the timer is equal to or less than 0 , this indicates that the quiz is over
    if (stoppageValue <= 0) {
        clearInterval(interval);
        setNewTime("Time is up! Your quiz is over");
        gameOver();
    } else {
        // timer continues with new time if the condition of <=0 has not been met
        setNewTime(stoppageValue);
    } 
}

//In the countdown, the timer should decrease by 1
function TimeMinusOne(){
    countdown(1);
}
//Start of Questions/Quiz logic

function removeMessages() {
    var messageElements = document.querySelectorAll(".message");

    messageElements.forEach(function (element) {
        element.remove();
    });
}
//user should see a message when the answer is wrong
function IncorrectAnswerMessage() {
    removeMessages();
    // logic to display the message to user
    var incorrectAnswerMessage = document.createElement("p");
    incorrectAnswerMessage.textContent = "This answer in incorrect!";
    incorrectAnswerMessage.classList.add("message", "wrong");
    userChoicesEL.appendChild(incorrectAnswerMessage);

    // ensuring the message disappears after 2 seconds. 
    setTimeout(function () {
        incorrectAnswerMessage.style.display = "none";
    }, 2000);
}
function isTheAnswerCorrect() {
    var optionButtons = document.querySelectorAll(".option-button");
    // converts each option into a button
    optionButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var currentQuestion = userChoices[questionNumber];
            // checks if answer selected is the correct answer
            if (this.textContent === currentQuestion.correctAnswer) {
                correctSfx.play();
                score++;
                // hides the current userChoices before moving onto the next question 
                optionButtons.forEach(function (userChoices) {
                    userChoices.style.display = "none";
                });
                showNextQuestion();
            } else {
                incorrectSfx.play();
                IncorrectAnswerMessage();
                // take 10 secs off time.
                TimeMinusOne(10);
                score--;
            }
        })
    })
}

