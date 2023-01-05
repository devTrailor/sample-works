import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import myImage from "../../assets/images/my-image.png";
// styles
import styles from "./styles.module.scss";

const AboutScreen = () => {
  return (
    <Container>
      <Row className={`${styles.introWrapper} justify-content-between`}>
        <Col xl={6} lg={6}>
          <PageHeader mainTitle={"About Me"} num="01" />
          <div className={styles.myInfo}>
            <p className={styles.desc}>
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <p className={styles.desc}>
              Here are a few technologies I have been working with recently:
            </p>
            <ul className={styles.skills_lists}>
              <li>JavaScript (ES6+)</li>
              <li>React.Js</li>
              <li>ANT.Design</li>
              <li>Next.Js</li>
            </ul>
          </div>
        </Col>
        <Col xl={4} lg={4}>
          <div className="myImage">
            <Image src={myImage} alt="my-image" width={300} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutScreen;
