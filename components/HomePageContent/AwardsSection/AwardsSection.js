import { useSelector } from "react-redux";

import SectionSubtitle from "../../UI/SectionSubtitle";
import AwardsSectionItem from "./AwardsSectionItem";

import styles from "./AwardsSection.module.css";
import Image from "next/image";

function AwardsSection() {
  const { awards } = useSelector((state) => state.awardsSectionContent);

  return (
    <section id="awards-section" className={styles.section}>
      <div className="section__overlay"></div>
      <div className={`container ${styles["section__container"]}`}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <SectionSubtitle text="Awards & Recognition" />
            <h2 className="section__title-h2">Our Laurels</h2>
          </div>
          <ul className={styles["content__items"]}>
            {awards.map((award, index) => (
              <AwardsSectionItem key={award.title + index} award={award} />
            ))}
          </ul>
        </div>
        <div className={styles.image}>
          <Image
            width={226}
            height={282}
            src="/images/home-page/awards/awards__image.png"
            alt="Section Image"
          />
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
