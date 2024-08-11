import styles from "../Styling/pages/homeStyles.module.scss";
import profilePic from "../assests/profilePic.jpeg";
import planetImg from "../assests/planet-earth-svgrepo-com.svg";
import AboutMe from "../pages/Aboutme";
import ProjectsList from "../pages/SmallProjectList";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.landingWrapper}>
            <div className={styles.sidePanel} id={styles.left}>
              <div>Located in Ireland</div>
              <img src={planetImg} alt="" className={styles.planetImg} />
            </div>
            <img src={profilePic} alt="" className={styles.profilePic} />
            <div className={styles.sidePanel} id={styles.right}>
              <div>Kevin Glennon</div>
            </div>
          </div>
          <AboutMe />
          <ProjectsList />
        </div>
      </div>
    </>
  );
}

export default Home;
