import Footer from "../components/footer/Footer";
import Navigation from "../components/navbar/Navigation";

// styles
import styles from "./styles.module.scss";

const LayoutPrimary = ({ children }) => {
  return (
    <section className={styles.main_layout}>
      <section className={styles.navigation_sec}>
        <Navigation />
      </section>
      {children}
      <section className="footer-sec my-4">
        <Footer />
      </section>
    </section>
  );
};

export default LayoutPrimary;
