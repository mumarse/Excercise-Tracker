const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const ObjectId = mongoose.Types.ObjectId;
const asyncHandler = require("express-async-handler")

const Excercise = require('../Models/Excercises')

const responseBuilder = (data, success = true) => {
    return {
        success,
        data
    }
}

class Excercises {

    static get = asyncHandler(async (req, res) => {
        Excercise.find({}).then(r => {
            res.send(responseBuilder({
                message: "Post saved in file",
                posts: r
            }));
        })
    })

    static save = asyncHandler(async (req, res) => {
        const { name, excerciseName, duration, date, descripition } = req.body;

        if (!name || !excerciseName || !duration || !date || !descripition) {
            res.send(responseBuilder({
                message: "Please provide Data"
            }, false));
        } else {
            const inputRecords = {
                "name": name,
                "excerciseName": excerciseName,
                "duration": duration,
                "date": date,
                "descripition": descripition

            };
            let postObject = new Excercise(inputRecords);
            await postObject.save();

            Excercise.find({}).then((result) => {
                res.send(responseBuilder({
                    message: "Post saved in file",
                    posts: result
                }));
            });
        }
    })

    static delete = asyncHandler(async (req, res) => {
        const { id } = req.params;
        console.log(id)

        Excercise.findByIdAndDelete(new ObjectId(id)).then((result) => {
            if (result) {
                res.send(responseBuilder({
                    message: "Post deleted",
                    id: id
                }));
            } else {
                res.send(responseBuilder({
                    message: "Post not found",
                    id: id
                }, false));
            }
        }).catch((err) => {
            res.send(responseBuilder({
                message: "Error deleting post",
                error: err.message
            }, false));
        });
    })

    static update = asyncHandler(async (req, res) => {
        // const id = "64102abba2af273557878492";
        const { id } = req.body;
        PostModel.findOneAndUpdate({ _id: id }, {
            $set: {
                username: username,
                text: text
            }
        }).then(() => {
            PostModel.find({}).then((result) => {
                res.send(responseBuilder({
                    message: "Post saved in file",
                    posts: result
                }));
            });
        }
        )
    })
}

module.exports = Excercises;