import React from "react";
import styles from "../style.module.css";
import FeaturesImage from "../assets/features.png";
import Top from "../components/Top";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <div className="container">
        {/*homepage introduction section */}
        <div className="row">
          <div className={`col-lg-7 ${styles.intro}`}>
            <h3>
              All The Law{" "}
              <span style={{ color: "#cf2228" }}>Pratice Tools</span> You Need
              In One Place
            </h3>
            <div className={styles.redLine}></div>
            <p className="mt-md-4 mt-3">
              AAER provides you with valuable all-in-one tool for legal
              research, practice management, contract management, and continuing
              education. Subscribe to this exceptional legal resource
            </p>
            <Link
              to="/register"
              className={`${styles.regLink} ${styles.introBtn}`}
            >
              Register
            </Link>
          </div>
        </div>
        {/*homepage information section */}
        <div className={styles.explain}>
          <h6>About AAER</h6>
          <h3>All Appeal Electronic Reports</h3>
          <p className="mt-md-4 mt-3 mx-auto">
            The ALL APPEAL ELECTRONIC REPORTS (AAER) is an offshoot of ABUJA
            APPEAL QUATERLY REPORTS (AAQR), which was unveiled in 2019 by the
            then President of the Court of Appeal, Hon. Justice Zainab Adamu
            Bulkachuwa (Rtd.).
          </p>
          <div className={styles.goCenter}>
            <Link to="/about" className={styles.regLink}>
              Read More
            </Link>
          </div>
        </div>
        {/*homepage features section */}
        <div className={styles.hFeatures}>
          <div className="row">
            <div className="col-lg-6">
              <div className={`${styles.hFeaturesTitle} text-left`}>
                <h6>AAER Features</h6>
                <h3>AAER provides you with</h3>
              </div>
              <div className={styles.allFeatures}>
                <div className={styles.featuresItem}>
                  <div className={styles.icon}>
                    <i class="fas fa-wrench"></i>
                  </div>
                  <div className={styles.featureItemText}>
                    <h4>All-in-one tool for legal research</h4>
                    <p>
                      Connect to our recent reported judgements, up-to-date Laws
                      of the Federation, precedents and other reference tools
                    </p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.icon}>
                    <i class="fas fa-briefcase"></i>
                  </div>
                  <div className={styles.featureItemText}>
                    <h4>Contract Management</h4>
                    <p>
                      With our inbuilt contract management tools, including
                      detailed contract precedents, we simplify contract
                      management for you
                    </p>
                  </div>
                </div>
                <div className={styles.featuresItem}>
                  <div className={styles.icon}>
                    <i class="fas fa-book"></i>
                  </div>
                  <div className={styles.featureItemText}>
                    <h4>Continuing Education</h4>
                    <p>
                      purchase or subscribe to articles, journals, textbooks and
                      other legal materials from some of the best legal minds
                      and institutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src={FeaturesImage}
                alt="features"
                className={styles.featuresImage}
              />
            </div>
          </div>
        </div>
        {/*aaer differentiator */}
        <div className={styles.differentiator}>
          <div className={styles.diffIntro}>
            <h6>AAER Differentiator</h6>
            <h3>AAER is a different from other legal research platforms</h3>
          </div>
          <div className={styles.diffItems}>
            <div className="row">
              <div className={`${styles.diff} col-lg-3`}>
                <div className={`text-center ${styles.diffIcon}`}>
                  <i class="fas fa-search"></i>
                </div>
                <h4>Ultra-Fast Search Algorithm</h4>
                <p>
                  Find the most relevant results to your search queries in split
                  seconds.
                </p>
              </div>
              <div className={`${styles.diff} col-lg-3`}>
                <div className={`text-center ${styles.diffIcon}`}>
                  <i class="fas fa-laptop"></i>
                </div>
                <h4>Powerful Real-Time Speech Synthesis</h4>
                <p>
                  Conduct hands-free legal research while multitasking by
                  listening instead of reading.
                </p>
              </div>
              <div className={`${styles.diff} col-lg-3`}>
                <div className={`text-center ${styles.diffIcon}`}>
                  <i class="fas fa-moon"></i>
                </div>
                <h4>Intuitive Design with Dark Mode</h4>
                <p>
                  Enjoy a pleasant experience and protect your eyes from the
                  effects of prolonged screen time.
                </p>
              </div>
              <div className={`${styles.diff} col-lg-3`}>
                <div className={`text-center ${styles.diffIcon}`}>
                  <i class="fas fa-file"></i>
                </div>
                <h4>Detailed Contract Precedents</h4>
                <p>
                  Because we have done all the work for you, all you have to do
                  is fill in the blanks, print and sign.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*connect section */}
      <div className={styles.connect}>
        <div className={`container ${styles.connRow}`}>
          <div className={styles.connLeft}>
            <h6>Reach Us Now</h6>
            <h3>Connect with AAER, your all time legal companion</h3>
          </div>
          <div className={styles.connRight}>
            <Link to="/register" className={styles.regLink}>
              Register
            </Link>
          </div>
        </div>
      </div>
      <Top />
    </div>
  );
}

export default Home;
