import React from "react";
import Styles from "../Styling/pages/mainProjectStyles.module.scss";

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

function MainProjects() {
	return (
		<div className={Styles.projectContainer}>
			<div className={Styles.ticketList}>
				{projects.map((p) => (
					<div key={p.route} className={Styles.ticketContainer}>
						<div className={Styles.imageContainer}>
							<div className={Styles.projectImage} />
						</div>
						<div className={Styles.ticketInfo}>
							<div className={Styles.ticketId}>{p.route}</div>
							<div className={Styles.ticketName}>{p.name}</div>
						</div>
						<div className={Styles.ticketDesc}>{p.desc}</div>
						<div className={Styles.ticketStack}>{p.stack}</div>
						<button className={Styles.rideButton}>
							<div>Ride this route</div>
							<div>Arrow</div>
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default MainProjects;
