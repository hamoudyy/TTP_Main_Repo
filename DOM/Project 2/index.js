let randomNum = Math.floor(Math.random() * 100) + 1;
let score = 10;
let highscore = 0;

/* personal note, score is meant to be 100 but i set it to 10 just to save time, should run however. */

// Function to change the message
function changeMsg(text) {
  document.getElementById('message').textContent = text;
}

// Submit button event listener
document.getElementById('submitBtn').addEventListener('click', function() {
    
  // Get user input. parseInt converts the number input to an integer to be calculated.

  let inputUser = parseInt(document.getElementById('guessInput').value);

  // Takes the user input to validate if the value inputted is an integer, code waits for input if false
  if (isNaN(inputUser)) {
    changeMsg("Please enter a valid number.");
  } else if (inputUser === randomNum) {
    changeMsg("Congratulations! You guessed the correct number.");
    document.body.style.backgroundColor = "green";
    document.getElementById('guessInput').disabled = true;
    this.disabled = true;
    if (score > highscore) {
      highscore = score;
      document.getElementById('highscore').textContent = highscore;
    }
  } else {
    if (score === 0) {
      changeMsg("Game over! You have lost.");
      document.body.style.backgroundColor = "red";
      document.getElementById('guessInput').disabled = true;
      this.disabled = true;
    } else {
      if (inputUser > randomNum) {
        changeMsg("Too high. Try again.");
      } else {
        changeMsg("Too low. Try again.");
      }
      score--;
      document.getElementById('score').textContent = score;
    }
  }
});

// restart button event listener
document.getElementById('restartBtn').addEventListener('click', function() {
  randomNum = Math.floor(Math.random() * 100) + 1;
  score = 10;
  document.body.style.backgroundColor = "white";
  document.getElementById('guessInput').disabled = false;
  document.getElementById('submitBtn').disabled = false;
  document.getElementById('score').textContent = score;
  document.getElementById('highscore').textContent = highscore;
  changeMsg("Let's start guessing...");
});