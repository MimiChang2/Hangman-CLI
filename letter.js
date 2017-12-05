//each letter is either guessed or not guessed, exposed or not exposed
//at start of game, it's always not guessed and not exposed
var Letter = function(value) {
    //this.guessed = false;
    this.exposed = false;
    this.value = value;

    //when letter is pressed and if the letter is in the word, change status from not exposed to exposed
    //if letter is not in the word, change status to guessed

    this.userGuess = function(guess) {

        if(this.value === guess) {
            //this.guessed = true;
            this.exposed = true;
            console.log(guess);
            console.log(this.exposed);
        }
        else {
            console.log(guess);
        }
    };
    // when all letters visible, you win ... letters still invisible, lose
    // this.userWin = function() {
    //     //no missing letters
    // }
    // else {
    //     console.log("You Lose!")}
    // }
};

// //test letter.js before moving on to see if it works:
// var test = new Letter("e");
// test.userGuess("s");
// console.log(test);

module.exports = Letter;
