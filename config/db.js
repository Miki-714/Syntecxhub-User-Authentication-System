const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Note: In newer Mongoose versions, you don't need
    // useNewUrlParser or useUnifiedTopology options.
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB Connected...");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1);
  }
};

// Ensure this line is EXACTLY like this:
module.exports = connectDB;
