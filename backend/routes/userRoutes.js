const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/users/register
// @desc Register a new user
// @access Public
router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Registration Logic
        let user = await User.findOne({email});

        if (user) return res.status(400).json({message: "User already exists"});

        user = new User({name, email, password});
        await user.save();

        // Create JWT Payload
        const payload = { user: { id: user._id, role: user.role } };

        // Sign and return the token along with user data
        jwt.sign(
            payload, 
            process.env.JWT_SECRET,
            { expiresIn: "40h" },
            (err, token) => {
                if (err) throw err;

                // Send the user and token in response
                res.status(201).json({
                    user: {
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                    },
                    token,
                });
            }
        );

    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// @route POST /api/users/login
// @desc Authenticate user
// @access Public
router.post("/login", async (req,res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        let user = await User.findOne({ email });

        if (!user) return res.status(400).json({ message: "Invalid Credentials" });

        const isMatch = await user.matchPassword(password);

        if(!isMatch) return res.status(400).json({ message: "Invalid Credentials" })

        // Create JWT Payload
        const payload = { user: { id: user._id, role: user.role } };

         // Sign and return the token along with user data
         jwt.sign(
             payload, 
             process.env.JWT_SECRET,
             { expiresIn: "48h" },
             (err, token) => {
                 if (err) throw err;
 
                 // Send the user and token in response
                 res.json({
                     user: {
                         _id: user._id,
                         name: user.name,
                         email: user.email,
                         role: user.role,
                     },
                     token,
                 });
             }
         );
        
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

// @route GET /api/users/profile
// @desc Get logged-in user's profile (Protected Route)
// @access Private
router.get("/profile", protect,  async (req, res) => {
   res.json(req.user); 
});

// @route POST /api/users/google-auth
// @desc Authenticate user with Google
// @access Public
router.post('/google-auth', async (req, res) => {
  const { token, email, name } = req.body;

  try {
    // Check if the user already exists by email
    let user = await User.findOne({ email });

    if (!user) {
      // If user doesn't exist, create a new user with Google details
      user = new User({
        name,
        email,
        provider: 'google',
        googleId: token,  // Store the token as the Google ID (or use profile.id if needed)
      });
      await user.save();
    }

    // Create JWT payload
    const payload = { user: { id: user._id, role: user.role } };

    // Sign the JWT token
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '48h' },
      (err, token) => {
        if (err) throw err;

        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
