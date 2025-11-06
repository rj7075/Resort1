import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL, // ✅ read from env
  withCredentials: true, // ✅ allow cookies for auth
});

export default api;
