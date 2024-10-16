import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// styles
import styles from "./styles.module.scss";
const PageHeader = (props) => {
  const { mainTitle, num } = props;

  return (
    <motion.div
      className={`${styles.pageHeader}`}
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className={styles.num}>{num}</span>
      <h2 className={styles.mainTitle}>{mainTitle}</h2>
      <span className={styles.line}></span>
    </motion.div>
  );
};

export default PageHeader;
