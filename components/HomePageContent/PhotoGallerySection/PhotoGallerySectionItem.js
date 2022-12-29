import { FaInstagram } from "react-icons/fa";

import styles from "./PhotoGallerySectionItem.module.css";

function PhotoGallerySectionItem({ image }) {
  return (
    <li className={styles.item}>
      <img src={image} alt="Instagram Image" />
      <div className={styles.overlay}>
        <FaInstagram className={styles.icon} />
      </div>
    </li>
  );
}

export default PhotoGallerySectionItem;
