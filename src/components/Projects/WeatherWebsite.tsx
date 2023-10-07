import { Link } from "react-router-dom";
import Styles from "../../Styling/pages/projects.module.scss";
import websiteImg from "../../assests/websitePics/WeatherWebsite.png";

function WeatherWebsite() {
  return (
    <>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Weather Website</h1>
        <div className={Styles.wrapper}>
          <img src={websiteImg} alt="Img" className={Styles.projectImg} />
          <div className={Styles.descriptionWrapper}>
            <div className={Styles.paragraph}>
              This is a project I made to practice with using APIs. You can type
              in an country or city and it will give you the weather.
            </div>
            <div className={Styles.paragraph}>
              I used basic HTML and JavaScript and styled using CSS.
            </div>
            <div className={Styles.btnWrapper}>
              <Link
                to="https://keving2001.github.io/weatherWebsite/"
                className={Styles.btn}
              >
                View Project
              </Link>
              <Link
                to="https://github.com/KevinG2001/weatherWebsite"
                className={Styles.btn}
              >
                View Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherWebsite;
