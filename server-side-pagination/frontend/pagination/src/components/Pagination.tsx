import { useEffect, useState } from "react";
import axios from "axios";
import type { PageData } from "./pages.types";

const Pagination = () => {
  const [data, setData] = useState<PageData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const Api_url = "http://localhost:8080/api/post";

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);

        const response = await axios.get(Api_url, {
          params: {
            page: currentPage,
          },
        });


        setData(response.data.posts || []);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        setError("Something went wrong");
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, [currentPage]);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3>{error}</h3>;

  return (
    <div>
      <h2>Posts</h2>

      {/* POSTS */}
      {data.map((item) => (
        <div key={item._id}>
          <h3>{item.postTitle}</h3>
          <p>{item.postDiscription}</p>
        </div>
      ))}

      {/* PAGINATION */}
      <div>
        {/* PREV */}
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev) => Math.max(prev - 1, 1))
          }
        >
          Prev
        </button>

        {/* PAGE BUTTONS */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            style={{
              fontWeight:
                currentPage === index + 1
                  ? "bold"
                  : "normal",
            }}
          >
            {index + 1}
          </button>
        ))}

        {/* NEXT */}
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev) =>
              Math.min(prev + 1, totalPages)
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;