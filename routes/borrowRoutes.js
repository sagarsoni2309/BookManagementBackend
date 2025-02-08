const express = require("express");
const router = express.Router();
const { borrowBooks, returnBooks } = require("../controllers/borrowController");
const authMiddleware = require("../middleware/authMiddleware");

// Route to borrow books
router.post("/borrow", authMiddleware, borrowBooks);

// Route to return borrowed books
router.post("/return", authMiddleware, returnBooks);

module.exports = router;