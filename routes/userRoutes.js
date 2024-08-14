const express = require('express');
const router = express.Router();
const User = require('./../models/user.js');
const { jwtAuthMiddleware, generateToken } = require('../jwt');


// POST route to add a person
router.post('/signup', async (req, res) => {
    try {
        const data = req.body // Assuming the request body contains the User data

        // Check if there is already an admin user
        const adminUser = await User.findOne({ role: 'admin' });
        if (data.role === 'admin' && adminUser) {
            return res.status(400).json({ error: 'Admin user already exists' });
        }

        // Validate Aadhar Card Number must have exactly 12 digit
        if (!/^\d{12}$/.test(data.aadharnumber)) {
            // console.log("aadharnumber:", { aadharnumber: data.aadharnumber })
            return res.status(300).json({ error: 'Aadhar Card Number must be exactly 12 digits' });
        }

        // console.log("aadhar number is validated ")
        // Check if a user with the same Aadhar Card Number already exists
        const existingUser = await User.findOne({ aadharnumber: data.aadharnumber });

        if (existingUser) {
            // console.log("aadhar number is Duplicate ! please enter the unique number")
            return res.status(400).json({ sucess: false, error: 'User with the same Aadhar Card Number already exists' });
        }
        // console.log("aadhar number has unique number")

        // Create a new User document using the Mongoose model
        const newUser = new User(data);

        // Save the new user to the database
        const response = await newUser.save();
        // console.log('data saved');

        const payload = {
            id: response.id
        }
        // console.log(JSON.stringify(payload));
        
        const token = generateToken(payload);
       
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
        // res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
        res.status(200).json({ token: token, sucess: true, response: response });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

// Login Route 
router.post('/login', async (req, res) => {
    try {
        // Extract aadharCardNumber and password from request body
        const { aadharnumber, password } = req.body;
        // console.log("req.body : ", req.body)


        // Check if aadharCardNumber or password is missing
        if (!aadharnumber || !password) {
            return res.status(400).json({ sucess: false, error: 'Aadhar Card Number and password are required' });
        }

        // Find the user by aadharCardNumber
        const user = await User.findOne({ aadharnumber });

        // If user does not exist or password does not match, return error
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ sucess: false, error: 'Invalid Aadhar Card Number or Password' });
        }

        // generate Token 
        const payload = {
            id: user.id,
        }
        if (user.role == 'voter') {
            const token = await generateToken(payload);
            res.status(200).json({ sucess: true, user, token: token })
        }
        else {
            res.status(400).json({ sucess: false, message: "User not having admin role" })
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ sucess: false, error: 'Internal Server Error' });
    }
});

// Profile route
router.get('/profile', jwtAuthMiddleware, async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        res.status(200).json(user);
    } catch (err) {
        // console.error(err);
        res.status(500).json({ sucess: true, error: 'Internal Server Error' });
    }
})

router.put('/profile/forget', jwtAuthMiddleware, async (req, res) => {
    try {

        // console.log("Froget PAssword")
        const userId = req.user.id; // Extract the id from the token
        const { aadharnumber, currentPassword, newPassword } = req.body; // Extract current and new passwords from request body

        // Check if currentPassword and newPassword are present in the request body
        if (!currentPassword || !aadharnumber || !newPassword) {
            return res.status(400).json({ sucess: false, error: 'aadharnumber , currentPassword and newPassword are required' });
        }

        // Find the user by userID
        const user = await User.findById(userId);

        // If user does not exist or password does not match, return error
        if (!user || !(await user.comparePassword(currentPassword))) {
            return res.status(401).json({ sucess: false, error: 'Invalid AadharNumber and Password' });
        }

        // Update the user's password
        user.password = newPassword;
        await user.save();

        // console.log('password updated');
        res.status(200).json({ sucess: true, message: 'Password updated' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ sucess: false, error: 'Internal Server Error' });
    }
});

module.exports = router;
