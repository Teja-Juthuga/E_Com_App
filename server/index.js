const express = require('express');
const mongoose = require("mongoose");

const app = express();

const dbConnection = mongoose.connect("mongodb+srv://teja_071199:test@atlascluster.a4vovbu.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster")

dbConnection.then(() => {
    console.log("Database connection configured successfully!")
})


app.post("/RegisterUser", (req,res) => {
    
})


app.listen(8081, () => {
    console.log("server is Listening at http://localhost:8081");
})