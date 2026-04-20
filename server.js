require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const connectDB = require("./config/db");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database Connection
connectDB();

// Routes
app.use("/api/auth", authRoutes);

// Example Protected Route
const auth = require("./middleware/auth");
app.get("/api/protected", auth, (req, res) => {
  res.json({ message: "You have accessed a protected route!", user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
