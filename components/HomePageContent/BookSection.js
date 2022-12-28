import SectionSubtitle from "../UI/SectionSubtitle";
import SectionButton from "../UI/SectionButton";

import styles from "./BookSection.module.css";

function BookSection() {
  //todo ---------- Add basic input validation + response message showing functionality
  function formSubmitHandler(event) {
    event.preventDefault();
  }

  return (
    <section id="book-section" className={styles.section}>
      <div className={`container ${styles["section__container"]}`}>
        <div className={styles.heading}>
          <SectionSubtitle text="Reservations" />
          <h2 className="section__title-h2">Book A Table</h2>
        </div>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <div className={styles["form__inputs"]}>
            <div className={styles["input__item"]}>
              <label htmlFor="persons">Number od Visitors</label>
              <input id="persons" type="number" min={1} />
            </div>
            <div className={styles["input__item"]}>
              <label htmlFor="date">Date of Visit</label>
              <input id="date" type="date" />
            </div>
            <div className={styles["input__item"]}>
              <label htmlFor="time">Tame of Visit</label>
              <input id="time" type="time" />
            </div>
          </div>
          <SectionButton type="submit" text="Book Now" />
        </form>
      </div>
    </section>
  );
}

export default BookSection;
