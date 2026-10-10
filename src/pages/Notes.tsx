import Styles from "../Styling/pages/notesStyles.module.scss";

const tools: string[] = [
  "React",
  "JavaScript",
  "TypeScript",
  "SCSS",
  "Git",
  "Node.js",
];

function Notes() {
  return (
    <div className={Styles.notesContainer}>
      <div className={Styles.notesWrapper}>
        <div className={Styles.noteTitle}>5 YEARS AT DUBLIN BUS</div>
        <div className={Styles.noteDescription}>
          I've worked at Dublin Bus since 2021, alongside my degree. It taught
          me how to work with people in a small team and keep everything running
          smoothly.
        </div>
      </div>

      <div className={Styles.timelineWrapper}>
        <div className={Styles.timelineItem}>
          <div className={Styles.timelineYear}>2021</div>
          Joined Dublin Bus while studying Computer Science at NCI.
        </div>
        <div className={Styles.timelineItem}>
          <div className={Styles.timelineYear}>2023</div>
          Trained new staff to be able to use the new system Dublin Bus adopted.
        </div>
        <div className={Styles.timelineItem}>
          <div className={Styles.timelineYear}>2026</div>
          Graduated in Computer Science and started looking for my first
          developer role.
        </div>

        <div className={Styles.timelineYear}>Skills</div>
        <div className={Styles.timelineStack}>
          {tools.map((tool) => (
            <div className={Styles.timelineTool} key={tool}>
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notes;
