let BookInstance = require('../models/bookinstance');
const Book = require("../models/book");
const Author = require("../models/author");

exports.show_all_books_status = async (res) => {
  BookInstance.find({'status': {$eq: 'Available'}}, 'title status')
      .populate('book')
      .exec()
      .then(lbs => {
        res.send(lbs.map(b => b.book.title + " " + b.status));
      })
      .catch(err => res.send("books not found"));
}