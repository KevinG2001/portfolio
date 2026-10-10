import { Link } from "react-router-dom";
import Styles from "../Styling/pages/projectList.module.scss";
import { projects } from "../data/projects";

function Projects() {
  return (
    <div className={Styles.projectContainer} id="projects">
      <h2 className={Styles.heading}>Departures</h2>

      <div className={Styles.projectsWrapper}>
        <table className={Styles.projectList}>
          <thead>
            <tr className={Styles.projectListHeader}>
              <th scope="col" className={Styles.projectListHeaderCell}>
                Route
              </th>
              <th scope="col" className={Styles.projectListHeaderCell}>
                Service
              </th>
              <th scope="col" className={Styles.projectListHeaderCell}>
                Calling at
              </th>
              <th scope="col" className={Styles.projectListHeaderCell}>
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.slug}>
                <td className={`${Styles.projectListCell} ${Styles.routeCell}`}>
                  {p.route}
                </td>
                <td
                  className={`${Styles.projectListCell} ${Styles.serviceCell}`}
                >
                  <div className={Styles.projectTitleWrapper}>
                    <Link
                      to={`/projects/${p.slug}`}
                      className={Styles.projectName}
                    >
                      {p.name}
                    </Link>
                    <span className={Styles.projectDesc}>
                      {p.shortDescription}
                    </span>
                  </div>
                </td>
                <td
                  className={`${Styles.projectListCell} ${Styles.callingAtCell}`}
                >
                  {p.stack.join(" · ")}
                </td>
                <td
                  className={`${Styles.projectListCell} ${Styles.statusCell}`}
                >
                  {p.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Projects;
