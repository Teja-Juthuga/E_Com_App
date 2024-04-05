const express = require("express");
var cors = require('cors');

const UserSignup = require("./routes/signup.route");
const UserLogin = require("./routes/login.route");

const app = express();
app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//   ============= Routes Configuration =============
app.use("/Signup", UserSignup);
app.use("/Login", UserLogin);


app.listen(8081, () => {
    console.log("Server is running at http://localhost:8081");
});
