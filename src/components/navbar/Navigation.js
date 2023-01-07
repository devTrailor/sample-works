import Link from "next/link";
import React from "react";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Nav,
  Navbar,
} from "react-bootstrap";
import Logo from "../logo/Logo";

// Styles
import styles from "./styles.module.scss";
const Navigation = () => {
  return (
    <Navbar expand="lg" className={styles.custom_nav}>
      <Container>
        <Navbar.Brand href="#home">
          {/* Logo */}
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#service">What I Do</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume" className={`${styles.btn_resume} btn`}>
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
