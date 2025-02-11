const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");
const verifyAdminAPIKey = require("../middlewares/adminMiddleware");


router.get("/", trainController.getAllTrains);

router.get("/:id", trainController.getTrainById);


router.post("/", verifyAdminAPIKey, trainController.createTrain);


router.put("/:id", verifyAdminAPIKey, trainController.updateTrain);


router.delete("/:id", verifyAdminAPIKey, trainController.deleteTrain);

module.exports = router;
