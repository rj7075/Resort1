import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // must match your backend
  withCredentials: true, // for cookies/auth
});

export default api;
