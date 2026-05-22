import { useOptimistic, useState, startTransition } from "react";
import { likePostAPI, type Post } from "./api";

const initialPosts: Post[] = [
  { id: 1, title: "React is awesome", likes: 0 },
  { id: 2, title: "Optimistic UI", likes: 2 },
];

export default function App() {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [error, setError] = useState<string | null>(null);

  // 1. useOptimistic hook
  const [optimisticPosts, addOptimisticLike] = useOptimistic(
    posts,
    (state, postId: number) => {
       
      return state.map((p) =>
        p.id === postId ? { ...p, likes: p.likes + 1 } : p
      );
    }
  );

  const handleLike = (postId: number) => {
    setError(null);

    // 2. optimistic update immediately
    startTransition(() => {
      addOptimisticLike(postId);
    });

    // 3. server call
    likePostAPI(postId)
      .then(() => {
        // success → update real state (sync)
        setPosts((prev) =>
          prev.map((p) =>
            p.id === postId ? { ...p, likes: p.likes + 1 } : p
          )
        );
      })
      .catch(() => {
        // failure → refresh real state (rollback effect)
        setError("Like failed! Re-syncing...");
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>useOptimistic Like Demo</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {optimisticPosts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid gray",
            padding: 10,
            marginBottom: 10,
          }}
        >
          <h3>{post.title}</h3>

          <button onClick={() => handleLike(post.id)}>
            ❤️ Like ({post.likes})
          </button>
        </div>
      ))}
    </div>
  );
}