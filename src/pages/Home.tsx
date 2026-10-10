import styles from "../Styling/pages/homeStyles.module.scss";
import AboutMe from "./Aboutme";
import ProjectsList from "./ProjectList";
import Stop from "../components/Stop";
import MainProjects from "./MainProjects";
import Notes from "./Notes";
import FinalTicket from "./FinalTicket";
import Footer from "../components/Footer";

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
			<Stop id="notes" label="Stop 04 · Notes">
				<Notes />
			</Stop>

			<Stop id="contact" position="last" label="Stop 04 · Contact">
				<FinalTicket />
			</Stop>
			<Footer />
		</main>
	);
}

export default Home;
