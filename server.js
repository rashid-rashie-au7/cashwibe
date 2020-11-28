const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Routes/UserRoutes');
const Applnrouter = require('./Routes/ApplnRoutes');
const AdminRoutes = require('./Routes/AdminRoutes');
require("./config/db");

const app = express();
app.use(bodyParser.json());

app.use('/',router);
app.use('/',Applnrouter);
app.use('/admin/',AdminRoutes);

app.listen(3001,()=>
    console.log("Server Connected")
)