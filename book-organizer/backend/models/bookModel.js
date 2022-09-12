const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  book: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model("book", bookSchema);
module.exports = { Book };