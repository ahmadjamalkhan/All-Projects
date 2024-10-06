import React, { useState, useEffect } from "react";
import "./Signup.css"; // CSS file import kar rahe hain
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
const navigate =useNavigate()
  // Fetch all users from the JSON server
  function clearInput(){
    setEmail("")
    setUsername("")
    setPassword("")
  }
useEffect(()=>{
const fetchData=async()=>{
    const res=await fetch("http://localhost:3000/users")
    const data=await res.json()
    setUserData(data)
}
fetchData()
},[userData])
  const handleUsers = async () => {
    if (!username || !email || !password)
      return alert("please fill the all input");
    
    const newUser = { id: uuidv4(), username, email, password };
    const alreadyRegister=userData.some(user=>(user.username===username||user.email===email))

    if(alreadyRegister) return alert("already register")
    try {
         const response=await fetch("http://localhost:3000/users", {
        method: "POST",
        header: "application/json",
        body: JSON.stringify(newUser),
      })
      if (response.ok){
        const data= response.json()
        console.log(data);
        setUserData(prevUsers=>[...prevUsers,data])
        clearInput()
        navigate("/home")
      }
    } catch (error) {
      console.error("data not available yet");
    }
  };

  
  return (
    <div className="container">
      <h2 className="heading">Signup</h2>
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
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          Signup
        </button>
        <button className="signin-button" onClick={()=>navigate('/')}>Signin</button>
      </div>
    </div>
  );
};

export default Signup;
