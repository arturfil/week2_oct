class HangmanCanvas {
  constructor(secretWord) {
    this.context = document.getElementById('hangman').getContext('2d');
    this.secretWord = secretWord;
  }

  createBoard() {
    console.log("board was cleared")
    this.context.clearRect(0, 0, 1200, 800);
    this.drawLines();
  }

  drawLines() {
    let n = this.secretWord.length;
    for (let i = 0; i < n; i++) {
      // start line at
      this.context.moveTo(230 + (i * 100), 200); // each line is (250 - 230) => 20 px, spaces are the i * 50
      // finishe line at, (x, y)
      this.context.lineTo(280 + (i * 100), 200);
      this.context.stroke();
    }
  }

  writeCorrectLetter(index) {
    this.context.font = '28px Open Sans, sans-serif'
    this.context.fillText(this.secretWord[index].toUpperCase(), 250 + (index * 100), 190);
  }

  writeWrongLetter(letter, errorsLeft) {
    this.context.font = '28px Open Sans, sans-serif';
    this.context.fillText(letter,  1000 - ((10 - errorsLeft) * 50 ), 100);
  }

  drawHangman(errorsLeft) {
    switch(errorsLeft) {
      case 9:                         //    .
        this.context.moveTo(50, 200); // .     .
        this.context.lineTo(100, 200);
        this.context.lineTo(75, 150);
        this.context.lineTo(50, 200);
        this.context.stroke();
        break;
      case 8:
        this.context.moveTo(75, 150);
        this.context.lineTo(75, 20);
        this.context.stroke();
        break;
      case 7:
        this.context.moveTo(75,20);
        this.context.lineTo(150,20);
        this.context.stroke();
        break;
      case 6:
        this.context.moveTo(150,20)
        this.context.lineTo(150, 40)
        this.context.stroke();
      case 5:
        this.context.moveTo(170, 60);
        this.context.arc(150, 60, 20, 0, Math.PI * 2, true);
        this.context.stroke();
        break;
      case 4:
        this.context.moveTo(150, 80);
        this.context.lineTo(150, 120);
        this.context.stroke();
        break;
      case 3:
        this.context.moveTo(150, 120);      
        this.context.lineTo(180, 120);      
        this.context.stroke();      
        break;
        case 2:
        this.context.moveTo(120, 120);
        this.context.lineTo(150, 120);
        this.context.stroke();
        break;
      case 1:
        this.context.moveTo(150, 120);
        this.context.lineTo(160, 180);
        this.context.stroke();
        break;
      case 0:
        this.context.moveTo(150, 120);
        this.context.lineTo(140, 180);
        this.context.stroke();
        break;
    }
  }

  gameOver() {
  }

  winner() {
  }
}