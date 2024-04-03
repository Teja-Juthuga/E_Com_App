const express = require("express");
var cors = require('cors');

const UserSignup = require("./routes/signup.route");


const app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//   ============= Routes Configuration =============
app.use("/Signup", UserSignup);


app.listen(8081, () => {
    console.log("server is Listening at http://localhost:8081");
});
