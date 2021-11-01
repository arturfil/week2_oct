/*
 - Javascript is synchronous but has asynchronous behavior
 - This means it runs in order or in a timeline.
 - BUT it can delegate processes, leave them running in the background,
 and continue with other tasks at hand.
 - Single threaded. (Only yourself making coffee)
 - Multi threaded. (3 people handling all tasks);
 */

// let time = 1;

// setInterval(() => {
//   console.log(time);
//   time += 1;
// }, 1000);

// Making coffee | Synchronously
/*
  Steps:
  - boil water    - 2 mins
  - beans portion - 40 seconds
  - grind coffee  - 10 seconds
  - filter        - 3 seconds
  - brewing       - 30 seconds
*/
// total coffee making time step by step 3m:23s

// Making coffe | Asynchronously
/*
  - boil water    - 2 mins
    - beans portion - 40 seconds
    - grind cofee   - 10 seconds
    - filter        - 3 seconds
  - brewring      - 30 seconds
*/
// total coffe maing time async is 2m:30s

let water_done = false;

// boiling water -> brewing coffee
// setTimeout(() => {
//   console.log("water boiled DONE")

//   setTimeout(() => {
//     console.log("Brewing coffe DONE")
//   }, 1000)

// }, 2000)

// // Dosing beans
// setTimeout(() => {
//   console.log("Beans dosed DONE");
// }, 400)

// // grind the coffee -> put it in filter
// setTimeout(() => {
//   console.log("Grind coffee");

//   setTimeout(() => {
//     console.log("Putting coffe in filter")
//   }, 500)

// }, 500);

// IMPORTANT -> JS is single threaded and synchronous BUT it has 
// asynchronouse behaviors, can delegate tasks to other processes

// creating intervals 

let ourInterval = setInterval(() => {
  console.log("Hey!")
}, 1000);

setTimeout(() => {
  clearInterval(ourInterval);
}, 5000)