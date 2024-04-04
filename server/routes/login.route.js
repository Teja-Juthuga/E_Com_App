const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    try{
        console.log(req.body);
    }catch(err){
        res.send("Error: " + err); 
    }
})

module.exports = router;