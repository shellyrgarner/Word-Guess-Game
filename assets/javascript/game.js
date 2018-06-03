var game = {
    guesses: '',
    guessRemaining: '',
    remainingLetters: ' ',
    wordList: ["guess", "class", "test"]
};

var word = wordList[Math.floor(Math.random() * wordList.length)];

var answerArr = [];
for (var i=0; i<word.length; i++){
    answerArr[i] = "_";
}

var remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answerArr.jkoin(""));

};

var guess = prompt("guess a letter");
if (guess === null) {
    break;
} else if (guess.length !==1) {
    alert("Please enter a single letter");
} else {
    for (var j=0; j<word.length; j++) {
        if (word[j] === guess) {
            answerArr[j] = guess;
            remainingLetters--;
        }
    }
}


alert(answerArr.join(""));
alert("good job. the answer was " + word);

// game.check = function () {
//     var checkLetter = function(answer, letter) {
//         var position;
//         var result = false;
//         position = answer.indexOf(letter);

//         for (var i=0; i<number; i++) {
//             position = myString.substring(0, position) + myString.substring(position + 1)
//         }
//         return result;
//     }
// }