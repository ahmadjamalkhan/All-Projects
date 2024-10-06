import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = () => {
  const [users, setUsers] = useState([]);
  const[showUser,setShowUser]=useState(false)
  const handleUser=()=>{
    setShowUser(!showUser)
  }
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();
  return (
    <div className="container-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-danger"
                onClick={() => navigate("/")}
                type="submit"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="home">
        <h1>Welcome To Home Page</h1>
        {/* <div className=""> */}
        <button className="btn-success"onClick={handleUser}  > {showUser?"hide Users":"see all users"}</button>
        {showUser && (
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
              {users.map((user) => (
                  <tr key={user.id} className="border-b">
                  <td className="py-3 px-4">{user.username}</td>
                  <td className="py-3 px-4">{user.email}</td>
                </tr>
              ))}
            </tbody>
        </table>)}
      </div>
    </div>
    //    </div>
  );
};

export default Home;
