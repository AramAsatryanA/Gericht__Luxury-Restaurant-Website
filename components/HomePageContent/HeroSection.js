import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import { heroSectionActions } from "../../store/heroSection-slice";
import SectionSubtitle from "../UI/SectionSubtitle";
import SectionButton from "../UI/SectionButton";

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import styles from "./HeroSection.module.css";

function HeroSection() {
  const { indexOfItemToShow, items } = useSelector(
    (state) => state.heroSectionContent
  );

  const dispatch = useDispatch();

  const itemToShow = items[indexOfItemToShow];
  const { title, text, image } = itemToShow;

  //! --------------------------------------------- Open when website is ready!! ------ but at first check with console.log("item changed!") -----
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(heroSectionActions.showNextItem());
    }, 5000);

    return () => clearTimeout(timer);
  }, [itemToShow]);
  //! --------------------------------------------------------------------------------------

  function showNextItem() {
    dispatch(heroSectionActions.showNextItem());
  }

  function showPreviousItem() {
    dispatch(heroSectionActions.showPreviousItem());
  }

  return (
    <section className={styles.section}>
      <div className={`container ${styles["section__container"]}`}>
        <div className={styles["section__content"]}>
          <div className={styles["section__content-top"]}>
            <SectionSubtitle text="Chase the new flavour" />
            <h1 className={styles.title}>{title}</h1>
          </div>
          <p className="section__text-p">{text}</p>
          <SectionButton text="Explore Menu" />
        </div>
        <div className={styles["section__image"]}>
          <Image
            src={image}
            alt="Hero Image"
            width={667}
            height={736}
            priority
          />
          <div className={styles.actions}>
            <button onClick={showPreviousItem}>
              <MdArrowBackIos />
            </button>
            <button onClick={showNextItem}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
