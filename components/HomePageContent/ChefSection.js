import Image from "next/image";
import SectionSubtitle from "../UI/SectionSubtitle";

import styles from "./ChefSection.module.css";

function ChefSection() {
  return (
    <section className={styles.section}>
      <div className="section__overlay"></div>
      <div className={`container ${styles["section__container"]}`}>
        <div className={styles["section__image"]}>
          <Image
            width={634}
            height={789}
            src="/images/home-page/chef/chef__banner.png"
            alt="Chef Image"
          />
        </div>
        <div className={styles["section__content"]}>
          <div>
            <SectionSubtitle text="Chef’s Word" />
            <h2 className="section__title-h2">What We Believe In</h2>
          </div>
          <p className={`section__text-p ${styles.text}`}>
            <span className={styles["icon-quotes"]}>
              <img src="/images/website__icon-quotes.png" alt="Qoutes Image" />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
            Auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
          <div>
            <h3 className={styles["chif-info__name"]}>Kevin Luo</h3>
            <p className="section__text-p">Chef & Founder</p>
          </div>
          <div className={styles["icon-signature"]}>
            <img
              src="/images/home-page/chef/chef__signature.png"
              alt="Signature Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefSection;
