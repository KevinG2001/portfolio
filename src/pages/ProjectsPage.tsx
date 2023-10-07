import Styles from "../Styling/pages/projects.module.scss";
import HairsalonProject from "../components/Projects/HairsalonProject";
import Teamproject from "../components/Projects/Teamproject";
import WeatherWebsite from "../components/Projects/WeatherWebsite";

function Projects() {
  return (
    <>
      <div className={Styles.projectContainer}>
        <HairsalonProject />
        <Teamproject />
        <WeatherWebsite />
      </div>
    </>
  );
}

export default Projects;
