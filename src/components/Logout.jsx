import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function LogoutButton() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  if (!context) {
    console.error("AuthContext is missing. Wrap your app with <AuthProvider>");
    return null;
  }

  const { setIsLoggedIn } = context;

  const handleLogout = () => {
    // Remove token from localStorage
    localStorage.removeItem("authToken");

    // Update auth state to trigger immediate UI update
    setIsLoggedIn(false);

    // Redirect to login
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
    >
      Logout
    </button>
  );
}
