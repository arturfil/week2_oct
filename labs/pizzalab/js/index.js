// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach((mushroom) => {
    if (state.mushrooms) {
      mushroom.style.visibility = 'visible';
    } else {
      mushroom.style.visibility = 'hidden';
    }
  })
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(pepper => {
    if (state.greenPeppers) {
      pepper.style.visibility = 'visible';
    } else {
      pepper.style.visibility = 'hidden';
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  if (state.whiteSauce) {
    document.querySelector('.sauce').classList.add('sauce-white');
  } else {
    document.querySelector('.sauce').classList.remove('sauce-white');
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.querySelector('.crust').classList.add('crust-gluten-free');
  } else {
    document.querySelector('.crust').classList.remove('crust-gluten-free');
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  // document.querySelectorAll('.btn').forEach(btn => {

  //   if (btn.classList.contains('btn-mushrooms') && state.mushrooms) {
  //     btn.classList.add('active');

  //   } else if (btn.classList.contains('btn-pepperoni') && state.pepperoni) {
  //     btn.classList.add('active');

  //   } else if (btn.classList.contains('btn-green-peppers') && state.greenPeppers) {
  //     btn.classList.add('active');

  //   } else if (btn.classList.contains('btn-sauce') && state.whiteSauce) {
  //     btn.classList.add('active');
    
  //   } else if (btn.classList.contains('btn-crust') && state.glutenFreeCrust) {
  //     btn.classList.add('active');

  //   } else {
  //     btn.classList.remove('active');
  //   }
  // })
  
  let index = 0;
  const stateKeys = Object.keys(state);
  let buttons = document.querySelectorAll('.btn').forEach(btn => {
    if (state[stateKeys[index]]) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
    index++;
  })

  // const buttons = document.querySelectorAll('.btn');
  // let index = 0;
  // for(let i in state) {
  //   if (state[i]) {
  //     buttons[index].classList.add('active');
  //   } else {
  //     buttons[index].classList.remove('active');
  //   }
  //   index++;
  // }

  
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const ul = document.querySelector('.price').children[2]; // TODO, check '.price ul'
  const strong = document.querySelector('.price strong');
  let total = basePrice;

  ul.innerHTML = '';
  strong.innerHTML = '';

  if (state.pepperoni) {
    let li = document.createElement('li');
    li.innerHTML = `$${ingredients.pepperoni.price} ${ingredients.pepperoni.name}`;
    ul.append(li);
    total += ingredients.pepperoni.price;
  }

  if (state.mushrooms) {
    let li = document.createElement('li');
    li.innerHTML = `$${ingredients.mushrooms.price} ${ingredients.mushrooms.name}`;
    ul.append(li);
    total += ingredients.mushrooms.price;
  }

  if (state.greenPeppers) {
    let li = document.createElement('li');
    li.innerHTML = `$${ingredients.greenPeppers.price} ${ingredients.greenPeppers.name}`;
    ul.append(li);
    total += ingredients.greenPeppers.price;
  }

  if (state.whiteSauce) {
    let li = document.createElement('li');
    li.innerHTML = `$${ingredients.whiteSauce.price} ${ingredients.whiteSauce.name}`;
    ul.append(li);
    total += ingredients.whiteSauce.price;
  }

  if (state.glutenFreeCrust) {
    let li = document.createElement('li');
    li.innerHTML = `$${ingredients.glutenFreeCrust.price} ${ingredients.glutenFreeCrust.name}`;
    ul.append(li);
    total += ingredients.glutenFreeCrust.price;
  }

  if (ul) {
    strong.innerHTML = `$${total}`
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => { 
  state.mushrooms = !state.mushrooms;
  renderEverything();
})

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
})