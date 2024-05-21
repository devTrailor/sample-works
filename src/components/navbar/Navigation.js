import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../logo/Logo";

// Styles
import styles from "./styles.module.scss";
const Navigation = () => {
  const navigation = [
    {
      name: "Home",
      path: "#home",
    },
    {
      name: "about me",
      path: "#about",
    },
    {
      name: "what i do",
      path: "#service",
    },
    {
      name: "portfolio",
      path: "#portfolio",
    },
    {
      name: "skills",
      path: "#skills",
    },
    {
      name: "contact",
      path: "#contact",
    },
  ];
  return (
    <Navbar expand="lg" className={styles.custom_nav}>
      <Container>
        <Link href="#home" className={styles.nav_logo}>
          {/* Logo */}
          <Logo />
        </Link>
        <ul className={styles.nav_links}>
          {navigation.map((elm) => {
            return (
              <li className={styles.links} key={elm.path}>
                <Link href={elm.path}>{elm.name}</Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Navbar>
  );
};

export default Navigation;
