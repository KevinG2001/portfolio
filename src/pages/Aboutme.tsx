import Styles from "../Styling/pages/aboutStyles.module.scss";
import reactLogo from "../assests/technologys/react.svg"
import html5Logo from "../assests/technologys/html5.svg"
import javascriptLogo from "../assests/technologys/javascript.svg"
import sassLogo from "../assests/technologys/sass.svg"
import javaLogo from "../assests/technologys/java.svg"
import mySQLLogo from "../assests/technologys/mysql.svg"
import gitLogo from "../assests/technologys/git.svg"


function Home() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.aboutmeWrapper}>
            <h1 className={Styles.title}><b>About <span>Me</span></b></h1>
            <p className={Styles.paragraph}>
              Hello! My name is Kevin Glennon a software engineer based in Dublin, Ireland. 
              I enjoy making websites and random programs for some fun, This is were my interest in studying Computer Science came from and now here I am! 
            </p>

            <p className={Styles.paragraph}>
              Today I study at the National College of Ireland studying computer science. I am currently engaged in all aspects of the course including coursework, projects and collaborative projects with other students. I am happy to say I have a strong foundation in computer science principles and practical skills.
            </p>
        </div>
        <div className={Styles.skillWrapper}>
          <h1 className={Styles.title}><span>My</span> Skills</h1>
          <p className={Styles.paragraph}>
            I have a good amount of skills in these fields and am atleast familiar with them and always looking to expand them!
            <div className={Styles.skillImgWrapper}>
            
            <img src={html5Logo} alt="" className={Styles.skillImg}/>
            <img src={javascriptLogo} alt="" className={Styles.skillImg}/>
            <img src={reactLogo} alt="" className={Styles.skillImg}/>
            <img src={sassLogo} alt="" className={Styles.skillImg}/>
            <img src={gitLogo} alt="" className={Styles.skillImg}/>
            <img src={mySQLLogo} alt="" className={Styles.skillImg}/>
            <img src={javaLogo} alt="" className={Styles.skillImg}/>
          </div>
          </p>
          
        </div>
      </div>
    </>
  );
}

export default Home;
