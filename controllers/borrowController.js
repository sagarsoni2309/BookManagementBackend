const Borrow = require("../models/Borrow");
const Book = require("../models/Book");

// Borrow books
exports.borrowBooks = async (req, res) => {
  try {
    const { userId, bookIds } = req.body;

    // Check if all books exist
    const books = await Book.find({ _id: { $in: bookIds } });
    if (books.length !== bookIds.length) {
      return res.status(404).json({ message: "One or more books not found" });
    }

    // Create a new borrow record
    const borrowRecord = new Borrow({ userId, books: bookIds });
    await borrowRecord.save();

    res.status(201).json({ message: "Books borrowed successfully", borrow: borrowRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Return borrowed books
exports.returnBooks = async (req, res) => {
  try {
    const { borrowId } = req.body;

    // Find the borrow record and update the returned status
    const borrowRecord = await Borrow.findByIdAndUpdate(
      borrowId,
      { returned: true },
      { new: true }
    );

    if (!borrowRecord) {
      return res.status(404).json({ message: "Borrow record not found" });
    }

    res.json({ message: "Books returned successfully", borrow: borrowRecord });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};