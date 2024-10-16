import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import PageHeader from "../../components/pageHeader/PageHeader";
import Link from "next/link";
import { MdMarkEmailRead, MdCall } from "react-icons/md";

// styles
import styles from "./styles.module.scss";
const ContactScreen = () => {
  const contactVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 40,
      },
    },
  };

  return (
    <Container>
      <PageHeader num={"05"} mainTitle={"Take A Coffee & Chat With Me"} />
      <motion.div
        variants={contactVariants}
        initial="hidden"  
        whileInView={"show"}
      >
        <Row className={`${styles.conctWrapper} justify-content-center g-4`}>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <Link
              href="mailto:ritik.trilok.dev@gmail.com"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className={`${styles.emailIcon} d-flex align-items-center`}>
                <MdMarkEmailRead className={`${styles.icon}`} />
                <span>ritik.trilok.dev@gmail.com</span>
              </div>
            </Link>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <Link href="tel:9599567905" target={"_blank"} rel="noreferrer">
              <div className={`${styles.callIcon} d-flex align-items-center`}>
                <MdCall className={`${styles.icon}`} />
                <span>(+91) 959 956 7905</span>
              </div>
            </Link>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default ContactScreen;
