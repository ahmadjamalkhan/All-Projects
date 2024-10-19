import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup"; // Signup component import karna
import Home from "./Home"; // Home component import karna
import Signin from "./Signin"; // Signin component import karna
import Dashboard from "./Dashboard"; // Corrected spelling
import ProtectedRoute from "./ProtectedRoute.jsx"; // Importing ProtectedRoute

const App = () => {
  const [login, setLogin] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || ""
  );

  
  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(login));
  }, [login]);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Home login={login} setLogin={setLogin} setUser={setUser} />
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute login={!login}>
              <Signup login={login} setLogin={setLogin} setUser={setUser} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <ProtectedRoute login={!login}>
          
          <Signin login={login} setLogin={setLogin}  setUser={setUser}/>
          </ProtectedRoute>
          
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute login={login}>
              <Dashboard login={login} setLogin={setLogin} user={user} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
