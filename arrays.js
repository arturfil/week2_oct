// array functions
// filter, map, reduce, forEach
// TODO: check forEach for object 

let body_parts_for_tattos = [
  "arms",
  "neck",
  "back",
  "leg",
  "face",
  "ear",
  "hands",
  "armpit",
  "scalp",
];

// for(let i = 0; i < body_parts_for_tattos.length; i++) {
//   console.log(`You could get your ${body_parts_for_tattos[i]} tattooed`);
// }


// console.log(favorite_team);
// let favorite_team = "Manchester United"

// body_parts_for_tattos.forEach(greet);

// declare
let i;
// initialize
i = 5;

// re-assign a value
i = 6;

function greet() {
  console.log("Hello");
}

function printName(name, callback) {
  console.log(name);
  callback();
}

function goodbyes() {
  console.log("Good Bye");
}

// printName("Arturo", goodbyes);

let soccerTeams = [
  {budget: 300, name: "Manchester United", country: "England", uniformColor: "red"},
  {budget: 100, name: "Bayern Munich", country: "Germany", uniformColor: "red"},
  {budget: 100, name: "Orlando City Lions", country: "U.S.A", uniformColor: "purple"},
  {budget: 80, name: "Inter Miami CF", country: "U.S.A", uniformColor: "black"},
  {budget: 2, name: "Barcelona", country: "Spain", uniformColor: "blue"},
  {budget: 400, name: "Chelsea", country: "England", uniformColor: "blue"},
  {budget: 90, name: "Juventus", country: "Italy", uniformColor: "black"}
]

// map, filter, reduce

// get only the names
let nameOfTeams = soccerTeams.map((arr) => {
  return arr.name;
})

let countryOfTeams = soccerTeams.map(function(team) {
  return team.country;
})

// for(let i = 0; i < countryOfTeams.length; i++) {
//   console.log(countryOfTeams[i])
// }

// for (country of countryOfTeams) {
//   console.log(country);
// }

// filter
// TODO: return all OBJECTS with team U.S.A.
let teamsFromUSA = soccerTeams.filter((team) => {
  return team.country === 'U.S.A';
});

let teamsNotFromItaly = soccerTeams.filter((team) => {
  return team.country !== "Italy";
});

// for(let i = 0; i < teamsNotFromItaly.length; i++) {
//   console.log(teamsNotFromItaly[i]);
// }

let totalBudget = soccerTeams.reduce((acc, team) => {
  return team.budget + acc;
}, 0)

// console.log(totalBudget);

let blueUniformTeamNames = soccerTeams.filter((team) => {
  return team.uniformColor === 'blue';
}).map((team) => {
  return team.country.toLowerCase();
});

console.log(blueUniformTeamNames);