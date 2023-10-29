import { Link } from "react-router-dom";
import Styles from "../../Styling/pages/projects.module.scss";
import Website from "../../assests/websitePics/PortfolioWebsite.png";

function Portfolio() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Portfolio</h1>
      <div className={Styles.wrapper}>
        <img src={Website} alt="Img" className={Styles.projectImg} />
        <div className={Styles.descriptionWrapper}>
          <div className={Styles.paragraph}>
            The site your on right now is a project I made so I can show some of
            my other past projects.
          </div>
          <div className={Styles.paragraph}>
            The website is made using React.js and TypeScript, It is styled
            using SASS.
          </div>
          <div className={Styles.btnWrapper}>
            <Link
              to="https://github.com/KevinG2001/portfolio"
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

export default Portfolio;
