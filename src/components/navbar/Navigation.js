import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../logo/Logo";
import { RiMenu2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";

// Styles
import styles from "./styles.module.scss";
const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

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

  const showNav = () => {
    setShowMenu(!showMenu);
  };

  const closeNav = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [showMenu]);

  return (
    <nav expand="lg" className={styles.custom_nav}>
      <Container>
        <div className={styles.inner}>
          <Link href="#home" className={styles.nav_logo}>
            {/* Logo */}
            <Logo />
          </Link>
          <ul
            className={`${styles.nav_links} ${showMenu ? styles.showNav : ""}`}
          >
            {navigation.map((elm) => {
              return (
                <li
                  className={styles.links}
                  key={elm.path}
                  onClick={() => closeNav()}
                >
                  <Link href={elm.path}>{elm.name}</Link>
                </li>
              );
            })}
            <MdClose className={styles.iconClose} onClick={() => closeNav()} />
          </ul>
          <RiMenu2Fill className={styles.iconMenu} onClick={() => showNav()} />
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
