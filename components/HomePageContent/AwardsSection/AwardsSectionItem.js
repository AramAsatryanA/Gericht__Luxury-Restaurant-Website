import styles from "./AwardsSectionItem.module.css";

function AwardsSectionItem(props) {
  const { image, title, description } = props.award;

  return (
    <li className={styles.item}>
      <div className={styles.image}>
        <img src={image} alt="Award Image" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className="section__text-p">{description}</p>
      </div>
    </li>
  );
}

export default AwardsSectionItem;
