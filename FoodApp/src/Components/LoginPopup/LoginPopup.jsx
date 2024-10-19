import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currState, setState] = useState("Sign Up");

  const toggleState = () => {
    setState(currState === "Sign Up" ? "Login" : "Sign Up");
  };

  return (
    <div className="login-popup">
      <form
        className="login-form-container"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
          />
        </div>
        <div className="login-popup-inputs">
          {currState !== "Login" && (
            <input type="text" placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">
          {currState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <p onClick={toggleState} className="link-text">
          {currState === "Sign Up" ? (
            <>
              Already have an account?{" "}
              <span className="link-span">Login here</span>
            </>
          ) : (
            <>
              Create a new account?{" "}
              <span className="link-span">Click here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default LoginPopup;
