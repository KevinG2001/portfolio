import React from "react";
import homeStyles from "../Styling/homeStyles.module.scss";
import Navbar from "./Navbar";
import LinkedInImg from "../assests/linkedin.png";
import GithubImg from "../assests/GitHub-Mark.png";

function Home() {
  return (
    <>
      <Navbar />
      {/* <div className={homeStyles.homeContainer}>
        <div className={homeStyles.homeLeft}>
          <h1>Software Engineer</h1>
          <p>
            Hi, I'm Kevin Glennon a software engineer based in Dublin, Ireland.
            I am a student currently studying in National College of Ireland, I
            am gaining experience through college work and my own personal
            projects.
          </p>
          <div className={homeStyles.imgContainer}>
            <a href="https://www.linkedin.com/in/kevin-glennon-98b511227/">
              <img
                src={LinkedInImg}
                alt="LinkedIn"
                className={homeStyles.homeImg}
              />
            </a>
            <a href="https://github.com/KevinG2001">
              <img
                src={GithubImg}
                alt="Github"
                className={homeStyles.homeImg}
              />
            </a>
          </div>
        </div>
        <div className={homeStyles.homeRight}>
          <div className={homeStyles.homeFaceImg}></div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
