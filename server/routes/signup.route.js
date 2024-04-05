const express = require('express');
const router = express.Router();

const {connectDB} = require('../database/connectDB');

const main = async (userDetails) => {
    //console.log("main() " + JSON.stringify(userDetails));
    const connection = await connectDB();
    const collection = connection.collection("users");
    delete userDetails.confirmPassword;
    let checkUser = await collection.findOne({emailid : userDetails.emailid})
    
    // console.log({emailid : userDetails.emailid});
    
    if (checkUser){
        return "User Already Exist! Please try Signin."
    }
    else{
        const result = await collection.insertOne(userDetails);
        return result;
    }
    
};

router.post('/', async (req, res) => {
    try{
        const result = await main(req.body);
        if (result.insertedId){
            res.status(200).send('User Signed up Successfully!');   
        }else{
            res.send(result);
        }
        
    }catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).send("Internal Error");
    }
})

module.exports = router;