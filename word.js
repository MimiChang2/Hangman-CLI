//2nd level - need to require letter.js in this file

var Letter = require("./letter.js");

//create an array to represent the word randomly chosen to be guessed
//this is an array of letters the user guesses
// letterObj ["c", "a", "t"] to be "cat"

//create variable to hold all the letters the user guesses as they type it
//right letter will display on hangman word line
//wrong letter will display on a line with wrong guesses

//Word- 1.. n:Letters , exposeLetter(letter), isExposed()

//word is the string
var Word = function(word) {
    this.LetterArray = [];
    this.LetterArray.splice();

    //push userInput asked in hangman.js to this array
    for(var l = 0; l < word.length; l++) {
        this.LetterArray.push(new Letter(word[l]));

        //console.log(new Letter);
        // if(userGuess === new Letter) {
        //     console.log("Correct");
        //     //console.log(new Letter);
        // }
        // else {
        //     console.log("Guess Again!");
        // }

    }
}

//this.wrongLetterArray = [];

//expose individual letters each time
this.exposed = function(value) {
    for(var i = 0; i < this.LetterArray.length; i++) {
        this.letterArray[i].exposed(value);
    }
};

//whether or not user wins
this.isExposed = function() {
    for(var i = 0; i < this.LetterArray.length; i++) {
        if(!this.LetterArray[i].exposed()) {
            result = false;
        }
    }
    return true;
};

//this will push right letter into hangman word line in a new Letter variable
// for(i = 0; i < rightLetterArray.length; i++) {
//     this.addLetter = function(word) {
//         this.rightLetterArray.push(new Letter());
//         console.log(this.rightLetterArray);
//         console.log(this.wrongLetterArray);
//     };

//     //this will push wrong letter on a line with all wrong guesses in new Letter variable
//     this.displayLetter = function(word) {
//         this.wrongLetterArray.push(new Letter());
//         console.log(this.rightLetterArray);
//         console.log(this.wrongLetterArray);
//     };

// }


module.exports = Word;
