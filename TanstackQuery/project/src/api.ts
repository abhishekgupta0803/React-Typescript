import axios from "axios";

type Post = {
  id: number;
  title: string;
  body: string;
};

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

 
export const getPosts = async (pagenumber:number) => {
  {/* pagination */}
  const res = await api.get<Post[]>(`/posts?_start=${pagenumber}&_limit=3`);
  return res.status === 200 ? (res.data as Post[]) : [];
};


//dynamic page reactquery
type SinglePost = {
  id: number;
  title: string;
  body: string;
};

export const getIdPost = async (id: string) => {
  try {
    const res = await api.get<SinglePost>(`/posts/${id}`);
    return res.status === 200 ? (res.data as SinglePost) : null;
  } catch (err) {
    console.log(err);
    return null;
  }
};



//delete post
export const deleteBtn = async (id:number)=>{
  const res = await api.delete(`/posts/${id}`);
  console.log(res);
  return res.status === 200 ? true : false;
}

//update post
export const UpdateBtn = async (id:number)=>{
  const res = await api.patch(`/posts/${id}`,{title:"New Title Added by UpdateBtn"});
  return res.status === 200 ? res.data : null;
}

//infinite scrolling

export const fetchUsers = async({pageParam = 1})=>{

  try{
    const res = await axios.get(
      `https://api.github.com/users?per_page=10&page=${pageParam}`
    );

    return res.data;

  }catch(error){

   return console.log(error);


  }

}