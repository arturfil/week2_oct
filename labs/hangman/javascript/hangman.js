class Hangman {
  constructor(words) {
    this.words = words; // array of words
    this.secretWord = this.pickWord();
    this.letters = [];
    this.guessed = [];
    this.errorsLeft = 10;
  }

  pickWord() {
    let random_index = Math.floor(Math.random() * this.words.length); 
    return this.words[random_index];
  }

  checkIfLetter(key) {
    if (key >= "a" && key <= "z") {
      return true;
    } else {
      return false;
    }
  }

  checkClickedLetters(key) {
    // return !this.letters.includes(key) ? true : false;
    if (!this.letters.includes(key)) {
      return true;
    } else {
      return false;
    }
  }

  addCorrectLetter(letter) {
    if (this.checkClickedLetters(letter) && this.secretWord.includes(letter)) {
      this.guessed.push(letter);
    }
  }

  addWrongLetter(letter) {
    if (this.checkClickedLetters(letter) && !this.secretWord.includes(letter)) {
      this.letters.push(letter);
    }
  }

  checkGameOver() {
    // ... your code goes here
    if (this.errorsLeft === 0) {
      return true;
    } else {
      return false;
    }
  }

  checkWinner() {
    return this.secretWord.length === this.guessed.length ? true : false;
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
   

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    hangmanCanvas = new HangmanCanvas(hangman.secretWord);
    hangmanCanvas.createBoard();

    // ... your code goes here
  });
}

document.addEventListener('keydown', (event) => {


  if (!hangman.checkIfLetter(event.key)) {
    return;
  }

  // if letter hasn't been typed
  if (hangman.checkClickedLetters(event.key)) {
    // if letter is correct
    if (hangman.secretWord.includes(event.key)) {
      hangman.addCorrectLetter(event.key);

      for (let i = 0; i < hangman.secretWord.length; i++) {
        if(event.key === hangman.secretWord[i]) {
          hangmanCanvas.writeCorrectLetter(i);
          hangman.addCorrectLetter(event.key);
        }
      }

    } else {
      hangman.addWrongLetter(event.key);
      hangmanCanvas.writeWrongLetter(event.key, hangman.errorsLeft)
      hangman.errorsLeft--;
      hangmanCanvas.drawHangman(hangman.errorsLeft);
    }
  }

});
