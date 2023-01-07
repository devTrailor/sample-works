import React from "react";

// styles
import styles from "./styles.module.scss";
const SkillCard = ({ skillIcon, skillTitle }) => {
  return (
    <div
      className={`${styles.skillCard} d-flex flex-column align-items-center`}
    >
      <div className={styles.skillImg}>{skillIcon}</div>
      <span>{skillTitle}</span>
    </div>
  );
};

export default SkillCard;
