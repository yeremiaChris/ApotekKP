const express = require("express");
const router = express.Router();
const medicineController = require("../controller/medicineController");
router.get("/medicine", medicineController.medicine_get);
router.post("/medicine", medicineController.medicine_post);
//The 404 Route (ALWAYS Keep this as the last route)

module.exports = router;
