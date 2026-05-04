const route = require("express").Router();
const {postCreate , posts} = require("../controllers/postController")


route.post("/create",postCreate);

route.get("/post",posts);

module.exports = route