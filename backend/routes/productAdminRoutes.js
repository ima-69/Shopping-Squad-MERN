const express = require("express");
const { getAllProducts } = require("../controllers/adminProductController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/admin/products
// @desc    Get all products (Admin only)
// @access  Private/Admin
router.get("/", protect, admin, getAllProducts);

module.exports = router;
