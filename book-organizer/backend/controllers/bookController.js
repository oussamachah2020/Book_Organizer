const asyncHandler = require("express-async-handler");
const { Book } = require("../models/bookModel");

const push = asyncHandler(async (req, res) => {
  const bookData = await Book.create({
    book: req.body.book,
    user: req.user.id,
  });

  res.status(201).json({ bookData });
});

module.exports = { push };
