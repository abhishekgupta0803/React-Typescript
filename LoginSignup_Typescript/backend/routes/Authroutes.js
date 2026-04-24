const {login,signup} = require("../controllers/AuthControllers")
const {loginvalidation,signupvalidation} = require("../middlewares/Authmiddleware")
const Route = require("express").Router()

Route.post("/login",loginvalidation, login )
Route.post("/signup",signupvalidation , signup)


module.exports = Route