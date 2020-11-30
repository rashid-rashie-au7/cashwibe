const Appln = require('../Models/ApplicationModel');
const Profile = require('../Models/ProfileModel');
const User = require('../Models/UserModel')
const nodemailer = require('nodemailer');
require("dotenv").config();

let ApplnController = {};

ApplnController.getAppln = async (req, res) => {
    let userid = req.params.userid;
    let userData = await User.findOne({ userid })
    let profileData = await Profile.findOne({ userid })
    let ApplnList = await Appln.find({userid,status:1})
    res.json({ user: userData, profile: profileData, appln: ApplnList }, 'reached here')
}

ApplnController.postAppln = async (req, res) => {
    let code,type,appid, apptype = req.params.type, userid = req.params.userid;

    if (apptype == 1) { 
        code = 'CWPL' 
        type = 'Personal Loan'}
    if (apptype == 2) { 
        code = 'CWHL' 
        type = 'Home Loan'}
    if (apptype == 3) { 
        code = 'CWCL' 
        type = 'Car Loan'}
    if (apptype == 4) { 
        code = 'CWCC'
        type = 'Credit Card' 
    }
    let LoanID = await Appln.find().sort({ applnid: -1 })

    if (LoanID.length == 0) { appid = code + '0000001' }
    else {
        let uid = Number(LoanID[0].applnid.slice(4, 11)) + 1
        if (uid <= 9999) { uid = ("000000" + uid).slice(-7); }
        appid = code + uid
    }
    applnData = new Appln({
        applnid: appid,
        applntype: apptype,
        userid,
        loanamt: req.body.loanamt,
        interest: req.body.interest,
        tenure: req.body.tenure,
        emi: req.body.emi,
        otherloan: req.body.otherloan,
        loandetails: req.body.loandetails
    });
    profileData = new Profile({
        userid,
        title: req.body.title,
        dob: req.body.dob,
        maritalstatus: req.body.maritalstatus,
        address: req.body.address,
        lane1: req.body.lane1,
        district: req.body.district,
        state: req.body.state,
        bank: req.body.bank,
        branch: req.body.branch,
        ifsc: req.body.ifsc,
        actype: req.body.actype,
        acno: req.body.acno,
        job: req.body.job,
        emptype: req.body.emptype,
        company: req.body.company,
        compnyadd: req.body.compnyadd,
        exp: req.body.exp,
        salary: req.body.salary
    });

    await applnData.save()
        .then(async(result) => {
            let profile = await Profile.findOne({ userid })
            if (!profile) {
                await profileData.save()
                    .then(result => {console.log('profile saved',result)})
                    .catch(err => {console.log('profile saved',err)});
            } else {
                await Profile.updateOne({ userid }, {
                    userid,
                    title: req.body.title,
                    dob: req.body.dob,
                    maritalstatus: req.body.maritalstatus,
                    address: req.body.address,
                    lane1: req.body.lane1,
                    district: req.body.district,
                    state: req.body.state,
                    bank: req.body.bank,
                    branch: req.body.branch,
                    ifsc: req.body.ifsc,
                    actype: req.body.actype,
                    acno: req.body.acno,
                    job: req.body.job,
                    emptype: req.body.emptype,
                    company: req.body.company,
                    compnyadd: req.body.compnyadd,
                    exp: req.body.exp,
                    salary: req.body.salary
                })
                    .then(result => {console.log('profile saved',result)})
                    .catch(err => {console.log('profile saved',err)});
            }
        },res.status(200).json({ message: 'Application saved Sucessfully' }))
        .catch(err => res.status(500).json(err));
    sendMail(req.body.fname, req.body.email, appid, type)
}

ApplnController.getUpdateAppln = async (req, res) => {
    let { userid, applnid } = req.params
    console.log('appid == ', applnid, '  userid == ', userid)
    let userData = await User.findOne({ userid });
    let profileData = await Profile.findOne({ userid });
    let ApplnData = await Appln.findOne({ applnid });
    return res.json({ user: userData, profile: profileData, appln: ApplnData })
}

ApplnController.updateAppln = async (req, res) => {
    let applnid = req.params.appid;
    let userid = req.params.userid;
    await Profile.update({ userid }, {
        title: req.body.title,
        dob: req.body.dob,
        maritalstatus: req.body.maritalstatus,
        address: req.body.address,
        lane1: req.body.lane1,
        district: req.body.district,
        state: req.body.state,
        bank: req.body.bank,
        branch: req.body.branch,
        ifsc: req.body.ifsc,
        actype: req.body.actype,
        acno: req.body.acno,
        job: req.body.job,
        emptype: req.body.emptype,
        company: req.body.company,
        compnyadd: req.body.compnyadd,
        exp: req.body.exp,
        salary: req.body.salary
    })
        .then(async(result) => {
            await Appln.update({ applnid }, {
                loanamt: req.body.loanamt,
                interest: req.body.interest,
                tenure: req.body.tenure,
                emi: req.body.emi,
                otherloan: req.body.otherloan,
                loandetails: req.body.loandetails
            })
                .then(result => {console.log('Applction updated',result)})
                .catch(err => {console.log('Error',err)});

        },res.status(200).json({ message: 'Data Updated Sucessfully'}))
        .catch(err => res.status(500).json(err));
}

ApplnController.deleteAppln = async (req, res) => {
    let applnid = req.params.applnid;
    await Appln.deleteOne({ applnid })
        .then(appln => {
            if (appln.deletedCount == 0) {
                return res.status(500).json({ message: ' Application not found' });
            } else {
                return res.status(200).json({ details: appln, message: ' Application Deleted' })
            }
        })
        .catch(error => console.log(error));

}

const sendMail = (name, email, applnid, type) => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cashwibe.helpdesk@gmail.com',
            pass: 'Cashwibe@123'
        }
    });
    var mailOptions = {
        from: 'cashwibe.helpdesk@gmail.com',
        to: email,
        subject: 'Loan Application',
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
                            <h2>Welcome To CASHWibe.com</h2>
                            <br>
                            <h4>Hey, ${name}</h4>
                            <br>
                            <p>You have successfully submitted an aplication for ${type} in CASHWibe account. Your application number is ${applnid}.</p>
                            <br>
                            <br>
                            <br>
                            <p>If you have any Queries feel free to us or visit our website for further details</p>
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


module.exports = ApplnController;





