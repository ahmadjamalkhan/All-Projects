import React, { useState, useEffect } from "react";
import "./Signup.css"; // CSS file import kar rahe hain
import { useNavigate, Link } from "react-router-dom"; // useNavigate for navigation

const Signin = ({ setLogin,setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate(); // For navigation

  // Fetch all users from the JSON server
  function clearInput() {
    setUsername("");
    setPassword("");
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUserData(data);
    };
    fetchData();
  }, []);

  const handleUsers = () => {
    if (!username || !password) return alert("Please fill all the inputs");

    // Check if the username and password match
    const userExists = userData.some(
      (user) => user.username === username && user.password === password
    );

    if (userExists) {
      alert("Login successful!");
      clearInput();
      setLogin(true);
      setUser(username)

      navigate("/dashboard"); // Navigate to home after successful login
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Signin</h2>
      <div className="input-group">
        <label htmlFor="username" className="label">
          Username
        </label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="password" className="label">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button className="signup-button" onClick={handleUsers}>
          Login
        </button>
        <span className="login-fun">
          You dont have an Acoount?
          <button className="signin-button" onClick={() => navigate("/signup")}>
            Signup
          </button>
        </span>
      </div>
    </div>
  );
};

export default Signin;
