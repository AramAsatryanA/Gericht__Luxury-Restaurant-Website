import SectionButton from "../UI/SectionButton";

import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section id="about-section" className={styles.section}>
      <div className="section__overlay"></div>
      <div className={`container ${styles["section__container"]}`}>
        <div
          className={`${styles["section__item"]} ${styles["section__item--end"]}`}
        >
          <div>
            <h2 className="section__title-h2">About Us</h2>
            <span>
              <img
                src="/images/home-page/about/about__spoon-left.png"
                alt="Spoon Icon"
              />
            </span>
          </div>
          <p className="section__text-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <SectionButton text="Know More" />
        </div>
        <div className={styles["section__image"]}>
          <img
            src="/images/home-page/about/about__knife.png"
            alt="Knife Image"
          />
        </div>
        <div
          className={`${styles["section__item"]} ${styles["section__item--start"]}`}
        >
          <div>
            <h2 className="section__title-h2">Our History</h2>
            <span>
              <img
                src="/images/home-page/about/about__spoon-right.png"
                alt="Spoon Icon"
              />
            </span>
          </div>
          <p className="section__text-p">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <SectionButton text="Know More" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
