import { FaInstagram } from "react-icons/fa";

import styles from "./PhotoGallerySectionItem.module.css";

function PhotoGallerySectionItem({ image }) {
  return (
    <li className={styles.item}>
      <img src={image} alt="Instagram Image" />
      <div className={styles.overlay}>
        <a href="#">
          <FaInstagram className={styles.icon} />
        </a>
      </div>
    </li>
  );
}

export default PhotoGallerySectionItem;
