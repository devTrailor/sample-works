import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { BsCodeSlash, BsSoundwave } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";
import { easeIn, motion } from "framer-motion";

// styles
import styles from "./styles.module.scss";

const OurServices = () => {
  const cardData = [
    {
      cardImg: <AiOutlineHtml5 />,
      cardTitle: "Web Design",
      cardDetail:
        "Specialized in creating visually stunning and user-friendly websites. I enjoy working with clients from various industries to bring their vision to life.",
      techs: "HTML5, CSS3, Bootstrap5, AEM",
    },
    {
      cardImg: <BsCodeSlash />,
      cardTitle: "Frontend Development",
      cardDetail:
        "Building responsive and interactive user interfaces using technologies such as HTML, CSS, JavaScript, React.js and Next.js etc. I'm passionate about building user-friendly and accessible websites that engage and delight users.",
      techs: "JavaScript (ES6+), React.Js, Next.Js, Ant.Design",
    },
    {
      cardImg: <BsSoundwave />,
      cardTitle: "Web Animation",
      cardDetail:
        "Specializing in creating engaging and interactive animations that bring websites to life. I'm passionate about creating unique and dynamic animations that enhance the user experience and communicate complex ideas effectively.",
      techs: "Motion Framer, GSAP etc..",
    },
  ];

  const servicesContainerVariants = {
    hidden: {
      opacity: 0,
      y: 200,
    },
    visible: {
      opacity: [0.5, 1],
      y: 0,
      transition: {
        staggerChildren: 0.5, // Controls the delay between each child's animation
      },
    },
  };

  const childCardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <Container>
      <motion.div
        variants={servicesContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Row>
          <Col>
            <PageHeader mainTitle={"What I Do?"} num="02" />
          </Col>
        </Row>
        <Row className={`${styles.ourServices} justify-content-center g-4`}>
          {cardData.map((curElm, i) => {
            return (
              <Col key={i} xl={4} lg={6} md={6} sm={12}>
                <ServiceCard
                  cardImg={curElm.cardImg}
                  cardTitle={curElm.cardTitle}
                  cardDetail={curElm.cardDetail}
                  techs={curElm.techs}
                  childCardVariants={childCardVariants}
                />
              </Col>
            );
          })}
        </Row>
      </motion.div>
    </Container>
  );
};

export default OurServices;
