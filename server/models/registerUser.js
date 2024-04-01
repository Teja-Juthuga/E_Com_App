const mongoose = require("mongoose");

const userRegistration = mongoose.Schema({
    "firstName":{
        "type": String,
        "required" : true 
    },
    "LastName":{
        "type": String,
        "required" : true 
    },
    "emailId":{
        "type": String,
        "required" : true,
        "unique": true
    },
    "contactNumber":{
        "type" : Number,
        "required": true
    },
    "password" :{
        'type' : String,
        'required': true
    },
    'confirmPassword' :{
        'type' : String,
        'required' : true
    }
})

const schema =  mongoose.Model("UserRegistration", userRegistration)

module.exports = schema;