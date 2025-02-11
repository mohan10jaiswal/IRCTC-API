const db = require("../config/db");


exports.bookSeat = async (req, res) => {
  const { trainId, userId, seats } = req.body;

  if (!trainId || !userId || !seats) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
 
    await db.promise().query("START TRANSACTION");

 
    const [train] = await db.promise().query(
      "SELECT seatsAvailable FROM trains WHERE id = ? FOR UPDATE",
      [trainId]
    );

    if (train.length === 0) {
      return res.status(404).json({ message: "Train not found" });
    }

    if (train[0].seatsAvailable < seats) {
      return res.status(400).json({ message: "Not enough seats available" });
    }

  
    await db.promise().query(
      "UPDATE trains SET seatsAvailable = seatsAvailable - ? WHERE id = ?",
      [seats, trainId]
    );

   
    await db.promise().query(
      "INSERT INTO bookings (trainId, userId, seats) VALUES (?, ?, ?)",
      [trainId, userId, seats]
    );

    
    await db.promise().query("COMMIT");

    res.json({ message: "Seat booked successfully" });
  } catch (error) {
    await db.promise().query("ROLLBACK");
    res.status(500).json({ message: "Booking failed", error: error.message });
  }
};


exports.getBookingStatus = async (req, res) => {
  const { trainId } = req.params;

  try {
    const [bookings] = await db.promise().query(
      "SELECT * FROM bookings WHERE trainId = ?",
      [trainId]
    );

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};
