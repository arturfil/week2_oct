function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  const subTotal = product.querySelector('.subtotal span');

  subTotal.innerHTML = price * quantity;

  return price * quantity;
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2
  //... your code goes here
  const products = document.getElementsByClassName("product");
  
  // for(let i = 0; i < products.length; i++) {
  //   updateSubtotal(products[i]);
  // }

  // for(let product of products) {
  //   updateSubtotal(product);
  // }

  // ITERATION 3
  //... your code goes here
  let total = 0;
  for(let product of products) {
    total += updateSubtotal(product);
  }
  // console.log(total)

  document.querySelector("#total-value span").innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});