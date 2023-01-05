import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.scss";
import HeroSection from "../components/heroSection/HeroSection";
import AboutScreen from "./about/AboutScreen";
import OurServices from "./ourServices/OurServices";
import PortfolioScreen from "./portfolio/PortfolioScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ritik Sharma</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.main}>
        {/* Hero-section-start */}
        <section className={styles.heroSec}>
          <HeroSection />
        </section>
        {/* Hero-Section-End */}

        {/* About-sec-start */}
        <section className={styles.aboutSec} id="about">
          <AboutScreen />
        </section>
        {/* About-sec-end */}
        {/* Services-sec-start */}
        <section className={styles.servicesSec}>
          <OurServices />
        </section>
        {/* Services-sec-end */}

        {/* Portfolio-sec-start */}
        <section className={styles.portfolioSec}>
          <PortfolioScreen />
        </section>
        {/* Portfolio-sec-end */}
      </section>
    </>
  );
}
