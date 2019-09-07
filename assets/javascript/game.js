var musicians = ["Lady Gaga", "Taylor Swift", "Miley Cyrus", "Katy Perry",
    "Eminem", "Drake", "John Mayer", "Pitbull", "Chris Brown", "Khalid", "Post Malone", "Ariana Grande"]
var validLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
    "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"]

    var wins = 0;
    var losses = 0;
    var guessesLeft = 5;
    var guessedLetters = [];
    var answerBlanks = [];
    var regex = /[a-z]/;

    var winsText = document.getElementById("wins-text")
    var lossesText = document.getElementById("losses-text")
    var guessesLeftText = document.getElementById("guessesleft-text")
    var guessedLettersText = document.getElementById("guessedletters-text")







// choose a word
var computerSelection = musicians[Math.floor(Math.random() * musicians.length)];
console.log(computerSelection)

// separate selected word to make each letter an element
wordLetters = computerSelection.split("");
console.log(wordLetters)


blanks = wordLetters.length;
    console.log(blanks)

// var remainingLetters = computerSelection.length

// user input
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    var userChoice = event.key;
                                //   if (!regex.test(userChoice)) {
                                //     console.log("please enter a letter");}
                                //   }
    if (userGuess = computerSelection) {
    }
}



// display score + user input
//     userChoiceText.textContent = userGuess;
//     winsText.textContent = "wins: " + wins;
//     lossesText.textContent = "losses: " + losses