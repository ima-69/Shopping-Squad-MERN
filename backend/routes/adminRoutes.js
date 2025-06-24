const express = require("express");
const {
    getAllUsers,
    addUser,
    updateUser,
    deleteUser
} = require("../controllers/adminUserController");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route   GET /api/admin/users
router.get("/", protect, admin, getAllUsers);

// @route   POST /api/admin/users
router.post("/", protect, admin, addUser);

// @route   PUT /api/admin/users/:id
router.put("/:id", protect, admin, updateUser);

// @route   DELETE /api/admin/users/:id
router.delete("/:id", protect, admin, deleteUser);

module.exports = router;
