var musicians = ["LadyGaga", "TaylorSwift", "MileyCyrus", "KatyPerry",
    "Eminem", "Drake", "JohnMayer", "Pitbull", "ChrisBrown", "Khalid", "PostMalone", "ArianaGrande"]
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
    var blanksText = document.getElementById("blanks-text")







// choose a word
var computerSelection = musicians[Math.floor(Math.random() * musicians.length)];
console.log(computerSelection)

// separate selected word to make each letter an element
wordsLetters = computerSelection.split("");
console.log(wordsLetters)


blanks = wordsLetters.length;
    console.log(blanks)

    for (i = 0; i < blanks; i++) {
        answerBlanks.push("_");
        console.log(answerBlanks); 
    }


    document.onkeyup = function (event) {
        var userGuess = event.key.toLowerCase();
        console.log(userGuess);
        var userChoice = event.key;
                                    //   if (!regex.test(userChoice)) {
                                    //     console.log("please enter a letter");}
                                    //   }
        if ("userGuess" == wordsLetters) {
            alert("working!")
        }
        else {alert("wrong!")}

    }

