import Styles from "../Styling/pages/projects.module.scss";
import HairsalonProject from "../components/Projects/HairsalonProject";
import Teamproject from "../components/Projects/Teamproject";

function Projects() {
  return (
    <>
      <div className={Styles.projectContainer}>
        <HairsalonProject />
        <Teamproject />
      </div>
    </>
  );
}

export default Projects;
