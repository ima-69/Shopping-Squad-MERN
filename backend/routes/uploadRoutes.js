const express = require("express");
const multer = require("multer");
const { uploadImage } = require("../controllers/uploadController");

const router = express.Router();

// Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// @route   POST /api/upload
// @desc    Upload image to Cloudinary
// @access  Public (secure as needed)
router.post("/", upload.single("image"), uploadImage);

module.exports = router;
