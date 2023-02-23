import React from "react";

// styles
import styles from "./styles.module.scss";
const SocialConnects = ({ icon, url }) => {
  return (
    <li className={`${styles.list} list-group-item border-0 bg-transparent`}>
      <a href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </li>
  );
};

export default SocialConnects;
