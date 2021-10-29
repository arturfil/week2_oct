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
    // ... your code goes here
  }

  addWrongLetter(letter) {
    // ... your code goes here
  }

  checkGameOver() {
    // ... your code goes here
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);
   
    console.log(hangman.secretWord)

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', (event) => {
  // React to user pressing a key
  // ... your code goes here
  console.log(event.key);
  const response = hangman.checkIfLetter(event.key);

  hangman.checkClickedLetters(event.key)

  console.log(response);
});
