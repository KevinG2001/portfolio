import React from "react";
import navStyles from "../Styling/navBar/navStyles.module.scss";

function Navbar() {
  return (
    <>
      <nav className={navStyles.navContainer}>
        <h1 className={navStyles.navLogo}>Logo</h1>
        <div className={navStyles.navLinkWrapper}>
          <ul className={navStyles.navUL}>
            <li className={navStyles.navLink}>Home</li>
            <li className={navStyles.navLink}>About Me</li>
            <li className={navStyles.navLink}>Projects</li>
            <li className={navStyles.navLink}>Contact Me</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
