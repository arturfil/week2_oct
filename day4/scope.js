// global scope
let author = "J.K. Rowling";

function printAuthor() {

  // local scope => where local has precedence
  let author = 'Tolkien'
  console.log(author);

}

printAuthor();
console.log(author);
