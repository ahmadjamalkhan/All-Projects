import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Home = ({ login, setLogin, setUser }) => {

  const navigate = useNavigate();
  return (
    <div className="container-full">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Home
                </a>
              </li>
              {login ? (
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    Dashboard
                  </a>
                </li>
              ) : (
                ""
              )}
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              {login ? (
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    setLogin(false);
                    setUser("");
                  }}
                  type="submit"
                >
                  Logout
                </button>
              ) : (
                <div className="nav-login-btn">
                  <button
                    className="btn btn-success"
                    onClick={() => navigate("/signup")}
                    type="submit"
                  >
                    Get Started
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => navigate("/signin")}
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </nav>

      <div className="home">
        <h1>Welcome To Home Page</h1>
        {/* <div className=""> */}
       
      </div>
    </div>
    //    </div>
  );
};

export default Home;
