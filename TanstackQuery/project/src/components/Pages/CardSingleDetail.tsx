import { useQuery } from "@tanstack/react-query";
import { getIdPost } from "../../api";
import { useParams } from "react-router-dom";

//dynamic page reactquery
type Post = {
  id: number;
  title: string;
  body: string;
};

const CardSingleDetail = () => {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery<Post | null>({
    queryKey: ["post", id],
    queryFn: () => getIdPost(String(id)),
  });

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div style={{ textAlign: "center", padding: "40px", color: "#6b7280" }}>
        Error fetching data.
      </div>
    );
  }

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "10px",
        marginBottom: "16px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1>dynamic page ReactQuery</h1>
      <h3>ID: {data?.id}</h3>
      <h2>{data?.title}</h2>
      <p>{data?.body}</p>

      <p>Hello</p>
    </div>
  );
};

export default CardSingleDetail;
