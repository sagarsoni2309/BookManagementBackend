const express = require("express");
const router = express.Router();
const {
  addBook,
  getAllBooks,
  searchBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to add a new book
router.post("/", authMiddleware, addBook);

// Route to get all books
router.get("/", getAllBooks);

// Route to search for books by title or author
router.get("/search", searchBooks);

// Route to update book details
router.put("/:id", authMiddleware, updateBook);

// Route to delete a book
router.delete("/:id", authMiddleware, deleteBook);

module.exports = router;