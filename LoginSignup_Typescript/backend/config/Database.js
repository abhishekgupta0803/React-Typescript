const mongoose = require("mongoose");

mongoose.connect(process.env.LocalDatabase).then(()=>{
    console.log("DataBase is Connected")
}).catch((error)=>{
    console.log(error)
})

module.exports;