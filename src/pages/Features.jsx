import React from "react";
import styles from "../style.module.css";
import FeaturesImage from "../assets/features.png";
import Top from "../components/Top";

function Features() {
  return (
    <div className={styles.features}>
      <div className={`container ${styles.featuresContent}`}>
        <div className="row">
          <div className={`col-12 col-md-6 ${styles.featuresInfo}`}>
            <h6 className={styles.pres}>AAER Features</h6>
            <h3 className={styles.headText2}>AAER provides you with</h3>
            <div className={styles.featuresList}>
              <div className={styles.featuresListItem}>
                <div>
                  <i class="fa fa-wrench"></i>
                </div>
                <div className={styles.flItemText}>
                  <h4>All-in-one tool for legal research</h4>
                  <p>
                    Connect to our recent reported judgements, up-to-date Laws
                    of the Federation, precedents and other reference tools
                  </p>
                </div>
              </div>

              <div className={styles.featuresListItem}>
                <div>
                  <i class="fas fa-briefcase"></i>
                </div>
                <div className={styles.flItemText}>
                  <h4>Contract Management</h4>
                  <p>
                    With our inbuilt contract management tools, including
                    detailed contract precedents, we simplify contract
                    management for you
                  </p>
                </div>
              </div>

              <div className={styles.featuresListItem}>
                <div>
                  <i class="fa fa-book"></i>
                </div>
                <div className={styles.flItemText}>
                  <h4>Continuing Education</h4>
                  <p>
                    purchase or subscribe to articles, journals, textbooks and
                    other legal materials from some of the best legal minds and
                    institutions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <img src={FeaturesImage} alt="Features" className={styles.fImage} />
          </div>
        </div>
      </div>
      <Top />
    </div>
  );
}

export default Features;
