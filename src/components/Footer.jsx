import React from "react";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.footerInfo}>
          <h4>LET'S WORK TOGETHER</h4>
          <a href="mailto:support@aaerlaw.com" className={styles.mailLink}>
            support@aaerlaw.com
          </a>
          <div className={styles.socials}>
            <div className={styles.socialIcon}>
              <a
                href="https://facebook.com/aaer_law"
                target="_blank"
                class="facebook"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://twitter.com/aaer_law"
                target="_blank"
                class="twitter"
              >
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div className={styles.socialIcon}>
              {" "}
              <a
                href="https://instagram.com/aaer_law"
                target="_blank"
                class="instagram"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div className={styles.socialIcon}>
              <a
                href="https://linkedin.com/company/allappealelectronicreports"
                target="_blank"
                class="linkedin"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.footerItems}>
          <div className={styles.rightsText}>
            &copy; {new Date().getFullYear()} AAERLAW All Rights Reserved.
          </div>
          <div className={styles.footerLinks}>
            <Link to="/faq">Faq</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact us</Link>
            <Link to="/terms">Terms & Conditions</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
