import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";

import styles from "./FooterBottom.module.css";

function FooterBottom() {
  return (
    <footer className={styles["footer__bottom"]}>
      <div className={`container ${styles["footer__container"]}`}>
        <div className={styles["item__info"]}>
          <h3 className={styles.title}>Contact Us</h3>
          <div className={styles.content}>
            <p className="section__text-p">
              9 W 53rd St, New York, NY 10019, USA
            </p>
            <p className="section__text-p">+1 212-344-1230</p>
            <p className="section__text-p">+1 212-555-1230</p>
          </div>
        </div>
        <div className={styles["item__main"]}>
          <h2 className={styles.name}>Gerícht</h2>
          <div className={styles.content}>
            <p className="section__text-p">
              "The best way to find yourself is to lose yourself in the service
              of others.”
            </p>
            <span className={styles["icon__spoon"]}>
              <img src="/images/website__spoon-right.png" alt="Spoon Icon" />
            </span>
            <div className={styles["social-links"]}>
              <FaFacebookF className={styles["link__icon"]} />
              <TfiTwitter className={styles["link__icon"]} />
              <FaInstagram className={styles["link__icon"]} />
            </div>
          </div>
        </div>
        <div className={styles["item__info"]}>
          <h3 className={styles.title}>Working Hours</h3>
          <div className={styles.content}>
            <p className="section__text-p">
              Monday-Friday: <br /> 08:00 am - 12:00 am
            </p>
            <p className="section__text-p">
              Saturday-Sunday: <br /> 07:00am - 11:00 pm
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterBottom;
