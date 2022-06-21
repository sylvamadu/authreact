import React from "react";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

function Price() {
  return (
    <div className={styles.price}>
      <div className={`container ${styles.priceContent}`}>
        <h3 className={`text-center ${styles.headerText4}`}>
          Choose a subcription plan
        </h3>
        <div class="row">
          <div class="col-12 col-lg-6">
            <div class={`card ${styles.priceCard}`}>
              <div class="card-body">
                <h5 class="card-title mt-3 price-header">Basic</h5>
                <div class="price-amount">
                  <div class={`card-text ${styles.amt}`}>₦2,500/ Month</div>
                  <div class={`card-text ${styles.month}`}>
                    ₦25,000 Annually
                  </div>
                </div>
                <hr />
                <div class={`card-text ${styles.ulCover}`}>
                  <p class={`card-text ${styles.priceDesc}`}>
                    The fundamental plan to get you started and increase your
                    productivity as a legal Practitioner
                  </p>
                  <ul class="ul">
                    <li>
                      Law Report<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Laws of the federation<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Regulations of MDA<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Rules of court<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Textbooks<span class="ml-3">&#10004;</span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/register"
                  class={`btn w-100 mt-4 ${styles.priceBtn}`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 sp-top">
            <div class={`card ${styles.priceCard}`}>
              <div class="card-body">
                <h5 class="card-title mt-3 price-header">Professional</h5>
                <div class="price-amount">
                  <div class={`card-text ${styles.amt}`}>₦4,000/ Month</div>
                  <div class={`card-text ${styles.month}`}>
                    ₦40,000 Annually
                  </div>
                </div>
                <hr />
                <div class={`card-text ${styles.ulCover}`}>
                  <p class={`card-text ${styles.priceDesc}`}>
                    Get Access to Basic feature and all the new features coming
                    on AAER
                  </p>
                  <ul class="ul">
                    <li>
                      Law Reports<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Laws of the federation<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Regulations of MDA<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Rules of court<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Textbooks<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Precedents<span class="ml-3">&#10004;</span>
                    </li>
                    <li>
                      Journal articles<span class="ml-3">&#10004;</span>
                    </li>
                  </ul>
                </div>
                <Link
                  to="/register"
                  class={`btn w-100 mt-4 ${styles.priceBtn}`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
