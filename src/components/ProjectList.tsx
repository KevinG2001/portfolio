import { useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styling/pages/projectList.module.scss";
import projectsData from "../data/projects.json";

function ProjectList() {
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
          {projectsData.projects.map((project, index) => (
            <Link
              key={index}
              className={Styles.projectItem}
              to={`/Projects/${project.title.replace(/\s+/g, "")}`}
            >
              <div className={Styles.projectName}>{project.title}</div>
              <div className={Styles.projectTags}>{project.tags}</div>
              <img
                className={Styles.projectPreview}
                src={project.img}
                alt={`${project.title} Preview`}
              />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProjectList;
