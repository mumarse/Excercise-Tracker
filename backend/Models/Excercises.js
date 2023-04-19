const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: String,
    excerciseName: String,
    duration: String,
    date: String,
    description: String
}, {
    timestamps: true
});

const Exercise = mongoose.model('ExerciseSchema', ExerciseSchema, process.env.Collection);

module.exports = Exercise;