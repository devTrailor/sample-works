import { motion } from "framer-motion";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navbar/Navigation";

// styles
import styles from "./styles.module.scss";

const LayoutPrimary = ({ children }) => {
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };
  return (
    <section className={styles.main_layout}>
      <motion.section
        className={styles.navigation_sec}
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, ease: 'backInOut' }}
      >
        <Navigation />
      </motion.section>
      {children}
      <section className={styles.footerSec}>
        <Footer />
      </section>
    </section>
  );
};

export default LayoutPrimary;
