const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcryptjs');
const ObjectId = mongoose.Types.ObjectId;
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler")

const UserData = require('../Models/userData')

class UsersData {

    static register = asyncHandler(async (req, res) => {
        const { name, email, password } = req.body;

        try {

            // Check if user already exists
            let user = await UserData.findOne({ email });

            if (user) {
                return res.status(400).json({ error: "User already exists" });
            }

            // Create new user object
            user = new UserData({
                name,
                email,
                password
            });

            // Hash password
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);

            // Save user to database
            await user.save();

            // Generate JWT token
            const payload = { user: { _id: user._id } };
            const token = jwt.sign(payload, process.env.secret, {
                expiresIn: '1h'
            });

            res.json({ token });
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: 'Server Error' });
        }
    })

    static login = asyncHandler(async (req, res, next) => {
        const { email, password } = req.body;

        try {

            let user = await UserData.findOne({ email });
            if (!user) {
                return res.status(400).json({ error: "No User Exist with this Email" });
            }

            // Check if password is correct
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                console.log('passwaord not match')
                return res.status(400).json({ error: "Incorrect password" });
            }

            // Generate JWT token
            const payload = { user: { _id: user._id } };
            const token = jwt.sign(payload, process.env.secret, {
                expiresIn: '1h'
            });

            res.json({ token })

        } catch (error) {
            console.log(error.message);
            res.status(500).json({ error: 'Server Error' });
        }
    })

}

module.exports = UsersData;