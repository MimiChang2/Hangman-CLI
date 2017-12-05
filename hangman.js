//last level - main level, require word.js, require inquirer
var inquirer = require("inquirer");
var Word = require("./word.js");

var NatParks = ["Crater Lake", "Antelope Canyon", "Yosemite", "Saguaro", "Bryce Canyon", "Monument Valley"];
var guesses;

//var guessedLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var guessedLetters = [];
var currentWord;

//user types in letter to guess
//if guessed letter is already guessed
//tell user to guess another letter
//else
//add guess letter to array of guessed letters
//if guessed letter is a letter in Word
//show the letter
//is the game over?


function isGameOver() {
    //if all letters are guessed or guesses run out
    //return true

    return false;
}


//when letter exposed, remove letter from Alphabet array


//ask user to guess
//guessLetter();
newGame();

//New game: set number of guesses to 10, randomly select word
//select word by selecting index # of NatParks array- generate random number for index
function newGame() {
    guesses = 10;
    var i = randomNumber(0, NatParks.length - 1);
    currentWord = new Word(NatParks[i]);
    showBlanks(currentWord.letterArray);
    guessLetter();
}

function showBlanks(letters) {
    var blankString = "";
    for(var i = 0; i < letters.length; i++) {
        if(letters[i] === " ") {
            blankString += "  ";
        }
        blankString += "_ ";
    }
    console.log(blankString);
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
    //console.log("_ _ _ _ _ _ _ _");
    console.log("Guesses Left: " + guesses);
    console.log(currentWord);

    if(guesses > 0) {
        inquirer.prompt([{
                message: "Guess a letter:",
                name: "letter"
            }])
            .then(function(userGuess) {
                if(userGuess === new Letter) {
                    console.log("Correct");

                    //console.log(new Letter);
                }
                // else {
                //     console.log("Guess Again!");
                // }
                //currentWord.exposed(userGuess.value);
                // if(currentWord.isExposed()) {
                //     //user won
                //     //confirm next game
                // }
                // else {
                //     guesses--;
                //     guessLetter();
                // }
            });

        //ask user to guess
        //guessLetter();
    }
    else {
        //ask user if they want to play again
    }
}

//Confirm New Game- ask play again? if yes, new game; else exit:
function confirmPlayAgain() {
    if(guesses = 0) {
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
        //confirmPlayAgain();
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
