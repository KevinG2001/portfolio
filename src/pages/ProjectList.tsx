import { Link } from "react-router-dom";
import Styles from "../Styling/pages/projectList.module.scss";

type Project = {
	route: string;
	name: string;
	desc: string;
	stack: string;
	status: "Arrived" | "In service" | "Boarding" | "In depot";
	link: string;
};

const projects: Project[] = [
	{
		route: "01",
		name: "TrackItDown",
		desc: "Lost and found management system for a gap I saw in work — my final year project.",
		stack: "Full Stack",
		status: "Arrived",
		link: "/Projects/TrackItDown",
	},
	{
		route: "02",
		name: "Team Project",
		desc: "A project made in my second year in a group of four, Made for helping you find meals/drinks based on your preferences.",
		stack: "Full Stack",
		status: "Arrived",
		link: "/Projects/TeamProject",
	},
];

function Projects() {
	return (
		<div className={Styles.projectContainer}>
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
							<tr key={p.route}>
								<td className={`${Styles.projectListCell} ${Styles.routeCell}`}>
									{p.route}
								</td>
								<td
									className={`${Styles.projectListCell} ${Styles.serviceCell}`}
								>
									<div className={Styles.projectTitleWrapper}>
										<Link to={p.link} className={Styles.projectName}>
											{p.name}
										</Link>
										<span className={Styles.projectDesc}>{p.desc}</span>
									</div>
								</td>
								<td
									className={`${Styles.projectListCell} ${Styles.callingAtCell}`}
								>
									{p.stack}
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
