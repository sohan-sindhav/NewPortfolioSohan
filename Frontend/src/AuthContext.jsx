import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
    checked: false,
  });

  const checkAuth = async () => {
    try {
      const response = await fetch("/api/auth/verify", {
        credentials: "include",
      });

      const data = (await response.ok) ? await response.json() : null;

      setAuthState({
        isAuthenticated: response.ok,
        user: data?.user || null,
        checked: true,
      });

      return response.ok;
    } catch (error) {
      setAuthState({
        isAuthenticated: false,
        user: null,
        checked: true,
      });
      return false;
    }
  };

  const logout = async () => {
    await fetch("/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });
    await checkAuth();
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ ...authState, checkAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
