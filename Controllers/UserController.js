let bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
let User = require('../Models/UserModel');
const Vonage = require('@vonage/server-sdk')
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
require("dotenv").config();

let userController = {}

userController.register = async (req, res) => {
}

userController.registerUser = async (req, res) => {
    let usr_id
    let Userid = await User.find().sort({ userid: -1 })
    if (Userid.length == 0) {
        usr_id = 'USR0001';
    } else {
        let uid = Number(Userid[0].userid.slice(3, 7)) + 1
        if (uid <= 9999) { uid = ("000" + uid).slice(-4); }
        usr_id = 'USR' + uid
    }
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(req.body.password, salt)
    let otp = otpGenerator.generate(6, { alphabets: false, upperCase: false, specialChars: false });
    let id = { userid: usr_id };
    const emailtoken = jwt.sign(id, process.env.JWT_SECRET);

    data = new User({
        userid: usr_id,
        fname: (req.body.fname).charAt(0).toUpperCase() + (req.body.fname).slice(1),
        lname: (req.body.lname).charAt(0).toUpperCase() + (req.body.lname).slice(1),
        email: req.body.email,
        mob: req.body.mob,
        password: hashPass,
        otp,
        emailtoken,

    });
    await data.save();
    // sendOTP(req.body.mob, otp)
    sendMail(req.body.fname,req.body.email,emailtoken)
}

const sendMail = (name,email,token) => {
    let API = 'http://localhost:3001/verifymail/'
    let link = API+token;
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    });
    var mailOptions = {
        from: 'cashwibe.helpdesk@gmail.com',
        to: email,
        subject: 'Email verification',
        html: `<style>
        p{
            font-size: 16px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center;
        }
        h5{
            font-size: larger;
            font-family: Georgia, 'Times New Roman', Times, serif;
        }
        .grid-container{
            display: grid;
            grid-template-areas: "header"
            "main"
            "footer";
            grid-template-rows: 5rem 1fr 5rem;
            grid-template-columns: 1fr;
            height: 100% ;
        }
          main{
            grid-area: main;
          }
          footer{
            grid-area: footer; 
            background-color: teal;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        header{
            grid-area: header;
            color: darkmagenta;
            align-items: center;
        }
          .content{
            display: flex;
            flex-wrap: wrap;
          }
          .main{
            flex: 3 60rem;
          }
          .btn-container{
              width: 100%;
              height: 100px;
              text-align: center;
          }
          .btn{
              width: 250px;
              height: 60px;
              border-radius: 3px;
              box-shadow: 2px 4px 8px 0 rgba(0.1, 0, 0, 0.4);
              background-color:#98144d ;
              color: #ffffff;
              font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
              padding-top: 35px;
              margin: auto;
              justify-content: center;
            }
            .btn:hover{
                box-shadow: 2px 4px 8px 0 rgba(0.1, 0, 0, 0.6);
              background-color:#e70e6c ;
            }
        
        </style>
        <body>
            <div className="grid-container">
                <header>
                    <div><img src="" alt="logo"></div>
                    <div><h1>CASHWibe</h1></div>
                </header>
                <main>
                    <div className="content">
                        <div className="main">
                            <h3>Welcome To CASHWibe.com</h3>
                            <br>
                            <h5>Hey, ${name}</h5>
                            <br>
                            <p>You have successfully created a CASHWibe account. Please click on the button below to verify your email address.</p>
                            <br>
                            <br>
                            <div class="btn-container">
                                <div class="btn">${link}</div>
                            </div>
                            <br>
                            <p>You have successfully created a CASHWibe account. Please click on the button below to verify your email address.</p>
                        </div>
                    </div>
                </main>
        </body>`
       }
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

}

const sendOTP = (mob, otp) => {
    const vonage = new Vonage({
        apiKey: '11c78e50',
        apiSecret: '4rrj4ny0dx6AgzVQ',
    })
    const from = 'CASHWibe';
    const to = '91' + mob;
    console.log(typeof to, "to adress ==  ", to)
    const text = otp + " is your OTP to Verify your CASHWibe Acoount";

    vonage.message.sendSms(from, to, text, (err, responseData) => {
        if (err) {
            console.log(err);
        } else {
            if (responseData.messages[0]['status'] === "0") {
                console.log("Message sent successfully.");
            } else {
                console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
            }
        }
    })

}

userController.verifyUser = async (req, res) => {
    otp = req.body.otp;
    userid = req.params.userid;
    console.log("otp ===== ", otp, "user ===  ", userid)
    await User.findOneAndUpdate({ userid, otp }, { verify: 1 }, { new: true }, (err, responseData) => {
        if (err) {
            return res.json(err)
        } else {
            return res.json("Number Verified")
        }
    })
}

userController.verifyMail = async (req,res) => {
    let token = req.params.token;
    let decoded = jwt.verify(token,process.env.JWT_SECRET );
    let userId = decoded.userid;
    console.log('userudd== ',userId )
    let dateNow = new Date();
    let tokenTime = decoded.iat * 1000;
    let hours = 2;
    let tokenLife = hours * 60 * 1000;
    if (tokenTime + tokenLife < dateNow.getTime())
    {   
        return res.json("Link Expired")
    }else{
        await User.findOneAndUpdate({userid:userId}, {emailverify: 1}, { new: true }, (err, responseData) => {
            if (err) {
                return res.json(err)
            } else {
                return res.json(`Email verified`)
            }
        })

    } 
}

userController.login = async (req,res) =>{
    let email = req.body.email;
    let Usrdata = await User.findOne({email});
    if(!Usrdata){
        res.json(`User doesn't Exists`)
    }else{
        if(Usrdata.emailverify == 0){
            res.json(`Your Email is Not Verified`)
        }else if(Usrdata.verify == 0){
            res.json(`Your Mobile Number is Not Verified`)
        }else{
            const {userid,email,fname} = Usrdata;
            console.log('userr ==  ',Usrdata);
            const token = jwt.sign({userid:Usrdata.userid},process.env.JWT_SECRET)
            console.log('token ==  ',token);
            res.cookie("t",token,{expire:new Date()+9999});
            req.profile = Usrdata
            return res.json({token,Usrdata:{userid,email,fname}})
        }
    }
    
}



module.exports = userController;

