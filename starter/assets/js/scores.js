//storing the player's high score . 


//will need query selectors for IDs highscores and clear from html page

// need a variable to store the highscores


//function to collect the scores

// include local storage and event listeners 


var highscoresElement = document.querySelector("#highscores");
var clear = document.querySelector("#clear");

var highscores = [];

///////// LOCAL STORAGE //////////

// check local storage at start of game
function getScores() {
    var storedScores = localStorage.getItem("scores")
    // if no stored scores, dont return anything
    if (storedScores === null) {
        return;
    } else {
        // if stored scores convert to an object
        highscores = JSON.parse(storedScores);
        // sort scores from largest number to smallest
        highscores.sort(function (a, b) {
            return b.score - a.score;
        })
    }
    // top 5 scores
    highscores.forEach(function (scoreObject, index) {
        if (index > 4) {
            return;
        }
        // list scores
        var listElement = document.createElement("li");
        listElement.textContent = scoreObject.initials + "  achieved the score  " + scoreObject.score;
        highscoresElement.appendChild(listElement);
    })
}


// clear high scores button

clear.addEventListener("click", function () {
    localStorage.clear();
    highscoresElement.innerHTML = "";
})

// check storage for scores
getScores();