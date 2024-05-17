import { useEffect } from "react";
import Styles from "../Styling/pages/projectList.module.scss";
import hairsalonImg from "../assests/websitePics/HairSalonWebsite.png";
import drinkRecImg from "../assests/websitePics/DrinkRecSite.png";
import passwordMangerImg from "../assests/websitePics/PasswordManager.png";
import weatherWebsiteImg from "../assests/websitePics/WeatherWebsite.png";
import { Link } from "react-router-dom";

function Projects() {
  useEffect(() => {
    const projectItems = document.querySelectorAll(`.${Styles.projectItem}`);

    projectItems.forEach((item) => {
      const preview = item.querySelector(
        `.${Styles.projectPreview}`
      ) as HTMLElement | null;

      const handleMouseMove = (e: MouseEvent) => {
        if (preview) {
          const x = e.clientX;
          const y = e.clientY;

          preview.style.display = "block";
          preview.style.top = `${y + 10}px`;
          preview.style.left = `${x + 10}px`;
        }
      };

      const handleMouseLeave = () => {
        if (preview) {
          preview.style.display = "none";
        }
      };

      item.addEventListener("mousemove", handleMouseMove as EventListener);
      item.addEventListener("mouseleave", handleMouseLeave as EventListener);

      return () => {
        item.removeEventListener("mousemove", handleMouseMove as EventListener);
        item.removeEventListener(
          "mouseleave",
          handleMouseLeave as EventListener
        );
      };
    });
  }, []);

  return (
    <div className={Styles.projectContainer}>
      <div className={Styles.projectsWrapper}>
        <ul className={Styles.projectList}>
          <Link className={Styles.projectItem} to="/Projects/HairSalon">
            <div className={Styles.projectName}>Hair Salon</div>
            <div className={Styles.projectName}>Development</div>
            <img
              className={Styles.projectPreview}
              src={hairsalonImg}
              alt="Hair Salon Preview"
            />
          </Link>
          <Link className={Styles.projectItem} to="/Projects/TeamProject">
            <div className={Styles.projectName}>Team Project</div>
            <div className={Styles.projectName}>Design, Development</div>
            <img
              className={Styles.projectPreview}
              src={drinkRecImg}
              alt="DrinkRec Preview"
            />
          </Link>
          <Link className={Styles.projectItem} to="/Projects/WeatherWebsite">
            <div className={Styles.projectName}>Weather Website</div>
            <div className={Styles.projectName}>Design, Development</div>
            <img
              className={Styles.projectPreview}
              src={weatherWebsiteImg}
              alt="Weather Website Preview"
            />
          </Link>
          <Link className={Styles.projectItem} to="/Projects/PasswordManager">
            <div className={Styles.projectName}>Password Manager</div>
            <div className={Styles.projectName}>Design, Development</div>
            <img
              className={Styles.projectPreview}
              src={passwordMangerImg}
              alt="Password Manager Preview"
            />
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
