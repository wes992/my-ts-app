'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";


const AdminLoginPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await result.json();
    if (result.ok && data.success) {
      localStorage.setItem("admin-auth", "true");
      setError("");
      // Navigate to the admin page, if login is successful
      router.push("/admin");
    } else {
      // Handle login failure
      setError(data.error || "Login failed. Please try again.");
      setCredentials({ username: "", password: "" });
      localStorage.removeItem("admin-auth");
    }

  };


  return (
    <main className="p-8 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="text"
          placeholder="Enter admin username"
          value={credentials.username}
          onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          placeholder="Enter admin password"
          value={credentials.password}
          onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
          className="w-full p-2 border rounded"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Login
        </button>
      </form>
    </main>
  )
}

export default AdminLoginPage