import { useState } from "react";
// import api from "../api/api";
// import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const nav = useNavigate();

//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post("/auth/login", { email, password });
//       // cookie set by server; you can also fetch user info
//       nav("/dashboard");
//     } catch (err) {
//       alert(err?.response?.data?.message || "Login failed");
//     }
//   };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form onSubmit className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <input className="w-full p-2 border rounded mb-3" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded mb-3" placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="bg-amber-500 text-white px-4 py-2 rounded w-full">Login</button>
      </form>
    </div>
  );
}
