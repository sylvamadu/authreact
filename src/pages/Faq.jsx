import React from "react";
import styles from "../style.module.css";
import Accordion from "react-bootstrap/Accordion";
import Top from "../components/Top";

function Faq() {
  return (
    <div className={styles.faq}>
      <div className={`container ${styles.faqContent}`}>
        <Accordion defaultActiveKey="0" className={styles.accordion}>
          <Accordion.Item eventKey="0" className={styles.accItem}>
            <Accordion.Header>How do i use AAER ?</Accordion.Header>
            <Accordion.Body>
              With an active subscription plan, you can use the resources on
              AAER to find the authorities to support your legal arguments,
              prepare for your court cases (alone or with colleagues), learn the
              regulatory requirements that you should comply with in your
              business and personal activities, and prepare legal documents for
              your commercial transactions, amongst others.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" className={styles.accItem}>
            <Accordion.Header>
              What makes AAER different from other legal research platforms ?
            </Accordion.Header>
            <Accordion.Body>
              *Ultra-Fast Search Algorithm: Find the most relevant results to
              your search queries in split seconds. * Powerful Real-Time Speech
              Synthesis: Conduct hands-free legal research while multitasking. *
              Ratio Decidendi: Our ratio decidendi cuts to the chase, saving
              valuable research time. We do not report obiter dicta. * Intuitive
              Design: For a pleasant experience. * Dark Mode: to protect your
              eyes from the effects of prolonged screen time. * Detailed
              Contract Precedents: All you have to do is fill in the blanks,
              print and sign!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={styles.accItem}>
            <Accordion.Header>
              What are the available subscriptions to AAER ?
            </Accordion.Header>
            <Accordion.Body>
              There are 2 subscription plans (available monthly or yearly): *
              Basic Plan- gives you access to the court judgements, laws of the
              federation (LFN), rules and regulations of MDAs, court forms and
              textbooks; and * Professional Plan- everything in Basic + contract
              precedents and journal articles.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={styles.accItem}>
            <Accordion.Header>
              Will my subscription plan be renewed automatically ?
            </Accordion.Header>
            <Accordion.Body>
              Only when you choose from your profile to renew your subscription
              automatically
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={styles.accItem}>
            <Accordion.Header>Is AAER different from AAQR ?</Accordion.Header>
            <Accordion.Body>
              AAER is the electronic upgrade to AAQR- the widely acclaimed
              paperback series of reported judgements from the Court of Appeal
              (Abuja Division). AAER also comes with a chock-full of relevant
              resources apart from just law reports.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={styles.accItem}>
            <Accordion.Header>
              Which judgements have been reported on AAER ?
            </Accordion.Header>
            <Accordion.Body>
              AAER boasts a wide range of up-to-date judgements from the
              superior courts in Nigeria.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={styles.accItem}>
            <Accordion.Header>
              What happens to the documents i create with AAER ?
            </Accordion.Header>
            <Accordion.Body>
              We (and our technical partners) do not have access to the
              information you create using our resources nor do we store your
              documents on our database. All you have to do is fill in the
              blanks, print and sign!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={styles.accItem}>
            <Accordion.Header>
              How do i resolve payment issues with AAER ?
            </Accordion.Header>
            <Accordion.Body>
              Contact our customer support team by sending an email with all
              relevant information to aaerlawsupport@gmail.com or calling
              08146041120, 07063906162 or 07038638740
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>Is AAER on social media ?</Accordion.Header>
            <Accordion.Body>
              Yes! You can connect with us on Twitter & Instagram @aaer_law, on
              Facebook @AAER.Law and on LinkedIn @AAER Law.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <Top />
    </div>
  );
}

export default Faq;
