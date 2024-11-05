
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <ToastContainer />
      <Navbar
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
      <div className="container mx-auto px-4">
        <Routes>
          <Route 
          path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <Login setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/users"
            element={isAuthenticated ? <UserList /> : <Navigate to="/login" />}
          />
          <Route
            path="/users/:id"
            element={
              isAuthenticated ? <UserDetail /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
