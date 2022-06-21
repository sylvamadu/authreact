import React from "react";
import Top from "../components/Top";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className={styles.about}>
      <div className={`container ${styles.aboutContent}`}>
        <div className={styles.aboutHeader}>
          <h6>About AAER</h6>
          <h3>ALL APPEAL ELECTRONIC REPORTS (AAER)</h3>
        </div>
        <p>
          (AAER) is an offshoot of ABUJA APPEAL QUATERLY REPORTS (AAQR), which
          was unveiled in 2019 by the then President of the Court of Appeal,
          Hon. Justice Zainab Adamu Bulkachuwa (Rtd.). <br /> <br /> AAQR is a
          quarterly publication of novel judgements from the Abuja Division of
          the Court of Appeal, which has gained prominence in the legal industry
          as an easy reference tool for research work and courtroom practice.
          AAQR prides itself as a carrier of decisions on novel, recondite and
          topical issues in Nigeria and is given special weight because all
          reported judgements are revised by the Justices themselves. <br />
          <br /> Our decision to create the ALL APPEAL ELECTRONIC REPORTS (AAER)
          is inspired by the numerous calls that we have received from
          subscribers who have been impressed by the sterling quality of our
          work on AAQR, and desire a means of accessing our content without
          necessarily waiting for their order of a copy of AAQR to arrive at
          their respective destinations.
        </p>
        <div className={styles.why}>
          <h6 className={styles.pre}>Why choose us ?</h6>
          <h3 className={styles.headText}>
            In an effort to provide our services to a larger market, we have
            expanded our scope to include:
          </h3>
          <p>
            Decisions of the Supreme Court, Court of Appeal, Federal High Court,
            State High Courts, National Industrial Court, and Tax Appeal
            Tribunal, Case commentaries, Laws of the federation, Rules of court
            , Court forms, Contract drafts, Regulation of MDAs, Textbooks ,
            Journal articles, Blog posts, Pratice notes, Nuggets, AAER meet
          </p>
        </div>

        <div className={styles.goal}>
          <div className="row">
            <div className="col-12">
              <p className={styles.pres}>Our Goals</p>
              <p>
                Our goal is to provide our subscribers with a valuable
                all-in-one tool for legal research, practice management,
                contract management, and continuing education. We are confident
                that AAER will be a valuable legal companion to you, and we
                invite you to subscribe to this exceptional legal resource.
              </p>
              <Link to="/pricing" className={styles.regLink}>
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Top />
    </div>
  );
}

export default About;
