const db = require("../config/db");

const User = {
  register: (username, password, callback) => {
    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], callback);
  },

  findByUsername: (username, callback) => {
    db.query("SELECT * FROM users WHERE username = ?", [username], callback);
  },
};

module.exports = User;
