import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Stop from "../components/Stop";
import { projects } from "../data/projects";
import Styles from "../Styling/pages/projectOverview.module.scss";

function ProjectOverview() {
	const { slug } = useParams();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [slug]);

	const index = projects.findIndex((p) => p.slug === slug);
	const project = projects[index];

	if (!project) {
		return (
			<div className={Styles.projectContainer}>
				<p>That route doesn't exist.</p>
				<Link to="/#projects">Back to all departures</Link>
			</div>
		);
	}

	const next = projects[(index + 1) % projects.length];
	const { repo, live, demo } = project.links;

	return (
		<div className={Styles.projectContainer}>
			<Link to="/#projects">-- All Departures</Link>

			<div className={Styles.projectTitle}>
				<div className={Styles.projectRoute}>{project.route}</div>
				<div className={Styles.projectHeader}>
					<h1 className={Styles.projectHeaderTitle}>{project.name}</h1>
					<p className={Styles.projectShortDescription}>
						{project.shortDescription}
					</p>
				</div>
			</div>

			<dl className={Styles.projectMeta}>
				{project.meta.map((m) => (
					<div key={m.label} className={Styles.projectMetaItem}>
						<dt className={Styles.projectMetaLabel}>{m.label}</dt>
						<dd className={Styles.projectMetaValue}>{m.value}</dd>
					</div>
				))}
			</dl>

			{(repo || live || demo) && (
				<div className={Styles.projectLinks}>
					{live && (
						<a
							href={live}
							target="_blank"
							rel="noopener noreferrer"
							className={Styles.projectLink}
						>
							Live site
						</a>
					)}
					{demo && (
						<a
							href={demo}
							target="_blank"
							rel="noopener noreferrer"
							className={Styles.projectLink}
						>
							Demo
						</a>
					)}
					{repo && (
						<a
							href={repo}
							target="_blank"
							rel="noopener noreferrer"
							className={Styles.projectLink}
						>
							Code
						</a>
					)}
				</div>
			)}

			<div className={Styles.imageContainer}>
				{project.image ? (
					<img
						src={project.image}
						alt={`${project.name} screenshot`}
						className={Styles.projectImage}
					/>
				) : (
					<div className={Styles.projectImage} />
				)}
			</div>

			<p className={Styles.projectDescription}>{project.description}</p>

			<section className={Styles.journey}>
				<p className={Styles.sectionLabel}>The journey</p>
				{project.journey.map((stop, i) => (
					<Stop
						key={stop.title}
						position={
							i === 0
								? "first"
								: i === project.journey.length - 1
									? "last"
									: "middle"
						}
					>
						<div className={Styles.journeyRow}>
							<h2 className={Styles.journeyTitle}>{stop.title}</h2>
							<p className={Styles.journeyBody}>{stop.body}</p>
						</div>
					</Stop>
				))}
			</section>

			{project.callingAt.length > 0 && (
				<div className={Styles.projectDisplayBoard}>
					{project.callingAt.map((s, i) => (
						<div key={`${s.name}-${i}`} className={Styles.projectDisplayItem}>
							<div className={Styles.projectDisplayRoute}>
								{String(i + 1).padStart(2, "0")}
							</div>
							<div className={Styles.projectDisplayInfo}>
								<div className={Styles.projectDisplayName}>{s.name}</div>
								<div className={Styles.projectDisplayDes}>{s.role}</div>
							</div>
						</div>
					))}
				</div>
			)}

			{projects.length > 1 && (
				<Link to={`/projects/${next.slug}`} className={Styles.projectNext}>
					<span className={Styles.projectNextStop}>Next Stop</span>
					<span className={Styles.projectNextName}>
						{next.route} - {next.name}
					</span>
				</Link>
			)}
		</div>
	);
}

export default ProjectOverview;
