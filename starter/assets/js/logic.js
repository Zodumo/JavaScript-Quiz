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
var QuestionScreen = document.querySelector("#questions");
var EndScreen = document.querySelector("#end-screen");

//Elemements for questions and usre's answers
var questionsEL = document.query("#quizquestion");
var userOptionsEL = document.query("#userOptions")



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