import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion"

// styles
import styles from "./styles.module.scss";
const ServiceCard = ({ cardImg, cardTitle, cardDetail, techs, childCardVariants }) => {
  return (
    <Card className={styles.serviceCard}>
      <motion.div variants={childCardVariants}>
        <div className={styles.cardImage}>{cardImg}</div>
        <Card.Body className="text-center">
          <Card.Title className={styles.cardTitle}>{cardTitle}</Card.Title>
          <div className={styles.tools}>
            <p>
              <span>Tech :- </span> {techs}
            </p>
          </div>
          <p className={styles.desc}>{cardDetail}</p>
        </Card.Body>
      </motion.div>
    </Card>
  );
};

export default ServiceCard;
