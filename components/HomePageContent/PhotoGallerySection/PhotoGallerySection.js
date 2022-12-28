import { useSelector } from "react-redux";
import { useRef } from "react";

import SectionSubtitle from "../../UI/SectionSubtitle";
import SectionButton from "../../UI/SectionButton";
import PhotoGallerySectionItem from "./PhotoGallerySectionItem";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import styles from "./PhotoGallerySection.module.css";

function PhotoGallerySection() {
  const { images } = useSelector((state) => state.photoGallerySectionContent);

  const scrollContainerRef = useRef();

  function scrollTo(direction) {
    const scrollContainer = scrollContainerRef.current;
    console.log(scrollContainer);

    if (direction === "left") {
      scrollContainer.scrollLeft -= 325;
    } else {
      scrollContainer.scrollLeft += 325;
    }
  }

  return (
    <section className={styles.section}>
      <div className="section__overlay"></div>
      <div className={`container ${styles["section__container"]}`}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <SectionSubtitle text="Instagram" />
            <h2 className="section__title-h2">Photo Gallery</h2>
          </div>
          <p className="section__text-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
            mattis ipsum turpis elit elit scelerisque egestas mu.
          </p>
          <SectionButton text="View More" />
        </div>
        <div className={styles["scroll-container"]}>
          <div className={styles.gallery} ref={scrollContainerRef}>
            <ul className={styles.images}>
              {images.map((image) => (
                <PhotoGallerySectionItem key={image.id} image={image.image} />
              ))}
            </ul>
          </div>
          <div className={styles.actions}>
            <button onClick={scrollTo.bind(null, "left")}>
              <MdArrowBackIos />
            </button>
            <button onClick={scrollTo.bind(null, "right")}>
              <MdArrowForwardIos />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PhotoGallerySection;
