import React from "react";
import "./Navbar.css";

function Navbar({ switchTheme, theme }) {
  return (
    <div className="navbar">
      <div className="logo">
        <button className="hamburger">
          <i className="fa fa-bars"></i>
        </button>
        <div className="logo-name">AAER</div>
      </div>
      <div className="icons">
        <div className="search">
          <input
            type="text"
            className="form-control"
            placeholder="Search here..."
          />
        </div>
        <div className="apps">
          <i className="fas fa-th"></i>
        </div>
        <div className="mode">
          <button onClick={switchTheme}>
            <i
              className={`fas fa-moon ${
                theme === "light" ? "fa-moon" : "fa-sun"
              }`}
            ></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
