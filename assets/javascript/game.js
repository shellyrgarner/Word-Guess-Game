var wordsToChooseFrom = ["songs", "skip", "aux", "record", "disc", "radio", "prince", "cd", "concert", "encore", "play", "beat", "dj", "guitar", "drums", "piano", "sax", "sing", "rap", "pop", "country"];
var letters = [];
var lettersLeft = 0;
var rightLetters = [];
var wrongLetters = [];
var chosenWordBlanks = [];
var chosenWord;
var guessesRemaining = 8;
var lossCounter = 0;
var winsCounter = 0;
var guessesCorrect = 0;

function startGame() {

    chosenWord = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)];
    letters = chosenWord.split('');
    lettersLeft = letters.length;

    wrongLetters = [];
    chosenWordBlanks = [];
    guessesRemaining = 8;
    guessesCorrect = 0;

    console.log(chosenWord);
    console.log(letters);
    console.log(lettersLeft);

    for (var i = 0; i < lettersLeft; i++) {

        //chosenWordBlanks[i] = "_ ";
        chosenWordBlanks.push('_');
        //document.getElementById('word').innerHTML = chosenWordBlanks[i].repeat(lettersLeft.length);  
        document.getElementById('word').innerHTML = chosenWordBlanks;

    }
    document.getElementById('word').innerHTML = chosenWordBlanks.join(' ');
    document.getElementById('gl').innerHTML = "Guesses Remaining: " + guessesRemaining;
    document.getElementById('wrong').innerHTML = wrongLetters;
    console.log(chosenWordBlanks);
}

function letter(userInput) {
    if (chosenWord.indexOf(userInput) > -1) {
        for (var i = 0; i < lettersLeft; i++) {
            if (letters[i] === userInput) {
                guessesCorrect++;
                chosenWordBlanks[i] = userInput;
                //rightLetters[i] = userInput;
                document.getElementById('word').innerHTML = chosenWordBlanks.join(' ');

            }
        } console.log(rightLetters);
        console.log(lettersLeft);
        console.log(guessesCorrect);
    }
    else {
        guessesRemaining--;
        wrongLetters.push(userInput);
        document.getElementById('wrong').innerHTML = wrongLetters;
        document.getElementById('gl').innerHTML = "Guesses Remaining: " + guessesRemaining;
        //alert("try again");
        console.log('Wrong Letters = ' + wrongLetters);
        console.log('Guesses Remaining = ' + guessesRemaining);
        console.log(lettersLeft);
    }
}
function winOrNah() {
    if (guessesCorrect === lettersLeft) {
        winsCounter++;
        console.log(chosenWordBlanks);
        document.getElementById('wins').innerHTML = "Your wins: " + winsCounter;
        alert("Winner, Winner!");
        startOver();
    }
    else if (guessesRemaining === 0) {
        lossCounter++;
        document.getElementById('loss').innerHTML = "Your losses: " + lossCounter;
        alert("Better luck next time!");
        startOver();
    }
}
function startOver() {

    chosenWord = wordsToChooseFrom[Math.floor(Math.random() * wordsToChooseFrom.length)];
    letters = chosenWord.split('');
    lettersLeft = letters.length;

    wrongLetters = [];
    chosenWordBlanks = [];
    guessesRemaining = 8;
    guessesCorrect = 0;
    //userInput = 0;

    startGame();
}

startGame();

document.onkeyup = function (event) {

    document.querySelector("#game").innerHTML = "Guess the word!";

    var keyCode = event.keyCode;
    var userInput = String.fromCharCode(event.keyCode).toLowerCase();

    letter(userInput);
    winOrNah();
}

