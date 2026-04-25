const express = require("express");
const app = express();
require('dotenv').config();
require("../backend/config/Database")
const cors = require("cors");
const bodyParser = require("body-parser")
const AuthRoute = require("./routes/Authroutes")
const RoutePost = require("./routes/AuthPost")


app.get("/test",(req,res)=>{

   
    res.send("App is running")
})


app.use(bodyParser.json());
app.use(cors());

app.use("/auth", AuthRoute)
app.use("/crude", RoutePost)

const port = process.env.PORT || 8080;

app.listen(port ,()=>{
    console.log(`App is Listening on port ${port}` )
})