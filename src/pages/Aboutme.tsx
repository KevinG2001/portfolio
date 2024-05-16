import Styles from "../Styling/pages/aboutStyles.module.scss";
import reactLogo from "../assests/technologys/react.svg";
import html5Logo from "../assests/technologys/html5.svg";
import javascriptLogo from "../assests/technologys/javascript.svg";
import sassLogo from "../assests/technologys/sass.svg";
import javaLogo from "../assests/technologys/java.svg";
import mySQLLogo from "../assests/technologys/mysql.svg";
import gitLogo from "../assests/technologys/git.svg";

function Home() {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.underContainer}>
          <div className={Styles.aboutmeWrapper}>
            <h1 className={Styles.title}>
              About <span>Me</span>
            </h1>
            <div className={Styles.paragraph}>
              Hello! My name is Kevin Glennon, a software engineer based in
              Dublin, Ireland. For fun, I enjoy making websites and random
              programs. This is where my interest in studying Computer Science
              came from and now here I am!
              <br />
              <br />
              Currently, I am a 3rd year student studying Computer Science at
              the National College of Ireland. I am currently engaged in all
              aspects of the course including coursework, projects and
              collaborative projects with other students.
            </div>
          </div>
          <div className={Styles.aboutmeWrapper}>
            <h1 className={Styles.title}>
              <span>My</span> Skills
            </h1>
            <div className={Styles.paragraph}>
              I am pleased to say that I have a solid grounding in computer
              science principles and practical skills. I have a considerable
              proficiency in this field and am contiunally seeking opportunities
              to enhance and broaden my skill set.
              <div className={Styles.skillImgWrapper}>
                <div className={Styles.stack}>
                  <div className={Styles.skillImgHolder}>
                    <img src={html5Logo} alt="" className={Styles.skillImg} />
                    <div className={Styles.skillTitle}>HTML</div>
                  </div>
                  <div className={Styles.skillImgHolder}>
                    <img
                      src={javascriptLogo}
                      alt=""
                      className={Styles.skillImg}
                    />
                    <div className={Styles.skillTitle}>JavaScript</div>
                  </div>
                  <div className={Styles.skillImgHolder}>
                    <img src={reactLogo} alt="" className={Styles.skillImg} />
                    <div className={Styles.skillTitle}>React</div>
                  </div>
                </div>
                <div className={Styles.stack}>
                  <div className={Styles.skillImgHolder}>
                    <img src={sassLogo} alt="" className={Styles.skillImg} />
                    <div className={Styles.skillTitle}>SASS</div>
                  </div>
                  <div className={Styles.skillImgHolder}>
                    <img src={gitLogo} alt="" className={Styles.skillImg} />
                    <div className={Styles.skillTitle}>Git</div>
                  </div>
                  <div className={Styles.skillImgHolder}>
                    <img src={mySQLLogo} alt="" className={Styles.skillImg} />
                    <div className={Styles.skillTitle}>mySQL</div>
                  </div>
                </div>
                <div className={Styles.stack}>
                  <div className={Styles.skillImgHolder}>
                    <img src={javaLogo} alt="" className={Styles.skillImg} />
                    <div className={Styles.skillTitle}>Java</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
