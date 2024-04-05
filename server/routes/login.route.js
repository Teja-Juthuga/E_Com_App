const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const { connectDB } = require("../database/connectDB");
const collectionName = "users";

const main = async (userDetails) => {
    const db = await connectDB();
    const collection = db.collection(collectionName);
    const user = await collection
        .find({ emailid: userDetails.userEmail })
        .toArray();
    if (user[0] == undefined) {
        return "Invaild User";
    } else {
        const isPasswordMatched = await bcrypt.compare(userDetails.userPassword, user[0]['password']);
        if (isPasswordMatched === true) {
            return "Login Success!"
        } else {
            return "Invalid Password"
        }
    }
};

router.post("/", async (req, res) => {
    try {
        const result = await main(req.body);
        console.log(result);
        res.send(result);
    } catch (err) {
        console.log("+++Error:- " + err);
        res.send("Error: " + err);
    }
});

module.exports = router;
