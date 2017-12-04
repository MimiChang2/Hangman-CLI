//last level - main level, require word.js, require inquirer
var inquirer = require("inquirer");
var Word = require("./word.js");

var Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var NatParks = ["Crater Lake", "Antelope Canyon", "Yosemite", "Saguaro", "Bryce Canyon", "Monument Valley"];

var Hangman = new Word();
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
