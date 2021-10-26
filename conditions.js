// if, if else, else, switch, ternary

let cristiano = {
  country: 'France',
  sport: "Soccer",
  name: "Cristiano Ronaldo",
  team: "PSG",
  age: 36,
  salary: 120,
  type: 'team sport'
}

let lebron = {
  country: "USA",
  sport: "Basketball",
  name: "Lebron James",
  team: "Lakers",
  age: 36,
  salary: 41.8,
  type: 'team sport'
}

let federer = {
  country: "Switzerland",
  sport: "Tennis",
  name: "Roger Federer",
  team: "Switzerland",
  age: 40,
  salary: 90,
  type: 'solo'
}

let SwitzerlandTax = 0.27;
let USATax = 0.34;
let EnglandTax = 0.38;
let SpainTax = 0.60;

if (federer.country === "Switzerland") {
  // console.log(federer.salary * SwitzerlandTax);
}

if (lebron.country === 'USA') {
  // console.log((lebron.salary * USATax).toFixed(2));
} 

if (cristiano.country === "England") {
  // console.log(cristiano.salary * EnglandTax)

} else if (cristiano.country === "Spain") {
  // console.log(cristiano.salary * SpainTax);

} else {
  // console.log((cristiano.salary * USATax).toFixed(2));
}

let stateTaxes = [
  {state: "NY", tax: 0.28},
  {state: "CA", tax: 0.30},
  {state: "FL", tax: 0.0},
  {state: "NC", tax: 0.20},
  {state: "IL", tax: 0.28},
  {state: "TX", tax: 0.14},
  {state: "HI", tax: 0.40}
]


function checkTax(state) {


  switch(state) {
    case state.state === "NY":
      console.log("You will be charged", state.tax)
      break;
    case "FL":
      console.log("You will be charged", state.tax)
      break;
    case "MO":
      console.log("You will be charged", state.tax)
      break;
    case "CA":
      console.log("You will be charged", state.tax)
      break;
    case "NC":
      console.log("You will be charged", state.tax)
      break;
    case "IL":
      console.log("You will be charged", state.tax)
      break;
    case "TX":
      console.log("You will be charged", state.tax)
      break;
    case "HI":
      console.log("You will be charged", state.tax)
      break;
    default:
      console.log("You will be charged", state.tax)
      break;
  }
}

function printTaxt(state) {
  console.log("you will be charged", state.tax);
}

checkTax(stateTaxes[0]);
checkTax(stateTaxes[3]);