import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import SkillCard from "../../components/skillCard/SkillCard";
import { AiOutlineAntDesign } from "react-icons/ai";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiSass,
  DiReact,
  DiGit,
} from "react-icons/di";
import { SiRedux, SiAntdesign } from "react-icons/si";
import styles from "./styles.module.scss";

const Skills = () => {
  const skillCard = [
    { icon: <DiHtml5 />, title: "HTML 5" },
    { icon: <DiCss3Full />, title: "CSS 3" },
    { icon: <DiSass />, title: "SASS" },
    { icon: <DiJavascript1 />, title: "JAVASCRIPT" },
    { icon: <DiReact />, title: "REACT.JS" },
    { icon: <SiRedux />, title: "REDUX.JS" },
    { icon: <AiOutlineAntDesign />, title: "ANTD" },
    { icon: <DiGit />, title: "GIT" },
  ];
  return (
    <Container>
      <PageHeader num={"04"} mainTitle={"Skills & Experience"} />
      <div className={styles.skillsCon}>
        {skillCard?.map((curElm, i) => {
          return (
            <div key={i}>
              <SkillCard skillIcon={curElm.icon} skillTitle={curElm.title} />
            </div>
          );
        })}
      </div>
    </Container>
  );
};

export default Skills;
