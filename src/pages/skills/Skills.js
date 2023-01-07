import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import SkillCard from "../../components/skillCard/SkillCard";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiSass,
  DiReact,
  DiGit,
} from "react-icons/di";
import { SiRedux, SiAntdesign } from "react-icons/si";

const Skills = () => {
  const skillCard = [
    { icon: <DiHtml5 />, title: "HTML 5" },
    { icon: <DiCss3Full />, title: "CSS 3" },
    { icon: <DiSass />, title: "SASS" },
    { icon: <DiJavascript1 />, title: "JAVASCRIPT" },
    { icon: <DiReact />, title: "REACT.JS" },
    { icon: <SiRedux />, title: "REDUX.JS" },
    { icon: <DiGit />, title: "GIT" },
  ];
  return (
    <Container>
      <PageHeader num={"04"} mainTitle={"Skills & Experience"} />
      <Row className="justify-content-between">
        {skillCard?.map((curElm, i) => {
          return (
            <Col key={i} xl={1} lg={1} md={3} sm={6} xs={6}>
              <SkillCard skillIcon={curElm.icon} skillTitle={curElm.title} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Skills;
