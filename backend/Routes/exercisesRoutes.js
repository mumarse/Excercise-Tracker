// const router = require('express').Router();
const express = require("express");

const exercise = express.Router();

const Exercises = require("../Controllers/profile_mongos")

exercise.post('/save', Exercises.save)
exercise.get('/get', Exercises.get)
exercise.delete('/delete/:id', Exercises.delete)
// exercise.put('/update', protect, Exercises.Updatenotes)

module.exports = exercise;