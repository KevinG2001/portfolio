import Styles from "../Styling/pages/contact.module.scss";

function ContactMe() {
  return (
    <>
      <div className={Styles.container}>
        <div>
          <h1>
            Contact <span>Me</span>
          </h1>
        </div>
        <form
          action=""
          method="post"
          encType="text/plain"
          className={Styles.contactForm}
        >
          <div className={Styles.lineSeperator}>
            <div className={Styles.inputGroup}>
              <input id="username" placeholder="" />
              <label htmlFor="username">Username</label>
            </div>
            <div className={Styles.inputGroup}>
              <input id="password" type="password" placeholder="" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className={Styles.lineSeperator}>
            <div className={Styles.inputGroup}>
              <input id="username" placeholder="" />
              <label htmlFor="username">Username</label>
            </div>
            <div className={Styles.inputGroup}>
              <input id="password" type="password" placeholder="" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className={Styles.lineSeperator}>
            <div className={Styles.inputGroup}>
              <textarea id="message" />
              <label htmlFor="message"></label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
