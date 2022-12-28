import Image from "next/image";

import styles from "./CustomersSectionItem.module.css";

function CustomersSectionItem(props) {
  const { image, name, occupation, feedback, quotesIcon } = props.customer;

  return (
    <li className={styles.item}>
      <div className={styles["item__image"]}>
        <Image width={190} height={190} src={image} alt="Cusomer Image" />
      </div>
      <div className={styles.content}>
        <p className={`section__text-p ${styles.feedback}`}>
          <span className={styles["item__icon"]}>
            <img src={quotesIcon} alt="Quotes Icon" />
          </span>
          {feedback}
        </p>
        <div>
          <h3 className={styles.name}>{name}</h3>
          <p className={styles.occupation}>{occupation}</p>
        </div>
      </div>
    </li>
  );
}

export default CustomersSectionItem;
