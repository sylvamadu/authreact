import React, { useState, useEffect } from "react";
import styles from "../style.module.css";

function Top() {
  const [show, setShow] = useState(false);
  
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    show && (
      <button className={styles.top} onClick={() => window.scrollTo(0, 0)}>
        ⤴
      </button>
    )
  );
}

export default Top;
