import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <p className="navbar-logo" style={{fontFamily: "Stack Sans Notch"}}>Flow</p>
      <div className="navbar-settings">
        <img src="src/assets/settings-icon.svg" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
