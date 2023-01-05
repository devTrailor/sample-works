import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import { cardData } from "./data";

// styles
import styles from "./styles.module.scss";

const OurServices = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageHeader mainTitle={"What I Do?"} num="02" />
        </Col>
      </Row>
      <Row className={`${styles.ourServices} justify-content-center`}>
        {cardData.map((curElm, i) => {
          return (
            <Col key={i}>
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
