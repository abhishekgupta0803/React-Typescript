const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    postTitle:{
        type:String,
        required:true,

    },
    postDiscription:{
        type:String,
        required:true,

    },
})

const PostsModel = mongoose.model("PostsModel" ,PostSchema );

module.exports = PostsModel;