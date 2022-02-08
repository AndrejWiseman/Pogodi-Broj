'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 🥳 Correct number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// ### PROJECT #1 ###-----------#####-------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// ##### CLICK HANDLING ####

let pressing = function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Nisi uneo broj!';
    // When wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Tačan broj! 🥳';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Previsoko!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Izgubio si!!! 👎';
      document.querySelector('.score').textContent = 0;
    }
    // When i too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Previsoko!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Izgubio si!!! 👎';
      document.querySelector('.score').textContent = 0;
    }
  }
};

document.querySelector('.check').addEventListener('click', pressing);
// ## RESET BUTTON ##
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Počni sa pogađanjem...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// ### KEY PRESS ###
document.addEventListener('keydown', function (e) {
  // console.log(e.key);
  if (e.key === 'Enter') {
    pressing();
  }
});
