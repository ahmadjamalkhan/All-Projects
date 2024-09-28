import React, { useState }  from "react";
import logo from "../../images/logo.png";
import list from "../../images/list.png";
import login from "../../images/login.png";
import hanb from "../../images/hanb.png";


// import NavList from "./NavList";
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navBar shadow-sm">
      <nav className="container mx-auto">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="collapser"
        
       onClick={()=>{
        toggleMenu()
       }} 
        >
          <img src={hanb} alt="" />
        </div>
        <div className={`respo ${showMenu ? "show":""} `}>
          <div className="menu ">
            {/* <div className="hidden w-full md:block md:w-auto" id="navbar-default"> */}
            <ul className="font-medium flex p-4 md:p-0 mt-4 ">
              <li>
                <a
                  to="/"
                  className="block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  to="/"
                  className="block py-2 px-3 text-black"
                  aria-current="page"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  to="/"
                  className="block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Listing
                </a>
              </li>
              <li>
                <a
                  to="/"
                  className="block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  to="/"
                  className="block py-2 px-3 text-black"
                  aria-current="page"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          {/* </div> */}
          <div className="buttons flex gap-3">
            <button className="loginBtn flex items-center gap-2">
              {" "}
              <span>
                {" "}
                <img src={login} alt="" />{" "}
              </span>{" "}
              Login/Register{" "}
            </button>
            <button className="listingBtn flex items-center gap-2">
              {" "}
              <span>
                {" "}
                <img src={list} alt="" />{" "}
              </span>{" "}
              Add Listing
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
