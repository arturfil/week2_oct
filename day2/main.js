// constants and variables
const playersChoiceDisplay = document.getElementById("playersChoice");
const gameTitle = document.querySelectorAll(".title");
console.log(gameTitle)
const computersChoiceDisplay = document.getElementById("computersChoice");
const resulstDisplay = document.getElementById("result");
const startBtn = document.getElementById("startButton");

startBtn.style.backgroundColor = 'green';
startBtn.style.color = 'white';

// uncomment code below to see html document
const exampleDiv = document.body.children
// console.log("HERE", exampleDiv);
//

for(let i = 0; i < exampleDiv.length; i++) {
  console.log(exampleDiv[i]);
}

// uncomment to see classlist
// console.log(startBtn.classList)

// 
const h3s = document.querySelector(".class1");
console.log(h3s);

startBtn.addEventListener('click', () => {
  runGame();
});

// Loop for game handling logic
const runGame = () => {

  // handle the start of game
  let playersChoice = prompt("Choose Rock = R, Paper = P, Scissors = S").toUpperCase();
  playersChoiceDisplay.innerHTML = playersChoice;
  // alert(`You've chosen ${playersChoice}`);

  // randomizing the computers choice
  let max = 3;
  let min = 1;
  let computersChoice = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("Number",computersChoice);

  // assigning value of computer
  switch(computersChoice) {
    case 3:
      computersChoice = "R";
      break;
    case 2:
      computersChoice = "S";
      break;
    case 1:
      computersChoice = "P";
      break;
  }
  computersChoiceDisplay.innerHTML = computersChoice;

  // all possible scenarios when player chooses R;
  if (playersChoice === 'R') {
    if (computersChoice === 'S') {
      resulstDisplay.innerHTML = "You Won!";
      gameTitle.style.color = 'green'
    } else if (computersChoice === 'P') {
      resulstDisplay.innerHTML = "You've Lost!";
      gameTitle.style.color = 'red'
    } else {
      resulstDisplay.innerHTML = "It's a Draw!";
    }
  }

  // scenarios when player chooses S
  if (playersChoice === 'S') {
    if (computersChoice === 'P') {
      resulstDisplay.innerHTML = "You won!";
      gameTitle.style.color = 'green'
    } else if (computersChoice === 'R') {
      resulstDisplay.innerHTML =  "You've lost";
      gameTitle.style.color = 'red'
    } else {
      resulstDisplay.innerHTML =  "It's a Draw!";
    }
  }

  // scenarios where player chooses P
  if (playersChoice === 'P') {
    if (computersChoice === 'R') {
      resulstDisplay.innerHTML = "You won!";
      gameTitle.style.color = 'green'
    } else if (computersChoice === 'S') {
      resulstDisplay.innerHTML = "You've lost!";
      gameTitle.style.color = 'red'
    } else {
      resulstDisplay.innerHTML = "It's a Draw!";
    }
  }

}


