// routes/cartRoutes.js

const express = require("express");
const {
  addToCart,
  updateCart,
  removeFromCart,
  getCartByUserOrGuest,
  mergeCart,
} = require("../controllers/cartController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   POST /api/cart
router.post("/", addToCart);

// @route   PUT /api/cart
router.put("/", updateCart);

// @route   DELETE /api/cart
router.delete("/", removeFromCart);

// @route   GET /api/cart
router.get("/", getCartByUserOrGuest);

// @route   POST /api/cart/merge
router.post("/merge", protect, mergeCart);

module.exports = router;
