import { Link } from "react-router-dom";
import Styles from "../Styling/pages/mainProjectStyles.module.scss";
import { projects } from "../data/projects";

const featuredProjects = projects.filter((p) => p.featured);

function MainProjects() {
  return (
    <div className={Styles.projectContainer} id="mainprojects">
      <div className={Styles.ticketList}>
        {featuredProjects.map((p) => (
          <div key={p.slug} className={Styles.ticketContainer}>
            <div className={Styles.imageContainer}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={`${p.name} screenshot`}
                  className={Styles.projectImage}
                />
              ) : (
                <div className={Styles.projectImage} />
              )}
            </div>

            <div className={Styles.ticketInfo}>
              <div className={Styles.ticketId}>{p.route}</div>
              <div className={Styles.ticketName}>{p.name}</div>
            </div>

            <div className={Styles.ticketDesc}>{p.shortDescription}</div>

            <div className={Styles.ticketStack}>
              {p.stack.map((tech) => (
                <span key={tech} className={Styles.stackTag}>
                  {tech}
                </span>
              ))}
            </div>

            <Link to={`/projects/${p.slug}`} className={Styles.rideButton}>
              <span>Ride this route</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProjects;
