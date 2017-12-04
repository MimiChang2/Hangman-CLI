//2nd level - like movie.js

//need to require letter.js in this file
var Letter = require("./letter.js");

//create variable to hold all the letters the user guesses as they type it
var Word = function(guessed, notGuessed, visible, notVisible) {
    //right letter will display on hangman word line
    //wrong letter will display on a line with wrong guesses
    this.rightLetter = [];
    this.wrongLetter = [];

    //this will push right letter into hangman word line in a new Letter variable
    this.addLetter = function(guessed, visible) {
        this.rightLetter.push(new Letter());
        console.log(Word);
    };

    //this will push wrong letter on a line with all wrong guesses in new Letter variable
    this.displayLetter = function(guessed, notVisible) {
        this.wrongLetter.push(new Letter());
        console.log(Word);
    };
};

var letterObj = new Letter;


module.exports = Word;
