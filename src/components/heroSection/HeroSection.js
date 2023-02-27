import { useEffect } from "react";
import { Container } from "react-bootstrap";

// styles
import styles from "./styles.module.scss";

const HeroSection = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <div className={styles.intro_wrapper}>
        <div className={styles.my_intro}>
          <h1 className={`${styles.greet} topToBottom`}>Hi, my name is</h1>
          <h2 className={styles.name}>Ritik Sharma</h2>
          <h3 className={styles.quotes}>I build things for the web.</h3>
          <p className={styles.desc}>
            I am a Frontend engineer. I work in tech as a
            <strong> UI Developer</strong>. My responsibilities to build
            re-usable UI components and pixel-perfect design. I collaborate with
            my team. Excited to be part of this innovative industry and
            contribute to our company&apos;s success.
            <span className={styles.cmpName}> TechChefz.</span>
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
