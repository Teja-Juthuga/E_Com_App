const express = require('express');
const router = express.Router();

const {connectDB} = require('../database/connectDB');

router.use(express.json());

const main = async (userDetails) => {
    console.log("main() " + JSON.stringify(userDetails));
    const connection = await connectDB();
    const collection = connection.collection("users");
    const result = await collection.insertOne(userDetails);
    return result;
};

router.post('/', async (req, res) => {
    try{
        // console.log(req.body);
        const result = await main(req.body);
        if (result.insertedId){
            res.status(200).send('User Signed up Successfully!');
        }
    }catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).send("Internal Error");
    }
})

module.exports = router;