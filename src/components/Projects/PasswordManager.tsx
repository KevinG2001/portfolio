import { Link } from "react-router-dom";
import Styles from "../../Styling/pages/projects.module.scss";
import websiteImg from "../../assests/websitePics/PasswordManager.png";

function PasswordManager() {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.title}>Password Manager</h1>
      <div className={Styles.wrapper}>
        <img src={websiteImg} alt="Img" className={Styles.projectImg} />
        <div className={Styles.descriptionWrapper}>
          <div className={Styles.paragraph}>
            This is a project I made we made in college for a group project. It
            is a password Manager that we needed to encrypt the passwords on.
          </div>
          <div className={Styles.paragraph}>
            We used Python and Anaconda, We used tkinter for the GUI and
            encryption library for hasing the login password and encrpytion the
            passwords in it.
          </div>
          <div className={Styles.btnWrapper}>
            <Link
              to="https://github.com/KevinG2001/PasswordManager"
              className={Styles.btn}
            >
              View Code
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordManager;
