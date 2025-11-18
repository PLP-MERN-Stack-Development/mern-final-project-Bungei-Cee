import api from "../api/axios";

export const fetchTasks = () => api.get("/tasks");
export const createTask = (payload) => api.post("/tasks", payload);
export const updateTask = (id, payload) => api.put(`/tasks/${id}`, payload);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);
export const fetchTask = (id) => api.get(`/tasks/${id}`);
