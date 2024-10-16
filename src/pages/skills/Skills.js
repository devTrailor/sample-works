import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../components/pageHeader/PageHeader";
import SkillCard from "../../components/skillCard/SkillCard";
import { AiOutlineAntDesign } from "react-icons/ai";
import { delay, motion } from "framer-motion";
import {
  DiHtml5,
  DiCss3Full,
  DiJavascript1,
  DiSass,
  DiReact,
  DiGit,
} from "react-icons/di";
import { SiRedux, SiTailwindcss, SiBootstrap } from "react-icons/si";
import styles from "./styles.module.scss";

const Skills = () => {
  const skillCard = [
    { icon: <DiHtml5 />, title: "HTML 5" },
    { icon: <DiCss3Full />, title: "CSS 3" },
    { icon: <DiSass />, title: "SASS" },
    { icon: <SiBootstrap />, title: "Bootstrap 5" },
    { icon: <SiTailwindcss />, title: "Tailwind CSS" },
    { icon: <DiJavascript1 />, title: "JAVASCRIPT" },
    { icon: <DiReact />, title: "REACT.JS" },
    { icon: <SiRedux />, title: "REDUX.JS" },
    { icon: <AiOutlineAntDesign />, title: "ANTD" },
    { icon: <DiGit />, title: "GIT" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 40 },
    },
  };
  return (
    <Container>
      <PageHeader num={"04"} mainTitle={"Skills & Experience"} />
      <motion.div
        className={styles.skillsCon}
        variants={containerVariants}
        initial="hidden"
        whileInView={"show"}
      >
        {skillCard?.map((curElm, i) => {
          return (
            <motion.div key={i} variants={childVariants}>
              <SkillCard skillIcon={curElm.icon} skillTitle={curElm.title} />
            </motion.div>
          );
        })}
      </motion.div>
    </Container>
  );
};

export default Skills;
