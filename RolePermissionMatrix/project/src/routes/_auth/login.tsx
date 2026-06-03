import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { login } from "../../api";
import { useAuth } from "../../context/AuthContext";

export const Route = createFileRoute("/_auth/login")({
  component: RouteComponent,
});

function RouteComponent() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {  login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username) return alert("Invalid credentials");
    const user = await login(username, password);

    if (user) {
      // console.log("Logged in user:", user);
      authLogin(user);
      navigate({ to: "/dashboard" });
    } else {
      alert("Invalid crendentials");
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white p-6 rounded shadow"
      >
        {/* Username */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Username</label>
          <input
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            className="w-full border rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
