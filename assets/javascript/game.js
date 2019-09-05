var musicians = ["Lady Gaga", "Taylor Swift", "Miley Cyrus", "Katy Perry",
"Eminem", "Drake", "John Mayer", "Pitbull", "Chris Brown", "Khalid", "Post Malone", "Ariana Grande"]
var guesses = ["a", "b", "c"]

var wins = 0;
var losses = 0;
var lives = 10;

var computerSelection = musicians[Math.floor(Math.random() * musicians.length)];
console.log(computerSelection)

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);}