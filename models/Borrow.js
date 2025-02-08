const mongoose = require('mongoose');

const BorrowSchema = new mongoose.Schema({
    userId:{type: mongoose.Schema.Types.ObjectId, ref:"User", rquired: true},
    books: [{type: mongoose.Schema.Types.ObjectId, ref: "Book"}],
    borrowedAt: {type: Date, default: Date.now},
    returned: {type: Boolean, default: false},
});

module.exports = mongoose.model("Borrow", BorrowSchema);