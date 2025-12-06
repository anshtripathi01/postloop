import { createContext, useState, useEffect } from "react";

// Create context
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // On mount, check localStorage token safely
  useEffect(() => {
    const timer = setTimeout(() => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(!!token);
    }, 0);

    return () => clearTimeout(timer); // cleanup
  }, []);

  // Listen to storage events (cross-tab sync)
  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem("authToken");
      setIsLoggedIn(prev => (prev !== !!token ? !!token : prev));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext };
