const express = require("express");
const router = express.Router();

const bcrypt = require('bcrypt');

const {connectDB} = require('../database/connectDB');

const main = async (userDetails) => {
    const connection = await connectDB();
    const collection = connection.collection("users");
    const dbUser = await collection.findOne({emailId : userDetails.userEmail});
    if (dbUser === undefined){
        return "Invalid User";
    }else {
        const isPasswordMatched = await bcrypt.compare(userDetails.password, dbUser.password);
        if (isPasswordMatched === true) {
            return "Login Success!";
          } else {
            return "Invalid Password";
          }
    }
};

router.post("/", async (req, res) => {
    try{
        // console.log(req.body);
        const result = await main(req.body);
        console.log(result);
        if (result){
            res.status(400).send("Invaild Credentails");
        }
        else {
            res.status(200).send("Authorised user")
        }
    }catch(err){
        res.send("Error: " + err);
    }
})

module.exports = router;