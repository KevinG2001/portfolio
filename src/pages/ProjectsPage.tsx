import { useEffect } from "react";
import Styles from "../Styling/pages/projectList.module.scss";
// import HairsalonProject from "../components/Projects/HairsalonProject";
// import PasswordManager from "../components/Projects/PasswordManager";
// import Portfolio from "../components/Projects/Portfolio";
// import Teamproject from "../components/Projects/Teamproject";
// import WeatherWebsite from "../components/Projects/WeatherWebsite";
import hairsalonImg from "../assests/websitePics/HairSalonWebsite.png";

function Projects() {
  useEffect(() => {
    const projectItems = document.querySelectorAll(`.${Styles.projectItem}`);

    projectItems.forEach((item) => {
      const preview = item.querySelector(`.${Styles.projectPreview}`);

      item.addEventListener("mousemove", (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;

        preview.style.display = "block";
        preview.style.top = `${y + 10}px`;
        preview.style.left = `${x + 10}px`;
      });

      item.addEventListener("mouseleave", () => {
        preview.style.display = "none";
      });
    });

    return () => {
      projectItems.forEach((item) => {
        item.removeEventListener("mousemove", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className={Styles.projectContainer}>
        <div className={Styles.projectsWrapper}>
          <ul className={Styles.projectList}>
            <li className={Styles.projectItem}>
              <div className={Styles.projectName}>Hair Salon</div>
              <div className={Styles.projectName}>Development</div>
              <img
                className={Styles.projectPreview}
                src={hairsalonImg}
                alt="Hair Salon Preview"
              />
            </li>
            <li className={Styles.projectItem}>
              <div className={Styles.projectName}>Team Project</div>
              <div className={Styles.projectName}>Design, Development</div>
            </li>
            <li className={Styles.projectItem}>
              <div className={Styles.projectName}>Weather Website</div>
              <div className={Styles.projectName}>Design, Development</div>
            </li>
            <li className={Styles.projectItem}>
              <div className={Styles.projectName}>Password Manager</div>
              <div className={Styles.projectName}>Design, Development</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projects;
