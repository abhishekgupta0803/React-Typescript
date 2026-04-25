const express = require("express");
const Post = require("../models/post");
const auth = require("../middlewares/auth");

const router = express.Router();


const create =    async (req, res) => {
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    userId: req.userId
  });
  

  res.json(post);
}




const getItems =     async (req, res) => {
  const posts = await Post.find({ userId: req.userId }) 
  res.json(posts);
}




const update =   async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    req.body,
    { new: true }
  );

  res.json(post);
}



const Deleted = async (req, res) => {
  await Post.findOneAndDelete({
    _id: req.params.id,
    userId: req.userId
  });

  res.json({ msg: "Deleted" });
}


module.exports = {Deleted ,update , getItems , create}