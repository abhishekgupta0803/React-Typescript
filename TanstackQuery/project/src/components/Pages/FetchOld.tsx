import { useEffect, useState } from "react";
import { getPosts } from "../../api";

type Data = {
  id: number;
  title: string;
  body: string;
};

const FetchOld = () => {
  const [data, setData] = useState<Data[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);



  useEffect(() => {
      
    fetchData();

  }, []);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await getPosts();
      setData(res);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  

  if (loading)
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>
    );
  if (error)
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
        Error fetching data.
      </div>
    );

  return (
    <div
      style={{
        height: "80vh",
        overflowY: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {data?.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "12px",
            padding: "16px",
            backgroundColor: "#f9fafb",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ marginBottom: "8px", color: "#111827" }}>
            {post.title}
          </h3>

          <p style={{ color: "#4b5563", lineHeight: "1.5" }}>{post.body}</p>
        </div>
      ))}
    </div>
  );
};
export default FetchOld;
