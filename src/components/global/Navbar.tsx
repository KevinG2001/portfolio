import { useEffect, useState } from "react";
import navStyles from "../../styling/global/navStyles.module.scss";
import { Link } from "react-router-dom";
import profilePic from "../../assests/profilePic.jpeg";
import linkedinLogo from "../../assests/contact/linkedin.svg";
import githubLogo from "../../assests/contact/github.svg";
import cv from "../../assests/CV_2023.pdf";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [screenSize, setScreenSize] = useState(getDimension());

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  function getDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  return (
    <nav className={navStyles.navContainer}>
      <div className={navStyles.navTitle}>
        <Link to="/">
          <img src={profilePic} alt="" className={navStyles.navLogo} />
        </Link>
        <div className={navStyles.burgerMenu} onClick={toggleBurgerMenu}>
          <div
            className={`${navStyles.burgerLine} ${
              isOpen ? navStyles.activeLine1 : ""
            }`}
          ></div>
          <div
            className={`${navStyles.burgerLine} ${
              isOpen ? navStyles.activeLine2 : ""
            }`}
          ></div>
          <div
            className={`${navStyles.burgerLine} ${
              isOpen ? navStyles.activeLine3 : ""
            }`}
          ></div>
        </div>
      </div>
      <div
        className={`${navStyles.dropdown} ${
          isOpen ? navStyles.activeDropdown : ""
        }`}
      >
        <ul className={navStyles.navUl}>
          <Link to="/About" className={navStyles.navLink}>
            About
          </Link>
          <Link to="/Projects" className={navStyles.navLink}>
            Projects
          </Link>
          <Link to="/Contact" className={navStyles.navLink}>
            Contact
          </Link>
          <a
            href={cv}
            className={navStyles.navLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
        </ul>
        {isOpen && (
          <div className={navStyles.navSocials}>
            <img src={linkedinLogo} alt="" className={navStyles.navSocailImg} />
            <img src={githubLogo} alt="" className={navStyles.navSocailImg} />
          </div>
        )}
      </div>
      {screenSize.width >= 960 ? (
        <div className={navStyles.navSocials}>
          <img src={linkedinLogo} alt="" className={navStyles.navSocailImg} />
          <img src={githubLogo} alt="" className={navStyles.navSocailImg} />
        </div>
      ) : null}
    </nav>
  );
}

export default Navbar;
