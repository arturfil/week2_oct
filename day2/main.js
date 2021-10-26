

let playersChoice = prompt("Choose Rock = R, Paper = P, Scissors = S");
alert(`You've chosen ${playersChoice}`);

let max = 3;
let min = 1;
let computersChoice = Math.floor(Math.random() * (max - min + 1) + min);
console.log("Number",computersChoice);

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

alert(`Computer's choice is: ${computersChoice}`)


// start with winning scenarios

// all possible scenarios when player chooses R;
if (playersChoice === 'R') {
  if (computersChoice === 'S') {
    alert("You won!");
  } else if (computersChoice === 'P') {
    alert("You've lost");
  } else {
    alert("It's a Draw!");
  }
}

if (playersChoice === 'S') {
  if (computersChoice === 'P') {
    alert("Yo won!")
  } else if (computersChoice === 'R') {
    alert("You've lost")
  } else {
    alert("It's a Draw!")
  }
}

if (playersChoice === 'P') {
  if (computersChoice === 'R') {
    alert("You won!");
  } else if (computersChoice === 'S') {
    alert("You've lost!")
  } else {
    alert("It's a Draw!")
  }
}
