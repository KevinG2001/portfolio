import { Link } from "react-router-dom";
import Styles from "../../Styling/pages/projects.module.scss";

function Teamproject() {
  return (
    <>
      <div className={Styles.container}>
        <img src="" alt="Img" className={Styles.projectImg} />
        <div className={Styles.descriptionWrapper}>
          <h1 className={Styles.title}>Food and Drink Website</h1>
          <div className={Styles.paragraph}>
            This is a project I made in college for a group project. It is a
            drink website that recommends drinks depending on the users drinks.
          </div>
          <div className={Styles.paragraph}>
            The frontend is made with React.js and TypeScript and styled with
            SASS.
          </div>
          <div className={Styles.paragraph}>
            We used Node.js and express.js to create our own REST API and we
            hosted a MySQL database using Microsoft Azure.
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
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Teamproject;
