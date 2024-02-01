'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let scoreUi = document.querySelector('.score');
let highScore = 0;
let highScoreUi = document.querySelector('.highscore');
const againBtn = document.querySelector('.again');
const displayMsg = function (message) {
    document.querySelector('.message').textContent = message
}

// reset the game
againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMsg('Start guessing...');
    scoreUi.textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
})
// End of reset the game functionality

document.querySelector('.check').addEventListener('click', function () {
    const guess = parseInt(document.querySelector('.guess').value);
    // when no input
    if (!guess || guess < 0) {
        displayMsg('enter a valid number 🚫');
    }
    // when player wins
    else if (guess === secretNumber) {
        displayMsg(' Correct Number 🧡');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // implementing the highscore
        if (score > highScore) {
            highScore = score;
            highScoreUi.textContent = highScore;
        }

    }


    // when the guess is wrong
    else if (guess !== secretNumber) {

        if (score > 1) {
            displayMsg(guess > secretNumber ? 'Too High📈' : 'Too Low📉');
            score--
            scoreUi.textContent = score;
        }
        else {
            displayMsg('You Lost The Game 💔');
            scoreUi.textContent = 0
        }
    }

});

