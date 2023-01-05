import React from "react";

// styles
import styles from "./styles.module.scss";
const PageHeader = (props) => {
  const { mainTitle, num } = props;
  return (
    <div className={`${styles.pageHeader} mb-5`}>
      <span className={styles.num}>{num}</span>
      <h2 className={styles.mainTitle}>{mainTitle}</h2>
      <span className={styles.line}></span>
    </div>
  );
};

export default PageHeader;
