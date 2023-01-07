import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import Image from "next/image";
import project_1 from "../../assets/images/project-1.png";
import project_2 from "../../assets/images/project-2.png";
import { FiGithub, FiExternalLink } from "react-icons/fi";

// styles
import styles from "./styles.module.scss";

const PortfolioScreen = () => {
  return (
    <Container>
      <PageHeader num={"03"} mainTitle={"Some Things I’ve Built"} />
      <Row className={`${styles.portfolioWrapper} align-items-center`}>
        <Col xl={6}>
          <div className={styles.projectImg_1}>
            <a
              href="https://will-crypto.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={project_1} alt="project-1" className="img-fluid" />
            </a>
          </div>
        </Col>
        <Col xl={5}>
          <div className={styles.projectDetails_1}>
            <p className={`${styles.projectOverline} text-end mb-0`}>
              Featured Project
            </p>
            <h3 className={`${styles.projectTitle} text-end`}>
              <a
                href="https://will-crypto.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Crypto Verse
              </a>
            </h3>
            <p className={`${styles.desc} p-3`}>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm
            </p>
            <ul
              className={`${styles.projectTechList} list-group flex-row justify-content-end`}
            >
              <li className="list-group-item border-0 bg-transparent">
                React.Js
              </li>
              <li className="list-group-item border-0 bg-transparent">
                Redux.Js
              </li>
              <li className="list-group-item border-0 bg-transparent">
                Antd Design
              </li>
            </ul>

            <div
              className={`${styles.projectLinks} d-flex justify-content-end`}
            >
              <a
                href="https://github.com/ritik7905/crypto-verse"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiGithub />
              </a>
              <a
                href="https://will-crypto.netlify.app/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </Col>

        <Col xl={5}>
          <div className={styles.projectDetails_2}>
            <p className={`${styles.projectOverline} text-start mb-0`}>
              Featured Project
            </p>
            <h3 className={`${styles.projectTitle} text-start`}>
              <a
                href="https://will-crypto.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Study Center
              </a>
            </h3>
            <p className={`${styles.desc} p-3`}>
              A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm,
              and more. Available on Visual Studio Marketplace, Package Control,
              Atom Package Manager, and npm
            </p>
            <ul
              className={`${styles.projectTechList} list-group flex-row justify-content-start`}
            >
              <li className="list-group-item border-0 bg-transparent">
                HTML 5
              </li>
              <li className="list-group-item border-0 bg-transparent">CSS 3</li>
              <li className="list-group-item border-0 bg-transparent">
                JavaScript
              </li>
            </ul>

            <div
              className={`${styles.projectLinks} d-flex justify-content-start`}
            >
              <a
                href="https://github.com/ritik7905/study_center"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiGithub />
              </a>
              <a
                href="https://study-center-kappa.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className={`${styles.link} mx-2`}
              >
                <FiExternalLink />
              </a>
            </div>
          </div>
        </Col>
        <Col xl={6}>
          <div className={styles.projectImg_2}>
            <a
              href="https://will-crypto.netlify.app/"
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
