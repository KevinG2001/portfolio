import Styles from "../Styling/pages/aboutStyles.module.scss";

function Home() {
  return (
    <>
      <div className={Styles.container} id="home">
        <div className={Styles.title}>These are some things about me!</div>
        <div className={Styles.paragraph}>
          Hello! My name is Kevin Glennon, a software engineer based in Dublin,
          Ireland. For fun, I enjoy making websites and random programs. This is
          where my interest in studying Computer Science came from and now here
          I am!
          <br />
          Currently, I am a 3rd year student studying Computer Science at the
          National College of Ireland. I am currently engaged in all aspects of
          the course including coursework, projects and collaborative projects
          with other students.
          <br />I am pleased to say that I have a solid grounding in computer
          science principles and practical skills. I have a considerable
          proficiency in this field and am contiunally seeking opportunities to
          enhance and broaden my skill set.
        </div>
        <div>
          <button className={Styles.button}>See the timetable</button>
          <button className={`${Styles.button} ${Styles.secondary}`}>
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
