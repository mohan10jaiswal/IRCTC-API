const express = require("express");
const router = express.Router();
const bookingController = require("../controllers/bookingController");
const verifyAuthToken = require("../middlewares/authMiddleware");


router.post("/book", verifyAuthToken, bookingController.bookSeat);


router.get("/status/:userId", verifyAuthToken, bookingController.getBookingStatus);

module.exports = router;
