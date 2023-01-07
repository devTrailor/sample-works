import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";

import { MdMarkEmailRead, MdCall } from "react-icons/md";

// styles
import styles from "./styles.module.scss";
const ContactScreen = () => {
  return (
    <Container>
      <PageHeader num={"05"} mainTitle={"Take A Coffee & Chat With Me"} />
      <Row className={`${styles.conctWrapper} justify-content-center`}>
        <Col>
          <a
            href="mailto:ritik.trilok7905@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className={`${styles.emailIcon} d-flex align-items-center`}>
              <MdMarkEmailRead />
              <span>ritik.trilok7905@gmail.com</span>
            </div>
          </a>
        </Col>
        <Col>
          <a href="tel:9599567905" target={"_blank"} rel="noreferrer">
            <div className={`${styles.callIcon} d-flex align-items-center`}>
              <MdCall />
              <span>(+91) 959 956 7905</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
