const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const dotenv = require('dotenv');
dotenv.config();

const excercise = require('./Routes/exercisesRoutes')
const user = require('./Routes/userRoutes')

const app = express();
const port = process.env.PORT || 4000;


app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));       // to support JSON-encoded bodies
app.use(express.urlencoded({ limit: "30mb", extended: true })); // to support URL-encoded bodies
app.use(cookieParser());

app.use('/posts', excercise)
app.use('/users', user)


app.listen(port, () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(res => console.log("DB Connected"))
    console.log(`Listening on port ${port}`)
});