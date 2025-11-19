import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    // Fake login check
    if (email === "bungeicynthia@gmail.com" && password === "12345") {
      const fakeUser = { name: "Cynthia", email };
      localStorage.setItem("user", JSON.stringify(fakeUser));
      setUser(fakeUser);
      return { success: true };
    } else {
      return { success: false, message: "Invalid email or password" };
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated: !!user, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
