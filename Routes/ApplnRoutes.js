var express = require('express');
var router = express.Router();
const applnController = require('../Controllers/ApplicationController');

router.get('/forms/:userid',applnController.getAppln);

router.post('/forms/:userid/:type',applnController.postAppln);

router.get('/updateform/:applnid/:userid',applnController.getUpdateAppln);

router.post('/updateform/:applnid/:userid',applnController.updateAppln);

router.delete('/delete/application/:applnid',applnController.deleteAppln);

module.exports= router