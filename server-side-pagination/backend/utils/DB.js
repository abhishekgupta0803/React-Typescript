const mongoose = require("mongoose");

mongoose.connect(process.env.URL).then(()=> console.log("MongoDb is Connected"))
.catch((error)=>console.log(error));

module.exports = mongoose;