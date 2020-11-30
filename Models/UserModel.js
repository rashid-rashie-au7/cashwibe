const mongoose = require('mongoose');


const User =mongoose.model(
    "users", new mongoose.Schema({
        userid: {
            type: String,
            required: true
        },
        fname:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        mob:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        type:{
            type:Number,
            default:1
        },
        verify:{
            type:Number,
            default: 0
        },
        otp:{
            type:Number
        },
        emailtoken:{
            type:String,
        },
        emailverify:{
            type:Number,
            default:0
        }    
    },{timestamps:true,})
)

module.exports=User;



