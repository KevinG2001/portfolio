import Styles from "../Styling/pages/aboutStyles.module.scss";

function Home() {
  return (
    <>
      <div className={Styles.container} id="home">
        <div className={Styles.title}>
          Hi, I'm Kevin, a software developer in Dublin.
        </div>
        <div className={Styles.paragraph}>
          <p>
            I'm a recent Computer Science graduate from the National College of
            Ireland who's been building websites and small programs for fun for
            years.
          </p>
          <p>
            I'm now looking for my first frontend or full-stack developer role
            in Dublin. Take a look at my projects below, or get in touch.
          </p>
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
