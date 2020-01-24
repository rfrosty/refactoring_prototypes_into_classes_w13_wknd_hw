// const Book = function (author, title, genre) { //Constructor (function). Must be anonymous.
//   this.author = author;
//   this.title = title;
//   this.genre = genre;
// };
//
// module.exports = Book; //export constructor (function book.

class Book { //Unlike function declarations, class declrations are not hoisted.
  constructor(author, title, genre) {
    this.author = author;
    this.title = title;
    this.genre = genre;
  }

  author() {
    return this.author;
  }

  title() {
    return this.title;
  }

  genre() {
    return this.genre;
  }
}

module.exports = Book;
