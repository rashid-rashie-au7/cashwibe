const mongoose = require('mongoose');
const { defaultMaxListeners } = require('nodemailer/lib/mailer');


const Appln =mongoose.model(
    "applications", new mongoose.Schema({
        applnid: {
            type: String,
            required: true
        },
        applntype:{
            type:String,
            required:true
        },
        userid:{
            type:String,
            required:true
        },
        loanamt:{
            type:Number,
            required:true
        },
        interest:{
            type:Number,
            required:true
        },
        tenure:{
            type:Number,
            required:true
        },
        emi:{
            type:Number,
            required:true
        },
        active:{
            type:Number,
            default:1    //1= active, 0= inactive
        },
        status:{
            type:Number,
            default:1
            // if status = 0 Reject, 1 = Pending, 2 =  approved
        },
        reason:{
            type:String,
        },
        otherloan:{
            type:Number
        },
        loandetails:{
            type:String
        }
    },{timestamps:true,})
)

module.exports=Appln;