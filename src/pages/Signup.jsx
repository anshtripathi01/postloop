import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await api.post("/auth/signup", form);
      console.log(res,"from server");
      
      localStorage.setItem("authToken", res.data.token);
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Create your account</h2>
      <input className="border p-2 m-2 outline-none rounded-md" placeholder="Name" name="name" onChange={handleChange} required />
      <input className="border p-2 m-2 outline-none rounded-md" placeholder="Email" name="email" onChange={handleChange} required />
      <input className="border p-2 m-2 outline-none rounded-md" placeholder="Password" name="password" type="password" onChange={handleChange} required />

      <button type="submit" className="bg-amber-500 text-white px-10 py-2 rounded mt-3">
        Signup
      </button>
    </form>
  );
}
