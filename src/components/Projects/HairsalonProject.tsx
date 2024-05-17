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
            This is my first frontend project. It's a website for a hair salon,
            with the design being copied from "Debonair". I wanted to do this
            project to practice working on frontend technologies and maybe
            backend. I am happy with how it is turning out and looking forward
            to going back to it and adding a backend with a booking system.
          </div>
          <div className={Styles.paragraph}>
            The website is developed using React.js and TypeScript, using these
            technologies to create a dynamic and type-safe application. For
            styling I used SASS which allows for a more modular and maintainable
            CSS. Along with using React.js the site benefits from a
            component-based architecture which would make it easier to maintain.
          </div>
          <div className={Styles.paragraph}>
            Typescript ensures type safety, reducing the likelihood of runtime
            errors and improving the quality of the code. Along with that SASS
            enhances the styling process by having features like variables and
            nesting resulting in a more organized and scalable stylesheet.
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
