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
              <input id="firstname" placeholder="" />
              <label htmlFor="firstname">firstname</label>
            </div>
            <div className={Styles.inputGroup}>
              <input id="surname" type="password" placeholder="" />
              <label>Surname</label>
            </div>
          </div>
          <div className={Styles.lineSeperator}>
            <div className={Styles.inputGroup}>
              <input id="email" placeholder="" />
              <label htmlFor="email">Email</label>
            </div>
            <div className={Styles.inputGroup}>
              <input id="subject" type="password" placeholder="" />
              <label htmlFor="subject">subject</label>
            </div>
          </div>
          <div className={Styles.lineSeperator}>
            <div className={Styles.inputGroup}>
              <textarea id="message" />
              <label htmlFor="message">Message</label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactMe;
