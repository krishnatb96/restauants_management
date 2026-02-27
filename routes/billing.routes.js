const express = require("express");
const { createBill } = require("../controllers/billing.controller");
const { protect } = require("../middleware/auth.middleware");
const { checkSubscription } = require("../middleware/subscription.middleware");

const router = express.Router();

router.post("/", protect, checkSubscription, createBill);

module.exports = router;