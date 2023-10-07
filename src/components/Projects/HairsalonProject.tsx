import { Link } from "react-router-dom";
import Styles from "../../Styling/pages/projects.module.scss";
import websiteImg from "../../assests/websitePics/HairSalonWebsite.png";

function HairsalonProject() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>HairSalon</h1>
      <div className={Styles.wrapper}>
        <img src={websiteImg} alt="Img" className={Styles.projectImg} />
        <div className={Styles.descriptionWrapper}>
          <div className={Styles.paragraph}>
            This is my first project, Its a hair salon made in React.
          </div>
          <div className={Styles.paragraph}>
            The frontend is made with React.js and it is styled using SASS
          </div>
          <div className={Styles.btnWrapper}>
            <Link
              to="https://mango-bush-027b92c03.3.azurestaticapps.net/"
              className={Styles.btn}
            >
              View Project
            </Link>
            <Link
              to="https://github.com/KevinG2001/hairSalonWebsite"
              className={Styles.btn}
            >
              View Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HairsalonProject;
