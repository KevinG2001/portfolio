import Styles from "../Styling/pages/notesStyles.module.scss";

type Tool = {
	string: string;
};
const tools: Tool[] = [
	{
		string: "React",
	},
	{
		string: "JavaScript",
	},
	{
		string: "TypeScript",
	},
	{
		string: "SCSS",
	},
	{
		string: "Git",
	},
	{
		string: "Node.js",
	},
];

function Notes() {
	return (
		<>
			<div className={Styles.notesContainer}>
				<div className={Styles.notesWrapper}>
					<div className={Styles.noteTitle}>PAST 5 YEARS WORKING</div>
					<div className={Styles.noteDescription}>
						Working in Dublin Bus since 2021, It taught me a lot about working
						with people in a small team to keep everything moving smoothly.
					</div>
				</div>
				{/* Split */}
				<div className={Styles.timelineWrapper}>
					<div className={Styles.timelineItem}>
						<div className={Styles.timelineYear}>2021</div> Joined Dublin Bus,
						Still here and continuing to learn new things
					</div>
					<div className={Styles.timelineItem}>
						<div className={Styles.timelineYear}>2022</div> Continued working at
						Dublin Bus, gained more experience and improved my skills
					</div>
					<div className={Styles.timelineItem}>
						<div className={Styles.timelineYear}>2023</div> Took on more
						responsibilities and contributed to team success
					</div>
					<div className={Styles.timelineStack}>
						{tools.map((t) => (
							<div className={Styles.timelineTool} key={t.string}>
								{t.string}
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}

export default Notes;
