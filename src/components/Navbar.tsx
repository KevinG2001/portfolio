import React from "react";
import Styles from "../Styling/navBar/navStyles.module.scss";
import profilePic from "../assests/profilePic.jpeg";
function Navbar() {
  return (
    <>
      <nav className={Styles.navContainer}>
        <div className={Styles.navWrapper}>
          <div className={Styles.navTitleWrapper}>
            <img src={profilePic} alt="" className={Styles.profilePic} />
            <div className={Styles.title}>Software Engineer</div>
          </div>
          <div className={Styles.navList}>
            <div className={Styles.navLink}>Home</div>
            <div className={Styles.navLink}>About Me</div>
            <div className={Styles.navLink}>Projects</div>
          </div>
          <div className={Styles.contactList}>
            <div>Contact Me</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
