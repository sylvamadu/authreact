import React from "react";
import Top from "../components/Top";
import styles from "../style.module.css";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={`container ${styles.contactContent}`}>
        <h6 className={`text-center ${styles.pres}`}>Contact</h6>
        <h3 className={`text-center ${styles.headText2}`}>
          Get in Touch with Us
        </h3>
        <div className="row">
          <div className={`col-12 col-md-6 col-lg-4 ${styles.contactItems}`}>
            <div className={`card ${styles.card}`}>
              <div className={styles.contactIcon}>
                <i class="fa fa-map"></i>
              </div>
              <div className={styles.contactText}>
                <h6>Our Address</h6>
                <p>9, Johannesburg Street, Zone 2, Wuse, Abuja, Nigeria.</p>
              </div>
            </div>
          </div>

          <div className={`col-12 col-md-6 col-lg-4 ${styles.contactItems}`}>
            <div className={`card ${styles.card}`}>
              <div className={styles.contactIcon}>
                <i class="fa fa-envelope"></i>
              </div>
              <div className={styles.contactText}>
                <h6>Email</h6>
                <p>
                  <a href="mailto:support@aaerlaw.com">support@aaerlaw.com</a>
                </p>
              </div>
            </div>
          </div>

          <div className={`col-12 col-md-6 col-lg-4 ${styles.contactItems}`}>
            <div className={`card ${styles.card}`}>
              <div className={styles.contactIcon}>
                <i class="fa fa-headphones"></i>
              </div>
              <div className={styles.contactText}>
                <h6>Give Us a Call</h6>
                <div className={styles.numbers}>
                  <div>+2348146041120</div>
                  <div>+2347063906162</div>
                  <div>+2347038638740</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.support}>
          <h6 className={`text-center ${styles.pres}`}>Support</h6>
          <h3
            className={`text-center ${styles.headText2}`}
            style={{ lineHeight: "15px" }}
          >
            Let's talk
          </h3>
          <h6 className={`text-center ${styles.supportExp}`}>
            If you have a question regarding our services, feel free to contact
            us using the form below
          </h6>
          <form className={styles.supportForm}>
            <div className="form-group">
              <div className="row">
                <div className="col-12 col-md-6">
                  <input
                    type="text"
                    className={`form-control ${styles.formName}`}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="col-12 col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    required
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <input
                    type="text"
                    placeholder="Enter subject"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <textarea
                    className="form-control"
                    placeholder="Type your message"
                    rows="5"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button className={styles.regBtn}>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Top />
    </div>
  );
}

export default Contact;
