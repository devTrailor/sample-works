import React from "react";
import Image from "next/image";
import { Card } from "react-bootstrap";

// styles
import styles from "./styles.module.scss";
const ServiceCard = ({ cardImg, cardTitle, cardDetail, techs }) => {
  return (
    <Card className={styles.serviceCard}>
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
    </Card>
  );
};

export default ServiceCard;
