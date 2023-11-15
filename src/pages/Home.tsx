import styles from "../Styling/pages/homeStyles.module.scss";
import profilePic from "../assests/profilePic.jpeg";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <img src={profilePic} alt="" className={styles.profilePic} />
          <div className={styles.content}>
            <div>
              Hi, <br /> Im Kevin <br />
              Software Developer
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
