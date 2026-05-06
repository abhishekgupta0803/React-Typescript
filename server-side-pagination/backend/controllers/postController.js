const PostDb = require("../models/UserPosts");

const postCreate = async (req, res) => {
  try {
    // console.log(data);
    const {postTitle , postDiscription} = req.body;
    const posts = new  PostDb({postTitle , postDiscription});

    if (!posts) {
      return res.status(404).json({ message: "Post data not found" });
    }

   await posts.save();
    return res.status(200).json({ message: " Data successfuly Created" });
  } catch (err) {
    console.log(err); // full error in terminal

    res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  }
};

//api create using pagination logic

const posts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = 5;
    const totalPosts = await PostDb.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    //Restriction

    if (page > totalPages) {
      return res.status(404).json({ message: "Page not Found" });
    }

    const posts = await PostDb.find()
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

      return res.status(200).json({posts , totalPages , page ,perPage})
  }   catch (error) {
      res.status(400).json({
      message: err.message,
      errors: err.errors,
    });
  }
};

module.exports = { postCreate  , posts};
