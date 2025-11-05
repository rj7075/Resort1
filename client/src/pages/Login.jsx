import React, { useState } from "react";
import api from "../lib/api";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", form);
      setUser(res.data.user);
      toast.success("Login Successful");
      navigate("/welcome");
    } catch (error) {
      setErr(error.response?.data?.message || "Error");
      toast.error("Login failed");
    }
  };

  return (
    <div className="max-w-md  mx-auto mt-12 p-6 m-10 border shadow rounded">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <input
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
        />
        {err && <div className="text-red-500">{err}</div>}
        <button className="w-full py-2 bg-blue-500 rounded text-white">
          Login
        </button>
      </form>
    </div>
  );
}
