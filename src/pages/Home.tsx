import styles from "../Styling/pages/homeStyles.module.scss";
import profilePic from "../assests/profilePic.jpeg";
import planetImg from "../assests/planet-earth-svgrepo-com.svg";
function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.sidePanel} id={styles.left}>
            <div>Located in Ireland</div>
            <img src={planetImg} alt="" className={styles.planetImg} />
          </div>
          <img src={profilePic} alt="" className={styles.profilePic} />
          <div className={styles.sidePanel} id={styles.right}>
            <div>Kevin Glennon</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
