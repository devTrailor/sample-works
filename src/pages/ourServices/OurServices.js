import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { BsCodeSlash, BsSoundwave } from "react-icons/bs";
import { AiOutlineHtml5 } from "react-icons/ai";

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
  return (
    <Container>
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
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default OurServices;
