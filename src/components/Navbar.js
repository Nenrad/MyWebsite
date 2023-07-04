import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import * as styles from "../styles/navbar.module.css";
import menuOpenIcon from "../images/menuopenicon.svg";
import menuCloseIcon from "../images/menucloseicon.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isWide, setIsWide] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      const mediaQuery = window.matchMedia("(min-width: 1050px)");
      setIsWide(mediaQuery.matches);

      if (mediaQuery.matches) {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const StyledLi = styled.li`
    list-style-type: none;
  `;
  const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
  `;

  return (
    <nav className={styles.navbar_container}>
      <div className={styles.name_container}>
        <h1 className={styles.name}>Sean O'Gary</h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className={styles.icon_container}
        >
          {isOpen ? (
            <img className={styles.open_icon} src={menuCloseIcon}></img>
          ) : (
            <img className={styles.close_icon} src={menuOpenIcon}></img>
          )}
        </div>
      </div>
      {isOpen ? (
        <ul className={styles.navbar}>
          <StyledLi>
            <StyledLink to="/about">About</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/projects">Projects</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/blog">Blog</StyledLink>
          </StyledLi>
          <StyledLi>
            <StyledLink to="/contact">Contact Me</StyledLink>
          </StyledLi>
        </ul>
      ) : null}
    </nav>
  );
}
