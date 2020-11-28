const mongoose = require('mongoose');


const Loan =mongoose.model(
    "loans", new mongoose.Schema({
        loanid: {
            type: String,
            required: true
        },
        userid:{
            type:String,
            required:true
        },
        applnid:{
            type:String,
            required:true
        },
        applntype:{
            type:Number,
            required:true
        },
        loanapproved:{
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
            default:1
        },
        active:{
            type:Number,
            default: 0
        },
        status:{
            type:Number,
            default:1   //reject 0 pending 1 approved 2
        },
        openingdate:{
            type:Date
        },
        closingdate:{
            type:Date
        } 
    },{timestamps:true,})
)

module.exports=Loan;