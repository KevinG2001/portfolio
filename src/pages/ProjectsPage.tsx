import Styles from "../Styling/pages/projectList.module.scss";
// import HairsalonProject from "../components/Projects/HairsalonProject";
// import PasswordManager from "../components/Projects/PasswordManager";
// import Portfolio from "../components/Projects/Portfolio";
// import Teamproject from "../components/Projects/Teamproject";
// import WeatherWebsite from "../components/Projects/WeatherWebsite";

function Projects() {
  return (
    <>
      <div className={Styles.projectContainer}>
        <div className={Styles.projectsWrapper}>
          <ul className={Styles.projectList}>
            <li className={Styles.projectItem}>
              <div>Hair Salon</div>
              <div>Web Development</div>
            </li>
            <li className={Styles.projectItem}>
              <div>Team Project</div>
              <div>Design, Web Development</div>
            </li>
            <li className={Styles.projectItem}>
              <div>Weather Website</div>
              <div>Design, Web Development</div>
            </li>
            <li className={Styles.projectItem}>
              <div>Password Manager</div>
              <div>Design, Software Development</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Projects;
