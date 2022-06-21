import React from "react";
import styles from '../style.module.css'

function HeaderImage({page}) {
  return (
    <div className={styles.headerImage}>
      <h3>{page}</h3>
      <h5>
        <a href="/">Home</a> &#8594; {page}
      </h5>
    </div>
  );
}

export default HeaderImage;
