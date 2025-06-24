const express = require("express");
const {
    registerUser,
    loginUser,
    getUserProfile,
    googleAuth,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   POST /api/users/register
router.post("/register", registerUser);

// @route   POST /api/users/login
router.post("/login", loginUser);

// @route   GET /api/users/profile
router.get("/profile", protect, getUserProfile);

// @route   POST /api/users/google-auth
router.post("/google-auth", googleAuth);

module.exports = router;
