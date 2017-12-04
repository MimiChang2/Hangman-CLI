//last level - main level, require word.js, require inquirer
var inquirer = require("inquirer");
var Word = require("./word.js");

var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//when letter exposed, remove letter from Alphabet array

var NatParks = ["Crater Lake", "Antelope Canyon", "Yosemite", "Saguaro", "Bryce Canyon", "Monument Valley"];
var numGuesses;
var currentWord;

//ask user to guess
guessLetter();
newGame();

//New game: set number of guesses to 10, randomly select word
//select word by selecting index # of NatParks array- generate random number for index
function newGame() {
    guesses = 10;
    var r = Math.floor(Math.random() * 6);
    currentWord = new Word(NatParks[r]);
    guessLetter();
}
//Guess Letter:
//if guesses > 0; ask user to guess a letter, expose letter in currentWord, check if wins
//if word completely exposed, user wins, confirm new game
//if word not completely exposed, don't win, decrement guesses by 1, guess letter
//else: confirm new game

function guessLetter() {
    //console.log() number of blanks in the word chosen
    //also add in if user already guessed letter, don't allow the letter to be guessed
    //if(this.guessed === true);
    //{remove letter from alphabet array and don't let user type that letter in}
    console.log("_ _ _ _ _ _ _ _");
    if(numGuesses > 0) {
        inquirer.prompt([{
                message: "Guess a letter:",
                name: "letter"
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
        guessLetter();
    }
    else {
        //ask user if they want to play again
    }
}

newGame();

//Confirm New Game- ask play again? if yes, new game; else exit:
function confirmPlayAgain() {
    if(numGuesses = 0) {
        inquirer
            .prompt([{
                type: "confirm",
                message: "Play again?",
                name: "confirm",
                default: true
            }])
            .then(function(userInput) {
                if(type === true) {
                    newGame();
                }
                else {
                    //exit
                }
            });


    }
    else {
        confirmPlayAgain();
    }
}

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
