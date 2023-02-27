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
      <Row className={`${styles.conctWrapper} justify-content-center g-4`}>
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <a
            href="mailto:ritik.trilok7905@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className={`${styles.emailIcon} d-flex align-items-center`}>
              <MdMarkEmailRead className={`${styles.icon}`} />
              <span>ritik.trilok7905@gmail.com</span>
            </div>
          </a>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12} xs={12}>
          <a href="tel:9599567905" target={"_blank"} rel="noreferrer">
            <div className={`${styles.callIcon} d-flex align-items-center`}>
              <MdCall className={`${styles.icon}`} />
              <span>(+91) 959 956 7905</span>
            </div>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
