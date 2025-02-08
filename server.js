require('dotenv').config()

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");
const helmet = require("helmet");


dotenv.config();

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/books", require("./routes/bookRoutes"));
app.use("/api/borrow", require("./routes/borrowRoutes"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));