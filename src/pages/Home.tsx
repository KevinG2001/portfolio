import styles from "../Styling/pages/homeStyles.module.scss";
import AboutMe from "./Aboutme";
import ProjectsList from "./ProjectList";
import ContactMe from "./ContactMe";
import Stop from "../components/Stop";
import MainProjects from "./MainProjects";

function Home() {
	return (
		<main className={styles.page}>
			<Stop id="home" position="first" label="Stop 01 · Depart">
				<AboutMe />
			</Stop>

			<Stop id="projects" label="Stop 02 · Projects">
				<ProjectsList />
			</Stop>

			<Stop id="about" label="Stop 03 · Tickets">
				<MainProjects />
			</Stop>

			<Stop id="contact" position="last" label="Stop 04 · Contact">
				<ContactMe />
			</Stop>
		</main>
	);
}

export default Home;
