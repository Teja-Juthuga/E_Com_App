const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try{
        console.log(req.body);
        res.status(200).send('User Signed up Successfully!');
    }catch (err) {
        console.log(`Error: ${err}`);
        res.status(500).send("Internal Error");
    }
})

module.exports = router;