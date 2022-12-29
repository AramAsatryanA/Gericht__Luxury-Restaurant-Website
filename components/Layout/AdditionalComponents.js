import { NodeNextRequest } from "next/dist/server/base-http/node";
import Image from "next/image";
import ScrollToTop from "react-scroll-to-top";

import styles from "./AdditionalComponents.module.css";

function AdditionalComponents() {
  function scrollHandler() {
    const aboutSection = document.getElementById("about-section");

    aboutSection?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <ScrollToTop
        smooth
        top={900}
        component={
          <div className={styles["scroll__btn"]}>
            <span className={styles["scroll__image"]}>
              <img src="/images/website__scroll-line.png" alt="Scroll Line" />
            </span>
            <span>Top</span>
          </div>
        }
        style={{
          backgroundColor: "transparent",
          boxShadow: "none",
          width: "50px",
          height: "110px",
          bottom: "60px",
          zIndex: "999",
        }}
      />
      <div className={styles.hashtags}>
        <span>#Gerícht</span>
        <span>#Bar</span>
      </div>
      <button
        className={`${styles["scroll__btn"]} ${styles["scroll__btn--down"]}`}
        onClick={scrollHandler}
      >
        <span className={styles["scroll__image"]}>
          <img src="/images/website__scroll-line.png" alt="Scroll Line" />
        </span>
        <span>Scroll</span>
      </button>
      <div
        className={`${styles["website__logo"]} ${styles["website__logo--one"]}`}
      >
        <Image
          width={146}
          height={146}
          src="/images/website__logo.png"
          alt="Website Logo"
        />
      </div>
      <div
        className={`${styles["website__logo"]} ${styles["website__logo--two"]}`}
      >
        <Image
          width={146}
          height={146}
          src="/images/website__logo.png"
          alt="Website Logo"
        />
      </div>
      <div
        className={`${styles["website__logo"]} ${styles["website__logo--three"]}`}
      >
        <Image
          width={146}
          height={146}
          src="/images/website__logo.png"
          alt="Website Logo"
        />
      </div>
      <div
        className={`${styles["website__logo"]} ${styles["website__logo--four"]}`}
      >
        <Image
          width={146}
          height={146}
          src="/images/website__logo.png"
          alt="Website Logo"
        />
      </div>
      <div
        className={`${styles["website__logo"]} ${styles["website__logo--five"]}`}
      >
        <Image
          width={146}
          height={146}
          src="/images/website__logo.png"
          alt="Website Logo"
        />
      </div>
    </>
  );
}

export default AdditionalComponents;
