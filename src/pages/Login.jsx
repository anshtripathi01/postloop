import { useContext, useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useContext(AuthContext);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await api.post("/auth/login", form);
      localStorage.setItem("authToken", res.data.token);
      setIsLoggedIn(true);
      setUser(res.data.user);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
      
      <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Login</h2>
      <input className="border p-2 m-2 outline-none" placeholder="Email" name="email" onChange={handleChange} required />
      <input className="border p-2 m-2 outline-none" placeholder="Password" name="password" type="password" onChange={handleChange} required />

        <button type="submit" className="bg-amber-500 text-white px-10 py-2 rounded mt-3">
          Login
      </button>
      </form>
  );
}
