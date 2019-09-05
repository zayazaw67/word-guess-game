var musicians = ["Lady Gaga", "Taylor Swift", "Miley Cyrus", "Katy Perry",
    "Eminem", "Drake", "John Mayer", "Pitbull", "Chris Brown", "Khalid", "Post Malone", "Ariana Grande"]
var guesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

var wins = 0;
var losses = 0;
var lives = 10;

var computerSelection = musicians[Math.floor(Math.random() * musicians.length)];
console.log(computerSelection)

document.onkeyup = function (event) {
    var userGuess = event.key;
    if (guesses.includes(userGuess))
        console.log("correct");
}