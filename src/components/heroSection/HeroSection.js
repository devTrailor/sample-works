import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

// styles
import styles from "./styles.module.scss";

const HeroSection = () => {
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
      <div className={styles.intro_wrapper}>
        <motion.div
          className={styles.my_intro}
          variants={containerVariants} // Parent animation control
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className={`${styles.greet} topToBottom`}
            variants={childVariant}
          >
            Hi, my name is
          </motion.h1>
          <motion.h2 className={styles.name} variants={childVariant}>
            Ritik Sharma
          </motion.h2>
          <motion.h3 className={styles.quotes} variants={childVariant}>
            I build things for the web.
          </motion.h3>
          <motion.p className={styles.desc} variants={childVariant}>
            I am a Frontend engineer. I work in tech as a
            <strong> UI Developer</strong>. My responsibilities to build
            re-usable UI components and pixel-perfect design. I collaborate with
            my team. Excited to be part of this innovative industry and
            contribute to our company&apos;s success.
            <span className={styles.cmpName}> TechChefz.</span>
          </motion.p>
          <motion.a
            href="#contact"
            className={`${styles.btn_contact} btn`}
            variants={childVariant}
          >
            Reach Me
          </motion.a>
        </motion.div>
      </div>
    </Container>
  );
};

export default HeroSection;
