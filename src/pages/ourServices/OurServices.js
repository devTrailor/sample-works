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
        "I value simple content structure, clean design patterns, and thoughtful interactions.",
      techs: "HTML 5, CSS3, Bootstrap 5",
    },
    {
      cardImg: <BsCodeSlash />,
      cardTitle: "Frontend Development",
      cardDetail: "fhjhjhjhjjkhkjhffiuytruifjkdfhdfgs",
      techs:
        "HTML5, CSS3, SCSS, Bootstrap 5, JavaScript (ES6+), React.Js, Next.Js, Ant.Design",
    },
    {
      cardImg: <BsSoundwave />,
      cardTitle: "Web Animation",
      cardDetail: "fhjhjhjhjjkhkjhffiuytruifjkdfhdfgs",
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
            <Col key={i} xl={4} lg={4} md={6} sm={12}>
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
