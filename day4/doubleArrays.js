// []

let box = ["1", "2", "3"];

let grid = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

// console.log(grid[0][1]);
// console.log(grid[2][2]);
// console.log(grid[1][0]);

// for(let i = 0; i < box.length; i++) {
//   console.log(box[i]);
// }

// for each row
for (let i = 0; i < grid.length; i++) {
  // for each column
  for (let j = 0; j < grid[i].length; j++) {
    // console.log( grid[i][j] );
  }
}

// for example but avoid this unless really needed
/*
grid.forEach(row => {
  
  row.forEach(column => {

    console.log(column)

  })

})
*/

// Example how to access objects with arrays with objects arrays
let arturo = {
  pc: [
    { battleNet: ["call of duty"], epicGames: ["fortnite"] },
    { steam: ["RE4", "Rocket League"] },
  ],
  mac: [],
};

// console.log(arturo.pc[1].steam[1]);

const StephenKing = {
  books: ['IT', 'The shining'],
  age: 74,
  genre: 'Horror',
  gender: "M",
  place: "Portland Maine"
}

// getting the keys of the object
/*
let arrKeys = Object.keys(StephenKing);

for(let i = 0; i < arrKeys.length; i++) {
  console.log(StephenKing[arrKeys[i]]);
}
*/

// for (let objKey in StephenKing) {
//   console.log(objKey)
// }

for(let key in StephenKing) {
  if (typeof StephenKing[key] == 'object') {
    for (let index in StephenKing[key]) {
      console.log(StephenKing[key][index])
    }
  } else {
    console.log(StephenKing[key]);
  }
}

box = [1,2,3,4,5,6] // box.length = 5

for(let i = 0; i < box.length; i++) {

  for(let j = 0; j < box.length; j++) {

      if (box[i] + box[j] === 6) {
          console.log("It adds up to 6!")
      }

  }
}

