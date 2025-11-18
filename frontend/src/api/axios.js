import axios from "../api/axios";

// Create an axios instance
const api = axios.create({
  baseURL: "http://localhost:5000/api", // backend URL
});

export default api;
