import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // your backend URL
});

// Automatically add token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Login function
export const loginUser = async (email, password) => {
  return API.post("/auth/login", { email, password });
};

// Fetch/create tasks
export const fetchTasks = async () => API.get("/tasks");
export const createTask = async (taskData) => API.post("/tasks", taskData);
