import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Login from "./pages/Login";
import AdminDashboard from "./components/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRotue";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-dark-900 text-gray-300 font-sans">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <Projects />
              </>
            }
          />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<AdminDashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
