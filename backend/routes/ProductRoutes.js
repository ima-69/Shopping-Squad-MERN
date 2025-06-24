const express = require("express");
const {
    createProduct,
    updateProduct,
    deleteProduct,
    getAllProducts,
    getBestSeller,
    getNewArrivals,
    getProductById,
    getSimilarProducts,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// Admin routes
router.post("/", protect, admin, createProduct);
router.put("/:id", protect, admin, updateProduct);
router.delete("/:id", protect, admin, deleteProduct);

// Public routes
router.get("/", getAllProducts);
router.get("/best-seller", getBestSeller);
router.get("/new-arrivals", getNewArrivals);
router.get("/:id", getProductById);
router.get("/similar/:id", getSimilarProducts);

module.exports = router;
