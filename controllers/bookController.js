const Book = require("../models/Book");

// Add a new book
exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;

    // Create a new book instance
    const newBook = new Book({ title, author, genre, publishedYear });

    // Save the book to the database
    await newBook.save();

    res.status(201).json({ message: "Book added successfully", book: newBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search for books by title or author
exports.searchBooks = async (req, res) => {
  try {
    const { query } = req.query;
    const books = await Book.find({
      $or: [
        { title: { $regex: query, $options: "i" } },
        { author: { $regex: query, $options: "i" } },
      ],
    });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update book details
exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, publishedYear } = req.body;

    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { title, author, genre, publishedYear },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book updated successfully", book: updatedBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a book
exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};