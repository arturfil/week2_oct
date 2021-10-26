/**
 * Important
 * - how to create a function
 * - how to create an object
 * - how to iterate with a forloop, print an array
 * - array manipulation
 */

// booleans
let amIanInstructor = true;
let mexican = true;

// numbers
let age = 29;
let cristianos_ballon_dores = 5;

// 2    | int  
// 3.5  | float


// strings
let dish = "moro";
let italian_dish = "lasagna";

// let food = ["chick fil-A", "sushi", "tacos", "moros" ,"lasagna", "ceviche", "pizza", "cachapa"];

// functions
function punch() {
  console.log("punch")
}

function torpedo() {
  console.log("torpedo");
}

// objects
let luigi = {
  clothes: ["overall", "green shirt", "green hat", "shoes", "gloves"],
  jump: 3.5,
  power: 4,
  attack: torpedo,
}

let mario = {
  name: "Mario",
  clothes: ["overall", "red shirt", "red hat", "shoes", "gloves"],
  jump: 2.5,
  power: 5,
  attack: punch,
  brother: luigi
}

// adding a key to the object luigi
luigi.brother = mario;

// luigi.attack();

// mario.attack();

// console.log(mario.brother);

// a function that multiplies two numbers
function multiplyNum(a, b) {
  return a * b;
}

let total_check = 16;
let percent = .15;

let total_with_tip = multiplyNum(total_check, percent) + total_check;

// console.log(total_with_tip) // 18.4;

let hash_tags = 'programming, javascript, mern, react, software engineering';

let tags = hash_tags.split(",")
// TODO loop and trip .trim();
// console.log(tags);

// loops
// TODO: show basic setup
// for(let i = 0; i < 31; i = i++) {
//   // console.log(i);
// }

// for(let i = 30; i >= 0; i--) {
//   // console.log(i)
// }

// while
// let c = 0; // global variable
// while (c <= 30) { 
//   console.log(c);
//   c++;
// }

let j = 0
do {
  // console.log("This will run");
} while (j > 0);

// for loop -> for each
let foods = ["chick fil-A", "sushi", "tacos", "moros" ,"lasagna", "ceviche", "pizza", "cachapa"];

// for (food in foods) {
//   console.log(foods[food]);
// }

for (food of foods) {
  // console.log(food);
}

for (key in mario) {
  console.log(mario[key]); // prints the values
}

// for(let i = foods.length-1; i >= 0; i = i - 2) {
//   console.log(foods[i]);
// }
// iterator => i
// when it starts, under what condition it keeps on running, 
// - by how much does the iterator increases every round
// for (let i = 0; i < 21; i++) {
//   console.log(i);
// }

// as long as the condition is true
// you want to change the condition inside the loop at some point
// while(a = b) {

// }