import api from "../api/axios";

export const fetchProjects = () => api.get("/projects");
export const createProject = (payload) => api.post("/projects", payload);
export const updateProject = (id, payload) => api.put(`/projects/${id}`, payload);
export const deleteProject = (id) => api.delete(`/projects/${id}`);
