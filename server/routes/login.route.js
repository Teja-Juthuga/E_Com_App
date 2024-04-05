const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const { connectDB } = require("../database/connectDB");
const collectionName = "users";
const main = async (userDetails) => {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    let obj = { "email": userDetails.userEmail };
    const dbUser = await collection.find(obj).toArray();
    console.log(dbUser);    
    return dbUser;
};

router.post("/", async (req, res) => {
    try {
        const result = await main(req.body);
        res.send(result);
    } catch (err) {
        console.log("+++Error:- " + err);
        res.send("Error: " + err);
    }
});

module.exports = router;
