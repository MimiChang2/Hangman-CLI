//lowest level- like the castMember

//each letter is either guessed or not guessed - but u can't see the letter- visible or not visible
//when letter is pressed and if the letter is in the word, change status from invisible to visible
// when all letters visible, you win ... letters still invisible, lose

var Letter = function(guessed, notGuessed, visible, notVisible) {
    this.guessed = guessed;
    this.notGuessed = notGuessed;
    this.visible = visible;
    this.notVisible = notVisible;
    this.userGuess = function() {
        if(userGuess === notVisible) {
            console.log(userGuess);
        }
        else {
            userGuess = visible;
        }
    };
    // this.userWin = function() {
    //     //no missing letters
    // }
    // else {
    //     console.log("You Lose!")}
    // }
};

module.exports = Letter;
