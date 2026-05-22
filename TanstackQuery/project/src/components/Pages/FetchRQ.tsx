import React, { useState } from "react";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteBtn, getPosts, UpdateBtn } from "../../api";
import { NavLink } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  body: string;
};

//react query fetch api example
const FetchRQ: React.FC = () => {
  const queryClient = useQueryClient();

  {
    /* pagination */
  }
  const [pagenumber, SetPageNumber] = useState<number>(0);

  const { data, isLoading, isError } = useQuery<Post[]>({
    queryKey: ["posts", pagenumber],
    queryFn: () => getPosts(pagenumber),
    // refetchInterval:5000,
    // refetchIntervalInBackground:true,
    placeholderData: keepPreviousData,
  });

  //delete

  const deleteMutate = useMutation({
    mutationFn: (id: number) => deleteBtn(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(
        ["posts", pagenumber],
        (curElem: Post[] | undefined) => {
          return curElem?.filter((post: Post) => post.id !== id);
        },
      );
    },
  });

  //update
  const updateMutate = useMutation({
    mutationFn: (id: number) => UpdateBtn(id),

    onSuccess: (apiData, postid) => {
      queryClient.setQueryData(
        ["posts", pagenumber],

        (postData: Post[] | undefined) => {
          return postData?.map((curPost) =>
            curPost.id === postid
              ? { ...curPost, title: apiData.title }
              : curPost,
          );
        },
      );
      console.log(apiData.title)
    },
  });

  //loading and error states
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
        height: "80vh",
        overflowY: "auto",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      {data?.map((post) => (
        <div>
          <NavLink key={post.id} to={`/rq/${post.id}`}>
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
              <span>{post.id}</span>
              <h3 style={{ marginBottom: "8px", color: "#111827" }}>
                {post?.title}
              </h3>

              <p style={{ color: "#4b5563", lineHeight: "1.5" }}>
                {post?.body}
              </p>
            </div>
          </NavLink>
          <button onClick={() => deleteMutate.mutate(post.id)}>Delete</button>
          <button onClick={() => updateMutate.mutate(post.id)}>Update</button>
        </div>
      ))}
      {/* pagination */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <button
          disabled={pagenumber === 0 ? true : false}
          onClick={() => SetPageNumber((prev) => prev - 3)}
          style={{ backgroundColor: "#1E293B", color: "white", width: "100px" }}
        >
          Prev
        </button>
        <span style={{ fontSize: "19px" }}>
          {Math.floor(pagenumber / 3) + 1}
        </span>
        <button
          disabled={data?.length === 0}
          onClick={() => SetPageNumber((prev) => prev + 3)}
          style={{ backgroundColor: "#1E293B", color: "white", width: "100px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default FetchRQ;
