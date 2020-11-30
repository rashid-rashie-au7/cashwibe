const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(`mongodb://localhost:27017/CashWibe`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.log("ERROR : ", err.message);
  });