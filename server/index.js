const express = require('express');

const app = express();


app.use(express.json());

app.get("/RegisterUser", (req,res) => {
    try{
        res.send("Hitted url Successfully!");
    }
    catch(err){
        console.log("Error: " + err);
    }
})


app.listen(8081, () => {
    console.log("server is Listening at http://localhost:8081");
})