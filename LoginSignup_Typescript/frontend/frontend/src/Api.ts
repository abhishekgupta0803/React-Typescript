import axios from "axios";

 const data = axios.create({
    baseURL : "http://localhost:8000/auth"
});


export default data;