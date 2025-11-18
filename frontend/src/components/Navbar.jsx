import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#eee" }}>
      <Link to="/">Dashboard</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </nav>
  );
}
