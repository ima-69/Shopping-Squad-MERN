// routes/checkoutRoutes.js

const express = require("express");
const {
  createCheckoutSession,
  updateCheckoutPaid,
  finalizeCheckout,
} = require("../controllers/checkoutController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   POST /api/checkout
router.post("/", protect, createCheckoutSession);

// @route   PUT /api/checkout/:id/pay
router.put("/:id/pay", protect, updateCheckoutPaid);

// @route   POST /api/checkout/:id/finalize
router.post("/:id/finalize", protect, finalizeCheckout);

module.exports = router;
