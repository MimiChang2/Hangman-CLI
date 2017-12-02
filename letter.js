//lowest level- like castMember

//each letter is either guessed or not guessed ; visible or not visible
var Letter = function(guessed, notGuessed, visible, notVisible) {
    this.guessed = guessed;
    this.notGuessed = notGuessed;
    this.visible = visible;
    this.notVisible = notVisible;

    //when letter is pressed and if the letter is in the word, change status from invisible to visible
    //if letter is not in the word, change status of notGuessed to guessed

    var letterObj = new Letter;

    this.userGuess = function() {
        if(Letter === notVisible && notGuessed) {
            Letter = visible;
            Letter = guesesed;
            console.log(userGuess);
        }
        else {
            userGuess = visible;
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

module.exports = Letter;
