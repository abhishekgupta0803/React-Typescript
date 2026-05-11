import { MessageCircle, ThumbsUp } from "lucide-react";
import React from "react";

const PopularBlogs = () => {
  const blogs = [
    {
      author: "John",
      likes: 153,
      comments: 25,
    },
    {
      title: "My Amazing Blog Title 4",
      author: "Huxn",
      likes: 50,
      comments: 14,
    },
    {
      author: "John",
      likes: 153,
      comments: 25,
    },
    {
      title: "My Amazing Blog Title 4",
      author: "Huxn",
      likes: 50,
      comments: 14,
    },
  ];
  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blogs, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blogs.title}</span>
            </div>
            <span className="text-gray-600 ">Publish by{blogs.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blogs.likes}</span>

              <ThumbsUp size={16} />
              <span className="text-gray-500 mr-2 ml-2">{blogs.comments}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
