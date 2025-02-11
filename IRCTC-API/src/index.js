const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config(); // Load environment variables

const app = express();
app.use(express.json()); // Middleware to parse JSON
app.use(cors()); // Enable CORS

// Import Routes
const authRoutes = require("./routes/authRoutes");

const trainRoutes = require("./routes/trainRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

// Use Routes

app.use("/api/auth", authRoutes);

app.use("/api/trains", trainRoutes);

app.use("/api/bookings", bookingRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`🚀 Server running on port ${PORT}`);
 
});
