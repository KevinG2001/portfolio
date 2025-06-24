import { Link } from "react-router-dom";
import Style from "../../Styling/global/sidebarStyle.module.scss";
import linkdinImg from "../../assests/contact/linkedin.svg";
import githubImg from "../../assests/contact/github.svg";
import cv from "../../assests/CV_2023.pdf";

interface SidebarProps {
  showSidebar: boolean;
  closeSidebar: () => void;
}

function Sidebar({ showSidebar, closeSidebar }: SidebarProps) {
  return (
    <div className={`${Style.container} ${showSidebar ? Style.show : ""}`}>
      <div className={Style.wrapper} id={Style.hideThis}>
        This will be hidden
      </div>
      <div className={Style.wrapper}>
        <div className={Style.linkWrapper}>
          <Link to="/About" className={Style.sidebarBtn} onClick={closeSidebar}>
            About
          </Link>
          <Link
            to="/Projects"
            className={Style.sidebarBtn}
            onClick={closeSidebar}
          >
            Projects
          </Link>
          <Link
            to="/Contact"
            className={Style.sidebarBtn}
            onClick={closeSidebar}
          >
            Contact
          </Link>
          <a className={Style.sidebarBtn} href={cv} onClick={closeSidebar}>
            CV
          </a>
        </div>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.socialWrapper}>
          <div className={Style.socialTitle}>Socials</div>
          <div className={Style.socialBtnWrapper}>
            <a href="https://www.linkedin.com/in/kevinglennon01/">
              <img
                src={linkdinImg}
                alt="LinkedIn"
                className={Style.socialImg}
              />
            </a>
            <a href="https://github.com/KevinG2001">
              <img src={githubImg} alt="GitHub" className={Style.socialImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
