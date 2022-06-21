import React from "react";
import styles from "../style.module.css";

function Forgot() {
  return (
    <div className={styles.login}>
      <div className="container">
        <form className={`text-center ${styles.loginForm}`}>
          <h3>Forgot Your Password ?</h3>
          <h6>Enter your email below to find your account</h6>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div className="text-center">
            <button className={styles.regBtn}>Verify email</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Forgot;
