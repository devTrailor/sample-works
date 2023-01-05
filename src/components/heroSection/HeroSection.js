// Styles

import { Col, Container, Row } from "react-bootstrap";

// styles
import styles from "./styles.module.scss";

const HeroSection = () => {
  return (
    <Container>
      <div className={styles.intro_wrapper}>
        <div className={styles.my_intro}>
          <h1 className={styles.greet}>Hi, my name is</h1>
          <h2 className={styles.name}>Ritik Sharma</h2>
          <h3 className={styles.quotes}>I build things for the web.</h3>
          <p className={styles.desc}>
            I am a software engineer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I am focused
            on building accessible, human-centered products at{" "}
            <span className={styles.cmpName}>TechChefz.</span>
          </p>
          <a href="#contact" className={`${styles.btn_contact} btn`}>
            Reach Me
          </a>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;