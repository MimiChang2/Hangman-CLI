//last level - main level, require word.js, require inquirer
var inquirer = require("inquirer");
var Word = require("./word.js");

//New game: set number of guesses remaining to 10, randomly select word

//Confirm New Game- ask play again? if yes, new game; else exit:

//Guess Letter:
//if guesses > 0; ask user to guess a letter, expose letter in currentWord, check if wins
//if word completely exposed, user wins, confirm new game
//if word not completely exposed, don't win, decrement guesses by 1, guess letter
//else: confirm new game

var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var NatParks = ["Crater Lake", "Antelope Canyon", "Yosemite", "Saguaro", "Bryce Canyon", "Monument Valley"];
var numGuesses;
var currentWord;

function newGame() {
    guesses = 10;
    currentWord = new Word(NatParks[0]);
    guessLetter();
}

function guessLetter() {
    if(numGuesses > 0) {
        inquirer.prompt([{
                "message": "Guess a letter:",
                "name": "letter"
            }])
            .then(function(userInput) {
                currentWord.exposeLetter(userInput.letter);
                if(currentWord.isExposed()) {
                    //user won
                    //confirm next game
                }
                else {
                    numGuesses--;
                    guessLetter();
                }
            });

        //ask user to guess
    }
    else {
        //ask user if they want to play again
    }
}

newGame();

/*var Hangman = new Word();
 console.log(this.rightLetter);
 console.log(this.wrongLetter);

 //add letter to "addLetter"
 Hangman.addLetter;
 console.log(Hangman);

 //prompt the user to guess a letter
 inquirer
     .prompt([{
             type: "userguess",
             message: "Guess A Letter",
             name: "guess"
         },

     ])
     //when user guesses a letter, then...
     .then(function(inquirerResponse) {

         if(inquirerResponse.addLetter === this.rightLetter) {
             console.log("\nCorrect! " + inquirerResponse.rightLetter);
             //console.log("insert correct letter in blank");
         }
         else {
             console.log("\nWrong! " + inquirerResponse.wrongLetter);
             //console.log("insert wrong letter in wrong letter line")
         }
     });
*/
