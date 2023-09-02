import Styles from "../../Styling/global/navStyles.module.scss";
import profilePic from "../../assests/profilePic.jpeg";
import linkdinPic from "../../assests/contact/linkedin.svg";
import githubPic from "../../assests/contact/github.svg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className={Styles.navContainer}>
        <div className={Styles.navWrapper}>
          <div className={Styles.navTitleWrapper}>
            <img src={profilePic} alt="" className={Styles.profilePic} />
            <div className={Styles.title}><b>Kevin Glennon</b></div>
            <div className={Styles.subTitle}>Software Engineer</div>
          </div>
          <div className={Styles.navList}>
            <Link to={"/"} className={Styles.navLink}>About Me</Link>
            <Link to={"/Projects"} className={Styles.navLink}>Projects</Link>
          </div>
          <div className={Styles.navList}>
            <Link to={"/Contact"} className={Styles.navLink}>Contact Me</Link>
            <Link to={"/CV"} className={Styles.navLink}>CV</Link>
            <div className={Styles.contactSocials}>
              <img src={linkdinPic} alt="Linkdin" className={Styles.imgTag}/>
              <img src={githubPic} alt="Github" className={Styles.imgTag}/>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;