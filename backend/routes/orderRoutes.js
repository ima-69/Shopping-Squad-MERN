const express = require("express");
const { getMyOrders, getOrderById } = require("../controllers/orderController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/orders/my-orders
router.get("/my-orders", protect, getMyOrders);

// @route   GET /api/orders/:id
router.get("/:id", protect, getOrderById);

module.exports = router;
