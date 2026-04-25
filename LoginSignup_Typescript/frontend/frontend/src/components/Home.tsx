import { useEffect, useState } from "react";
import { createPost, getPosts, deletePost } from "../PostApi";
import { useNavigate } from "react-router-dom";

type Post = {
  _id: string;
  title: string;
  content: string;
  userId: string;
};

export default function Dashboard() {
  const navigate = useNavigate();

  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔐 check auth on load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      loadPosts();
    }
  }, []);

  // 📥 fetch posts
  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error("Error fetching posts", err);
      alert("Failed to load posts");
    } finally {
      setLoading(false);
    }
  };

  // ➕ create post
  const handleCreate = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createPost({ title, content });
      setTitle("");
      setContent("");
      loadPosts();
    } catch (err) {
      console.error("Create error", err);
      alert("Failed to create post");
    }
  };

  // ❌ delete post
  const handleDelete = async (id: string) => {
    try {
      await deletePost(id);
      loadPosts();
    } catch (err) {
      console.error("Delete error", err);
      alert("Failed to delete post");
    }
  };

  // 🚪 logout
  const logoutHandel = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <h2>My Posts</h2>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />

      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />

      <button onClick={handleCreate}>Add</button>
      <button onClick={logoutHandel}>Logout</button>

      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((p) => (
          <div key={p._id}>
            <h3>{p.title}</h3>
            <p>{p.content}</p>
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}