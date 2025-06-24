// routes/adminOrderRoutes.js

const express = require("express");
const {
  getAllOrders,
  updateOrderStatus,
  deleteOrder,
} = require("../controllers/adminOrderController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/admin/orders
// @desc    Get all orders (Admin only)
// @access  Private/Admin
router.get("/", protect, admin, getAllOrders);

// @route   PUT /api/admin/orders/:id
// @desc    Update order status
// @access  Private/Admin
router.put("/:id", protect, admin, updateOrderStatus);

// @route   DELETE /api/admin/orders/:id
// @desc    Delete an order
// @access  Private/Admin
router.delete("/:id", protect, admin, deleteOrder);

module.exports = router;
