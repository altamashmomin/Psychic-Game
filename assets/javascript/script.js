
wins = 0;
losses = 0;
guessesLeft = 9;
guessedLetters = [];

document.onkeyup = function(event) {

    userGuess = event.key;

    guessedLetters.push(userGuess);

    console.log(guessedLetters);

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
    console.log(randomLetter());

    if ((userGuess === randomLetter())) {
        wins += 1;
        updateWins();
        reset();
    }
    else if ((userGuess != randomLetter())) {
        guessesLeft -= 1;   
    }

    if (guessesLeft === 0) {
        losses += 1;
        updateLosses();  
        reset();
    }

    function updateGuessesLeft() {
       document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    }

    updateGuessesLeft();

    function updateWins() {
        document.querySelector("#wins").innerHTML = wins;
    }

    function updateLosses() {
        document.querySelector("#losses").innerHTML = losses;
    }
    
    function addGuessed() {
        document.querySelector("#lettersGuessed").innerHTML = guessedLetters;
    }

    addGuessed();

   

    console.log(guessesLeft);
    console.log(losses);
    console.log(wins);

}
        




    















