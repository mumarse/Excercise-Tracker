const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const dotenv = require('dotenv');
dotenv.config();

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    Date: { type: Date, default: Date.now },
    tokens: [
        {
            token: String
        }
    ]
});


const UserData = mongoose.model('UserSchema', UserSchema);

module.exports = UserData;