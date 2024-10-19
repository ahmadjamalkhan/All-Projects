import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {StoreContext} from '../../context/ContextStore'
function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("Home");
  const { totalCartItem,subTotalAmmount} = useContext(StoreContext);
  

  const handleLogin = () => {};
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          className={`${menu === "Home" ? "active" : ""}`}
          onClick={() => setMenu("Home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={`${menu === "Menu" ? "active" : ""}`}
          onClick={() => setMenu("Menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={`${menu === "Mobile-App" ? "active" : ""}`}
          onClick={() => setMenu("Mobile-App")}
        >
          Mobile-App
        </a>
        <a
          href="#footer"
          className={`${menu === "Contact us" ? "active" : ""}`}
          onClick={() => setMenu("Contact us")}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          {subTotalAmmount()>0?<div className="dot">{totalCartItem}</div>:""}
          
        </div>
        <button
          onClick={() => {
            setShowLogin(true);
          }}
        >
          Sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
