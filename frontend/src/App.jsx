import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import Tasks from "./Pages/Tasks";

function Private({ children }) {
  const user = localStorage.getItem("user");
  return user ? children : <Navigate to="/login" replace />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <div style={{ padding: "1rem" }}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Private><Dashboard /></Private>} />
            <Route path="/projects" element={<Private><Projects /></Private>} />
            <Route path="/tasks" element={<Private><Tasks /></Private>} />
          </Routes>
        </div>
        <Toaster position="top-right" />
      </BrowserRouter>
    </AuthProvider>
  );
}
