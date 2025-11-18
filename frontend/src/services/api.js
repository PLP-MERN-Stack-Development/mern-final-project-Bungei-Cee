import axios from "axios";

// Base URL of your backend API
const api = axios.create({
  baseURL: "http://localhost:5000/api", // Update if your backend runs on a different port
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: Add request interceptor to include token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token"); // Store JWT in localStorage after login
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
