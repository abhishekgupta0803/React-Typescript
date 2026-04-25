const BASE_URL = "http://localhost:8000/crude";

const getToken = () => localStorage.getItem("token");

// CREATE
export const createPost = async (data: any) => {
  const res = await fetch(`${BASE_URL}`, {   // ❗ removed /posts
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken() || ""
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

// READ
export const getPosts = async () => {
  const res = await fetch(`${BASE_URL}`, {   // ❗ removed /posts
    headers: {
      Authorization: getToken() || ""
    }
  });

  return res.json();
};

// DELETE
export const deletePost = async (id: string) => {
  await fetch(`${BASE_URL}/${id}`, {   // ❗ removed /posts
    method: "DELETE",
    headers: {
      Authorization: getToken() || ""
    }
  });
};