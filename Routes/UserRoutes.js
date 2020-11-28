var express = require('express');
var router = express.Router();
const userController  = require('../Controllers/UserController');
// const {userSignupValidator} = require('../validators/user.validation')

/* Get Register Page */
router.get('/register',userController.register)

/* POST Register  */
router.post('/register',userController.registerUser);

router.post('/verifyuser/:userid',userController.verifyUser);

router.post('/verifymail/:token',userController.verifyMail);

router.post('/login',userController.login);

module.exports= router