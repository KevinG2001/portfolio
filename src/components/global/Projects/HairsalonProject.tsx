import { Link } from "react-router-dom";
import Styles from "../../../Styling/pages/projects.module.scss";

function HairsalonProject() {
  return (
    <div className={Styles.container}>
      <img src="" alt="Img" className={Styles.projectImg} />
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
          <Link to="" className={Styles.btn}>
            View Code
          </Link>{" "}
        </div>
      </div>
    </div>
  );
}

export default HairsalonProject;
