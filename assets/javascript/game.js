var musicians = ["Lady Gaga", "Taylor Swift", "Miley Cyrus", "Katy Perry",
    "Eminem", "Drake", "John Mayer", "Pitbull", "Chris Brown", "Khalid", "Post Malone", "Ariana Grande"]
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]



var wins = 0;
var losses = 0;
var lives = 10;

// var userChoiceText = document.getElementById("userchoice-text");
// var winsText = document.getElementById("wins-text");
// var lossesText = document.getElementById("losses-text");
var answerText = document.getElementById("answer-text");

// choose a word
var computerSelection = musicians[Math.floor(Math.random() * musicians.length)];
console.log(computerSelection)

var answer = [];
    for (var i=0; i <computerSelection.length; i++) {
        console.log(answer[i] ="_");
    }

// var remainingLetters = computerSelection.length

// user input
document.onkeyup = function(event) {
    var userGuess = event.key; 
    console.log (userGuess);
    if (validLetters.includes(userGuess))
    alert("working")}
        







// display score + user input
//     userChoiceText.textContent = userGuess;
//     winsText.textContent = "wins: " + wins;
//     lossesText.textContent = "losses: " + losses