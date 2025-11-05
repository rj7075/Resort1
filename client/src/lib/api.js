import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // must match your backend
  withCredentials: true, // for cookies/auth
});

export default api;
