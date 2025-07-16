// components/ProtectedRoute.js
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  const verifyAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/verify", {
        credentials: "include",
      });

      if (response.ok) {
        setIsVerified(true);
      } else {
        localStorage.removeItem("authState"); // Clear any cached state
        navigate("/login");
      }
    } catch (error) {
      localStorage.removeItem("authState");
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    verifyAuth();

    // Set up interval to check auth periodically
    const interval = setInterval(verifyAuth, 300000); // Check every 5 minutes

    return () => clearInterval(interval);
  }, [navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return isVerified ? <Outlet /> : null;
};

export default ProtectedRoute;
