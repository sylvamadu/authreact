import React, { useState } from "react";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

function Navbar({ switchTheme, theme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.navbar}>
        <div className="container">
          <div className={styles.navbarContainer}>
            <div className={styles.logo}>
              <a href="#">AAER</a>
            </div>
            <div className={styles.navLinks}>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/features">Features</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/login">Login</Link>
                <Link to="/register" className={styles.regLink}>
                  Register
                </Link>
              </nav>
              <div className={styles.navIcons}>
                <button onClick={switchTheme} className={styles.toggleBtn}>
                  <i
                    className={`fas fa-moon ${
                      theme === "light" ? "fa-moon" : "fa-sun"
                    }`}
                  ></i>
                </button>
                <button
                  className={styles.hamburger}
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? (
                    <i className="fas fa-times"></i>
                  ) : (
                    <i className="fas fa-bars"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*mobile navbar here */}
      <div className={menuOpen ? styles.mobileActive : styles.mobile}>
        <div className={styles.mobileNav}>
          <nav>
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/">
              Home
            </Link>
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/features">
              Features
            </Link>
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/pricing">
              Pricing
            </Link>
            <Link onClick={() => setMenuOpen(!menuOpen)} to="/login">
              Login
            </Link>
            <button className={styles.regBtn}>Register</button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
