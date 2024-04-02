const express = require('express');

const app = express();

const dbConnection = mongoose.connect("mongodb+srv://teja_071199:test@atlascluster.a4vovbu.mongodb.net/")

dbConnection.then(() => {
    console.log("Database connection configured successfully!")
})


app.use(express.json());



app.listen(8081, () => {
    console.log("server is Listening at http://localhost:8081");
})