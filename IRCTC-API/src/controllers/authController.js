const bcrypt = require("bcryptjs");
const db = require("../config/db");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
  }

  try {
      const hashedPassword = await bcrypt.hash(password, 10);

      db.query(
          "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
          [username, email, hashedPassword],
          (err, result) => {
              if (err) {
                  console.error(err);
                  return res.status(500).json({ message: "Database error" });
              }
              res.status(201).json({ message: "User registered successfully" });
          }
      );
  } catch (error) {
      res.status(500).json({ message: "Server error" });
  }
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  User.findByUsername(username, async (err, users) => {
    if (err || users.length === 0) return res.status(400).json({ message: "User not found" });

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  });
};
