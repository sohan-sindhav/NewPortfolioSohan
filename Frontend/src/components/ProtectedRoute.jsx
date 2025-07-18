import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "../axios";

export default function ProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    axios
      .get("/auth/me")
      .then(() => setAuth(true))
      .catch(() => setAuth(false))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return auth ? children : <Navigate to="/login" />;
}
