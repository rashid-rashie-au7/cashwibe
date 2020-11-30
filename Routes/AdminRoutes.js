var express = require('express');
var router = express.Router();
const adminController= require('../Controllers/AdminController')


router.post('/login',adminController.login);

router.get('/application/list',adminController.listAppln)

router.get('/application/view/:applnid',adminController.viewAppln)

module.exports = router