
wins = 0;
losses = 0;
guessesLeft = 9;
guessedLetters = [];

document.onkeyup = function(event) {

    userGuess = event.key; 

    function randomLetter () {
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        var numb = Math.floor(Math.random() * 26);
        var letter = alphabet.charAt(numb);
        return letter;
    }
    console.log(randomLetter());

    if ((userGuess === randomLetter())) {
        wins += 1;
    }
    else if ((userGuess != randomLetter())) {
        guessesLeft -= 1;    
    }

    if (guessesLeft === 0) {
        losses += 1;
        guessesLeft += 9;
    }

    //var updateGuessesLeft = function() {
       // document.querySelector("#guessesLeft").innerHTML = toString(guessesLeft);
   // }

   // function guessedLetters() {
       // guessed = append.randomLetter(letter)
   // }
    

    console.log(guessesLeft);
    console.log(losses);
    console.log(wins);

}
        




    















