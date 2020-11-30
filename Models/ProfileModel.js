const mongoose = require('mongoose');


const Profile =mongoose.model(
    "profiles", new mongoose.Schema({
        userid: {
            type: String,
            required: true
        },
        title:{
            type:String,
            required:true
        },
        dob:{
            type:Date,
            required:true
        },
        maritalstatus:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        lane1:{
            type:String,
            required:true
        },
        district:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        bank:{
            type:String,
            required:true
        },
        branch:{
            type:String,
            required:true
        },
        ifsc:{
            type:String,
            required:true
        },
        actype:{
            type:String,
            required:true
        } ,
        acno:{
            type:Number,
            required:true
        }  ,
        job:{
            type:String,
            required:true
        }, 
        emptype:{
            type:String,
            required:true
        },
        company:{
            type:String,
            required:true
        },
        compnyadd:{
            type:String,
            required:true
        },
        exp:{
            type:String,
            required:true
        },
        salary:{
            type:Number,
            required:true
        }
    },{timestamps:true,})
)

module.exports=Profile;