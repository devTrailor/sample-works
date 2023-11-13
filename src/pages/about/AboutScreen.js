import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import myImage from "../../assets/images/ritik's-2.jpg";
// styles
import styles from "./styles.module.scss";

const AboutScreen = () => {
  return (
    <Container>
      <Row className={`${styles.introWrapper} justify-content-between g-4`}>
        <Col xl={6} lg={6}>
          <PageHeader mainTitle={"About Me"} num="01" />
          <div className={styles.myInfo}>
            <p className={styles.desc}>
              Hello, I am a frontend developer more than a year of experience
              creating user-friendly and responsive websites. I specialize in
              building robust and intuitive user interfaces using HTML, CSS,
              JavaScript, and React.js. Take a look at my portfolio to see some
              of my recent projects and feel free to reach out to me if you are
              interested in working together.
            </p>
            <p className={styles.desc}>
              Here are a few technologies I have been working with recently:
            </p>
            <ul className={styles.skills_lists}>
              <li>JavaScript (ES6+)</li>
              <li>React.Js</li>
              <li>ANT.Design</li>
              <li>Next.Js</li>
              <li>AEM</li>
            </ul>
          </div>
        </Col>
        <Col xl={4} lg={4}>
          <div className={styles.myImage}>
            <Image src={myImage} alt="my-image" width={300} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
