import api from "../api/axios";

export const register = (data) => api.post("/auth/register", data);
export const login = (data) => api.post("/auth/login", data);
export const getMe = () => api.get("/auth/me"); // if you add an endpoint
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};
