const db = require("../config/db");

// Create a Train
exports.createTrain = (req, res) => {
  const { name, source, destination, departureTime, seatsAvailable } = req.body;
  const sql = `INSERT INTO trains (name, source, destination, departureTime, seatsAvailable) VALUES (?, ?, ?, ?, ?)`;

  db.query(sql, [name, source, destination, departureTime, seatsAvailable], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Train added successfully!" });
  });
};

// Get All Trains
exports.getAllTrains = (req, res) => {
  const sql = `SELECT * FROM trains`;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get Train by ID
exports.getTrainById = (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM trains WHERE id = ?`;

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Train not found" });
    res.json(result[0]);
  });
};

// Update Train by ID
exports.updateTrain = (req, res) => {
  const { id } = req.params;
  const { name, source, destination, departureTime, seatsAvailable } = req.body;
  const sql = `UPDATE trains SET name=?, source=?, destination=?, departureTime=?, seatsAvailable=? WHERE id=?`;

  db.query(sql, [name, source, destination, departureTime, seatsAvailable, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Train updated successfully!" });
  });
};



exports.deleteTrain = (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM trains WHERE id=?`;

  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Train deleted successfully!" });
  });
};
