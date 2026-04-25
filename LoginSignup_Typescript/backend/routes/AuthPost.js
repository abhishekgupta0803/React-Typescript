const Auth =  require("../middlewares/auth");
const {create , update ,getItems , Deleted} = require("../controllers/PostControllers")
const Route = require("express").Router();


Route.post("/" ,Auth , create);
Route.get("/" ,Auth , getItems);
Route.put("/:id" ,Auth , update);
Route.delete("/:id" ,Auth ,Deleted);

module.exports = Route;