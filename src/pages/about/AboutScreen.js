import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import myImage from "../../assets/images/user.png";
// styles
import styles from "./styles.module.scss";

const AboutScreen = () => {

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Controls the delay between each child's animation
      },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <Container>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row className={`${styles.introWrapper} justify-content-between g-4`}>
          <Col xl={6} lg={6} className="p-0">
            <PageHeader mainTitle={"About Me"} num="01" />
            <div className={styles.myInfo}>
              <motion.p className={styles.desc} variants={childVariant}>
                Hello, I am a <span>Frontend Developer</span> more than a year
                of experience creating user-friendly and responsive websites. I
                specialize in building robust and intuitive user interfaces
                using HTML, CSS, JavaScript, and React.js. Take a look at my
                portfolio to see some of my recent projects and feel free to
                reach out to me if you are interested in working together.
              </motion.p>
              <motion.p className={styles.desc} variants={childVariant}>
                Here are a few technologies I have been working with recently:
              </motion.p>
              <motion.ul className={styles.skills_lists} variants={childVariant}>
                <li>JavaScript (ES6+)</li>
                <li>React.Js</li>
                <li>Next.Js</li>
                <li>Bootstrap 5</li>
                <li>Tailwind CSS</li>
                <li>ANT.Design</li>
                <li>AEM</li>
              </motion.ul>
            </div>
          </Col>
          <Col xl={4} lg={4} className="p-0">
            <motion.div className={styles.myImage} variants={childVariant}>
              <Image src={myImage} alt="my-image" />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default AboutScreen;
