import { Link } from "react-router-dom";
import Style from "../../Styling/global/sidebarStyle.module.scss";
import linkdinImg from "../../assests/contact/linkedin.svg";
import githubImg from "../../assests/contact/github.svg";
import cv from "../../assests/CV_2023.pdf";

interface SidebarProps {
  showSidebar: boolean;
}

function Sidebar({ showSidebar }: SidebarProps) {
  return (
    <div className={`${Style.container} ${showSidebar ? Style.show : ""}`}>
      <div className={Style.wrapper} id={Style.hideThis}>
        This will be hidden
      </div>
      <div className={Style.wrapper}>
        <div className={Style.linkWrapper}>
          <Link to="/About" className={Style.sidebarBtn}>
            About
          </Link>
          <Link to="Projects" className={Style.sidebarBtn}>
            Projects
          </Link>
          <Link to="/Contact" className={Style.sidebarBtn}>
            Contact
          </Link>
          <a className={Style.sidebarBtn} href={cv}>
            CV
          </a>
        </div>
      </div>
      <div className={Style.wrapper}>
        <div className={Style.socialWrapper}>
          <div className={Style.socialTitle}>Socials</div>
          <div className={Style.socialBtnWrapper}>
            <a
              href="https://www.linkedin.com/in/kevinglennon01/"
              className={Style.socialImg}
            >
              <img src={linkdinImg} alt="" className={Style.socialImgTwo} />
            </a>
            <a href="https://github.com/KevinG2001" className={Style.socialImg}>
              <img src={githubImg} alt="" className={Style.socialImgTwo} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
