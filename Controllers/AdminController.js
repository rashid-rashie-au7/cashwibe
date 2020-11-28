require("dotenv").config();
const jwt = require('jsonwebtoken')
const Appln = require('../Models/ApplicationModel')
const User = require('../Models/UserModel');
const Profile = require('../Models/ProfileModel');
const Loan = require('../Models/LoanModel')


let adminController = {};

adminController.login = async (req, res) => {
    let { email, password } = req.body;

    if (email === process.env.EMAIL && password === process.env.PASSWORD) {
        const userType = "ADMIN";
        const token = jwt.sign({ usertype: userType }, process.env.JWT_SECRET)
        res.cookie("t", token, { expire: new Date() + 9999 });
        return res.json({ token })
    } else {
        res.json('invalid Credintials')
    }
}

adminController.listAppln = async (req, res) => {
    let applnData = await Appln.find({ status: 1 })
    if (!applnData) {
        res.json("There No Pending Applications")
    } else {
        let arr = [], userData
        for (let i = 0; i < applnData.length; i++) {
            userData = await User.findOne({ userid: applnData[i].userid })
            let p1 = {}, apptype = applnData[i].applntype, type
            if (apptype == 1) { type = 'Personal Loan' }
            if (apptype == 2) { type = 'Home Loan' }
            if (apptype == 3) { type = 'Car Loan' }
            if (apptype == 4) {
                type = 'Credit Card'
            }
            p1['appno'] = applnData[i].applnid
            p1['date'] = applnData[i].createdAt
            p1['type'] = type
            p1['name'] = userData.fname + " " + userData.lname
            p1['loanamt'] = applnData[i].loanamt
            arr.push(p1)
        }
        res.json(arr)
    }

}

adminController.viewAppln = async (req, res) => {
    let applnid = req.params.applnid, userData, profileData, applnData
    applnData = await Appln.findOne({ applnid })
    console.log(applnData)
    userData = await User.findOne({ userid: applnData.userid })
    profileData = await Profile.findOne({ userid: applnData.userid })
    res.json({ applnData, userData, profileData })
}


adminController.updateAppln = async (req, res) => {
    let aaplnid = req.params.applnid, Updated_status, reason;
    let applnData = await findOne({ applnid })
    let { status, loanamt, emi, tenure, comment, interest } = req.body

    if (status == 'Acceptted') {
        Updated_status = 1
        let code
        let LoanID = await Loan.find().sort({ loanid: -1 })

        if (!LoanID) { code = 'CWLN' + '0000001' }
        else {
            let uid = Number(LoanID[0].applnid.slice(4, 11)) + 1
            if (uid <= 9999999) { uid = ("000000" + uid).slice(-7); }
            code = 'CWLN'+uid
        }
        loanData = new Loan({
            loanid: code,
            applntype: applnData.applntype,
            userid:applnData.userid,
            loanapproved: loanamt,
            interest: interest,
            tenure: tenure,
            emi: emi,
            active: 0,
        });
        await loanData.save()
            .then(result => res.status(200).json({ message: 'Loan saved Sucessfully',result }))
            .catch(err => res.status(500).json(err));
    }
    if (status == 'Pending') {
        Updated_status = 1;
        reason = comment;

    }
    if (status == 'Rejected') {
        Updated_status = 1;
        reason = comment;
    }
    await Appln.update({ applnid }, {
        status: Updated_status,
        reason,
    })
    .then(result => res.status(200).json({ message: 'Application Updated Sucessfully',result }))
    .catch(err => res.status(500).json(err));

}

module.exports = adminController;