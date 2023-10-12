import Styles from "../../Styling/global/navStyles.module.scss";
import profilePic from "../../assests/profilePic.jpeg";
import linkdinPic from "../../assests/contact/linkedin.svg";
import githubPic from "../../assests/contact/github.svg";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import cv from "../../assests/CV_2023.pdf";

function Navbar() {
  const [activePage, setActivePage] = useState("");
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    setActivePage(currentPath);
  }, [location]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className={Styles.navContainer}>
        <div className={Styles.burgerMenu} onClick={toggleBurgerMenu}>
          <div
            className={`${Styles.burgerLine} ${
              isOpen ? Styles.activeLine1 : ""
            }`}
          ></div>
          <div
            className={`${Styles.burgerLine} ${
              isOpen ? Styles.activeLine2 : ""
            }`}
          ></div>
          <div
            className={`${Styles.burgerLine} ${
              isOpen ? Styles.activeLine3 : ""
            }`}
          ></div>
        </div>
        <div
          className={`${Styles.dropdown} ${
            isOpen ? Styles.activeDropdown : ""
          }`}
        >
          <div className={Styles.navWrapper}>
            <div className={Styles.navTitleWrapper}>
              <img src={profilePic} alt="" className={Styles.profilePic} />
              <div className={Styles.title}>Kevin Glennon</div>
              <div className={Styles.subTitle}>Software Engineer</div>
            </div>
            <div className={Styles.navList}>
              <Link
                to={"/"}
                className={
                  Styles.navLink + (activePage === "/" ? " active" : "")
                }
              >
                About Me {activePage === "/" && ">"}
              </Link>
              <Link
                to={"/Projects"}
                className={
                  Styles.navLink + (activePage === "/Projects" ? " active" : "")
                }
              >
                Projects {activePage === "/Projects" && ">"}
              </Link>
            </div>
            <div className={Styles.navList}>
              <Link
                to={"/Contact"}
                className={
                  Styles.navLink + (activePage === "/Contact" ? " active" : "")
                }
              >
                Contact Me {activePage === "/Contact" && ">"}
              </Link>
              <a
                href={cv}
                className={Styles.navLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                CV
              </a>
              <div className={Styles.contactSocials}>
                <Link
                  to={"https://www.linkedin.com/in/kevin-glennon-98b511227/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={linkdinPic}
                    alt="Linkdin"
                    className={Styles.imgTag}
                  />
                </Link>
                <Link
                  to={"https://github.com/KevinG2001?tab=repositories"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={githubPic} alt="Github" className={Styles.imgTag} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
