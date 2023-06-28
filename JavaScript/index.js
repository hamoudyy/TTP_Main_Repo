

// Assignment  6/26.



//Assignment 1






const rows = 5;
const columns = 5;

function multiplicationTable(rows, columns) {
  const table = [];

  for (let i = 1; i <= rows; i++) {
    const row = [];

    for (let j = 1; j <= columns; j++) {
      row.push(i * j);
    }

    table.push(row);
  }

  return table;
}

const table = multiplicationTable(rows, columns);

console.log(table);
















//Assignment 2









function createBook(id, title, author, price) {
    let book = Object.create(createBook);
  
    book.id = id;
    book.title = title;
    book.author = author;
    book.price = price;
    book.rating = []; // brackets means stores in array.
  
    return book;
  }
  
  createBook.getInfo = function () {
    return `${this.title} by ${this.author}`;
  };
  
  createBook.getPrice = function () {
    return this.price;
  };
  
  createBook.addRating = function (rating) {
    this.rating.push(rating);
  };
  
  createBook.getRating = function () {
    let rating = this.rating;
    let stars = 0;
  
    for (let i = 0; i < rating.length; i++) {
      stars += rating[i].length;
    }
  
    return stars / rating.length;
  };









// Assignment 3









function soup(phrase, bank) {
    for (let i = 0; i < phrase.length; i++) {
      if (!bank.includes(phrase[i])) {
        return false;
      }
    }
  
    if (phrase.length <= bank.length) {
      return true;
    } else {
      return false;
    }
  }










  
// Assignment 4
function runNumTimes(func, num) {
    let count = 0;

    while (count < num) [
        func(),
        count++;
    ]
}
