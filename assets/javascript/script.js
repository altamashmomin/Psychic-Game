
wins = 0;
losses = 0;
guessesLeft = 9;
guessedLetters = [];

function reset() {
    guessedLetters = [];
    guessesLeft = 9;
}

function randomLetter () {
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    var numb = Math.floor(Math.random() * 26);
    var letter = alphabet.charAt(numb);
    return letter;
}

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}

function updateWins() {
    document.querySelector("#wins").innerHTML = wins;
}

function updateLosses() {
    document.querySelector("#losses").innerHTML = losses;
}

function addGuessed() {
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters;
}




document.onkeyup = function(event) {

    userGuess = event.key;

    guessedLetters.push(userGuess);

    addGuessed();

    if ((userGuess === randomLetter())) {
        wins += 1;
        updateWins();
        reset();
    }
    else if ((userGuess != randomLetter())) {
        guessesLeft -= 1;  
        updateGuessesLeft(); 
    }

    if (guessesLeft === 0) {
        losses += 1;
        updateLosses();  
        reset();
    }

    //console.log(guessedLetters);
    //console.log(randomLetter());
    //console.log(guessesLeft);
    //console.log(losses);
    //console.log(wins);

}
        




    















