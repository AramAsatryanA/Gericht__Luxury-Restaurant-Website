import SectionSubtitle from "../UI/SectionSubtitle";
import SectionButton from "../UI/SectionButton";

import styles from "./NewsletterSection.module.css";

function NewsletterSection() {
  //todo ---------- Add basic input validation + response message showing functionality
  function formSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <section id="subscribe" className={styles.section}>
      <div className={`container ${styles["section__container"]}`}>
        <div className={styles.heading}>
          <SectionSubtitle text="Newsletter" />
          <h2 className="section__title-h2">Subscribe To Our Newsletter</h2>
          <p className="section__text-p">And never miss latest Updates!</p>
        </div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <input type="email" placeholder="Email Address" />
          <SectionButton type="submit" text="Subscribe" />
        </form>
      </div>
    </section>
  );
}

export default NewsletterSection;
