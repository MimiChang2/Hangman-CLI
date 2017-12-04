//lowest level- like castMember

//each letter is either guessed or not guessed ; visible or not visible
//at start of game, it's always not guessed and not visible
var Letter = function(value) {
    this.guessed = false;
    this.visible = false;
    this.value = value;

    //when letter is pressed and if the letter is in the word, change status from invisible to visible
    //if letter is not in the word, change status to guessed

    this.userGuess = function(guess) {
        if(this.value === guess) {
            this.guessed = true;
            this.visible = true;
            console.log(guess);
            console.log(this.guessed);
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

var test = new Letter("e");
test.userGuess("y");
console.log(test);

module.exports = Letter;
