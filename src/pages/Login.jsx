import React from "react";
import styles from "../style.module.css";
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className={styles.login}>
      <div className="container">
        <form className={`text-center ${styles.loginForm}`}>
          <h3>Login</h3>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <div className={`form-group ${styles.check}`}>
            <input type="checkbox" name="logged In" />
            <label htmlFor="">Keep me logged In</label>
          </div>
          <div className="text-center">
            <button className={styles.regBtn}>Login Now</button>
          </div>
          <div className="text-center mt-3">
            <Link to='/forgot' style={{color: "#cc2328", textDecoration: "none"}}>Forgot Password ?</Link>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Login;
