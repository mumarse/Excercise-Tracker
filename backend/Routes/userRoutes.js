const express = require("express");

const user = express.Router();

const UsersData = require("../Controllers/user_api")

user.post('/register', UsersData.register)
user.post('/login', UsersData.login)
user.post('/logout', UsersData.logout)

module.exports = user;