// components/AdminDashboard.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAuth = async () => {
      try {
        const response = await fetch("http://localhost:5000/verify", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Not authenticated");
        }

        const { user } = await response.json();
        setUser(user);
      } catch (error) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    verifyAuth();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/admin/logout", {
        method: "POST",
        credentials: "include",
      });
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-400">
            Admin Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            {user && (
              <>
                <span className="text-gray-300">Welcome, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-6 text-purple-300">
            {user ? `Welcome back, ${user.username}!` : "Dashboard"}
          </h2>

          {/* Simple dashboard content */}
          <div className="bg-gray-700 rounded-lg p-6 shadow">
            <h3 className="text-lg font-semibold mb-4 text-gray-300">
              Admin Portal
            </h3>
            <p className="text-gray-400">
              You're successfully authenticated with role: {user?.role}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
