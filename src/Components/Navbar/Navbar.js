import React from "react";
import "./Navbar.css";

import LogoPrimary from "../../Assets/Navbar/Lumineux-Logo-Primary.png";
import LogoSecondary from "../../Assets/Navbar/Lumineux-Logo-Secondary.png";

import { useState, useEffect } from "react";

import { NavLink, useLocation } from "react-router-dom";

function Navbar({ transparent }) {
  const location = useLocation();
  const currentPath = location.pathname;

  //   const [underlineRight, setUnderlineRight] = useState(0);
  //   const [changedSide, setChangedSide] = useState("");
  //   const [underlineStyles, setUnderlineStyles] = useState({
  //     width: `${underlineWidth}px`,
  //   });

  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  //   const updateUnderline = () => {
  //     const activeLink = document.querySelector(".active-link");
  //     if (activeLink) {
  //       const linkWidth = activeLink.offsetWidth;
  //       const linkOffsetLeft = activeLink.offsetLeft;
  //       console.log("Link Offset left", linkOffsetLeft);
  //       console.log("underline left", underlineLeft);
  //       if (linkOffsetLeft > underlineLeft) {
  //         console.log("moved to the right");
  //         // const linkOffsetRight = activeLink.offsetRight;
  //         const linkOffsetRight = linkOffsetLeft + underlineLeft;
  //         setChangedSide("right");
  //         console.log("side=", changedSide);
  //         setUnderlineRight(linkOffsetRight);
  //         setUnderlineWidth(linkOffsetRight + linkWidth * 5);

  //         setTimeout(() => {
  //           setUnderlineWidth(linkWidth);
  //           setUnderlineRight(linkOffsetRight);
  //         }, 500);
  //       } else if (linkOffsetLeft < underlineLeft) {
  //         console.log("moved to the left");
  //         setChangedSide("left");
  //         setUnderlineLeft(linkOffsetLeft);
  //         setUnderlineWidth(linkOffsetLeft - linkWidth * 5);

  //         setTimeout(() => {
  //           setUnderlineWidth(linkWidth);
  //           setUnderlineLeft(linkOffsetLeft);
  //         }, 500);
  //       }
  //     }
  //   };

  const updateUnderline = () => {
    const activeLink = document.querySelector(".active-link");
    if (activeLink) {
      const linkWidth = activeLink.offsetWidth;
      const linkOffsetLeft = activeLink.offsetLeft;
      setUnderlineWidth(linkWidth);
      setUnderlineLeft(linkOffsetLeft);
    }
  };

  useEffect(() => {
    updateUnderline();
  }, [currentPath]);

  //   useEffect(() => {
  //     const activeLink = document.querySelector(".active-link");
  //     const newStyles = {
  //       width: `${underlineWidth}px`,
  //     };
  //     if (activeLink) {
  //       const linkWidth = activeLink.offsetWidth;
  //       const linkOffsetLeft = activeLink.offsetLeft;
  //       setUnderlineWidth(linkWidth);
  //       setUnderlineLeft(linkOffsetLeft);
  //       newStyles.left = `${underlineLeft}px`;
  //       setUnderlineStyles(newStyles);
  //     }
  //   }, []);

  //   useEffect(() => {
  //     // Calculate the new styles based on changedSide
  //     const newStyles = {
  //       width: `${underlineWidth}px`,
  //     };

  //     if (changedSide === "left") {
  //       newStyles.left = `${underlineLeft}px`;
  //     } else if (changedSide === "right") {
  //       newStyles.right = `${underlineRight}px`;
  //     }
  //     console.log(newStyles);

  //     // Update underlineStyles state
  //     setUnderlineStyles(newStyles);
  //   }, [changedSide, underlineWidth, underlineLeft, underlineRight]);

  return (
    <div
      className={`navbar-component ${
        transparent ? "transparent" : "notTransparent"
      }`}
    >
      <NavLink to="/">
        <img src={LogoSecondary} alt="Logo" />
      </NavLink>
      <ul className="nav-menu-list">
        <div
          className="underline"
          style={{
            width: `${underlineWidth}px`,
            left: `${underlineLeft}px`,
          }}
        ></div>
        <li>
          <NavLink
            to="/"
            exact
            activeClassName="active-link"
            className={currentPath === "/" ? "active-link" : "inactive-link"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            activeClassName="active-link"
            className={
              currentPath === "/about" ? "active-link" : "inactive-link"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="nav-logo-container">
          <img src={LogoPrimary} alt="Logo 2" />
        </li>
        <NavLink
          to="/properties"
          activeClassName="active-link"
          className={
            currentPath === "/properties" ? "active-link" : "inactive-link"
          }
        >
          Properties
        </NavLink>
        <NavLink
          to="/blog"
          activeClassName="active-link"
          className={currentPath === "/blog" ? "active-link" : "inactive-link"}
        >
          Blog
        </NavLink>
      </ul>
      <button className="button-primary">
        <NavLink to="/contact">Contact us</NavLink>
      </button>
    </div>
  );
}

export default Navbar;
