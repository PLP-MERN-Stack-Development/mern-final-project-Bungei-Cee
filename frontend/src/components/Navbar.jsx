import React from "react";

export default function Navbar({ onLogout }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">TaskFlow</h1>
      <button
        onClick={onLogout}
        className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </nav>
  );
}
