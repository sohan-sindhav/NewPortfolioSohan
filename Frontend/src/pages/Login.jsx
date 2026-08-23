import { useState } from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await axios.post("/auth/login", form);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials. Please verify username and password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-obsidian-950 bg-radial-gradient text-gray-200 relative overflow-hidden">
      {/* Glow ambient background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-sm p-8 glass-card rounded-2xl border border-white/[0.08] shadow-2xl relative z-10">
        <div className="text-center mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-xs text-primary-400 hover:text-primary-300 transition-colors font-mono"
          >
            <span>←</span>
            <span>Back to sohann.codes</span>
          </Link>
          <h1 className="text-2xl font-bold mt-4 text-white tracking-tight">Admin Console</h1>
          <p className="text-xs text-gray-400 mt-1">
            Authenticate to manage portfolio projects
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 text-red-300 text-xs rounded-xl flex items-start gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1.5">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder=""
              value={form.username}
              onChange={handleChange}
              required
              className="w-full p-2.5 bg-obsidian-900/90 border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-mono text-gray-300 mb-1.5">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="••••"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-2.5 bg-obsidian-900/90 border border-white/[0.08] rounded-xl text-white text-sm focus:outline-none focus:border-primary-500 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-obsidian-950 font-bold py-2.5 px-4 rounded-xl shadow-glow transition-all disabled:opacity-50 text-sm"
          >
            {loading ? "Authenticating..." : "Sign In to Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}
