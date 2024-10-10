import React from "react";
import { motion } from "framer-motion";

// styles
import styles from "./styles.module.scss";
const PageHeader = (props) => {
  const { mainTitle, num } = props;

  const pageHeaderVariants = {
    hidden: {
      opacity: 0,
      x: '-100%'
    },
    visible: {
      opacity: [0.5, 1],
      x: 0,
    }
  };

  return (
    <motion.div
      className={`${styles.pageHeader}`}
      variants={pageHeaderVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, ease: 'backInOut' }}
    >
      <span className={styles.num}>{num}</span>
      <h2 className={styles.mainTitle}>{mainTitle}</h2>
      <span className={styles.line}></span>
    </motion.div>
  );
};

export default PageHeader;
