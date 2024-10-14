import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import Image from "next/image";
import project_1 from "../../assets/images/project-1.png";
import project_2 from "../../assets/images/project-2.png";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// styles
import styles from "./styles.module.scss";

const PortfolioScreen = () => {

  return (
    <Container>
      <PageHeader num={"03"} mainTitle={"Some Things I’ve Built"} />
      <Row
        className={`${styles.portfolioWrapper} align-items-center justify-content-center`}
      >
        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
          <motion.div
            className={styles.projectImg_1}
          >
            <a
              href="https://www.royalenfield.com/in/en/reown/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={project_1} alt="project-1" className="img-fluid" />
            </a>
          </motion.div>
        </Col>
        <Col xl={5} lg={5} md={5} sm={12} xs={12}>
          <motion.div
            className={styles.projectDetails_1}
          >
            <p className={`${styles.projectOverline} text-end mb-0`}>
              Featured Project
            </p>
            <h3 className={`${styles.projectTitle} text-end`}>
              <a
                href="https://www.royalenfield.com/in/en/reown/"
                target="_blank"
                rel="noreferrer"
              >
                Royal Enfield REOWN
              </a>
            </h3>
            <p className={`${styles.desc} p-3`}>
              Royal Enfield Reown is a one-stop solution where you can buy,
              sell, & exchange Royal Enfield motorcycles in India from the
              comfort of your home.
            </p>
            <ul
              className={`${styles.projectTechList} list-group flex-row justify-content-end`}
            >
              <li className="list-group-item border-0 bg-transparent pb-0">
                HTML 5
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                CSS 3
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                SCSS
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                AEM
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                JavaScript
              </li>
            </ul>

            <div
              className={`${styles.projectLinks} d-flex justify-content-end mt-2`}
            >
              {/* <a
                href="https://github.com/ritik7905/crypto-verse"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiGithub />
              </a> */}
              <a
                href="https://www.royalenfield.com/in/en/reown/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiExternalLink />
              </a>
            </div>
          </motion.div>
        </Col>

        <Col xl={5} lg={5} md={5} sm={12} xs={12}>
          <div className={styles.projectDetails_2}>
            <p className={`${styles.projectOverline} text-start mb-0`}>
              Featured Project
            </p>
            <h3 className={`${styles.projectTitle} text-start`}>
              <a
                href="https://www.royalenfield.com/in/en/tours/"
                target="_blank"
                rel="noreferrer"
              >
                Royal Enfield Tours
              </a>
            </h3>
            <p className={`${styles.desc} p-3`}>
              Official site of Royal Enfield bikes in India. Explore
              destinations around the world and book your trip with Royal
              Enfield Tours.
            </p>
            <ul
              className={`${styles.projectTechList} list-group flex-row justify-content-start`}
            >
              <li className="list-group-item border-0 bg-transparent pb-0">
                HTML 5
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                CSS 3
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                SCSS
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                AEM
              </li>
              <li className="list-group-item border-0 bg-transparent pb-0">
                JavaScript
              </li>
            </ul>
            <div
              className={`${styles.projectLinks} d-flex justify-content-start mt-2`}
            >
              {/* <a
                href="https://github.com/ritik7905/study_center"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiGithub />
              </a> */}
              <a
                href="https://www.royalenfield.com/in/en/tours/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={6} sm={12} xs={12}>
          <div className={styles.projectImg_2}>
            <a
              href="https://www.royalenfield.com/in/en/tours/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={project_2} alt="project-1" className="img-fluid" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PortfolioScreen;
