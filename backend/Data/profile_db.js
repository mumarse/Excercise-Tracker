const connectMondo = require("../DB/mongo_utils");
const dotenv = require('dotenv');

dotenv.config();

const insertPost = (dataInput) => {
    return connectMondo().then(async (db) => {
        const connection = await db.collection(process.env.Collection);

        try {
            await connection.insertOne(dataInput);
            console.log("1 document inserted");
        } catch (e) {
            throw e;
        } finally {
            const posts = await getAllPosts();
            return posts;
        }
    });
};

const getAllPosts = () => {
    console.log(results);
    return connectMondo().then(async (db) => {
        const connection = await db.collection(process.env.Collection);

        const results = connection.find({}).limit(50).toArray();
        return results;
    });
}

const deletePosts = (id) => {
    return connectMondo().then(async (db) => {
        const connection = db.collection(process.env.Collection);

        try {
            const result = await connection.deleteOne({ _id: ObjectId(id) });
            console.log(`1 document deleted`);
            return result
        } catch (e) {
            throw e;
        } finally {
            const posts = await getAllPosts();
            return posts;
        }
    });
};

module.exports = {
    insertPost,
    getAllPosts,
    deletePosts
};