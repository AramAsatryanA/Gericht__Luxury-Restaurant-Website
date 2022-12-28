import styles from "./MenuListItem.module.css";

function MenuListItem(props) {
  const { title, description, price } = props.item;

  return (
    <li>
      <div className={styles.top}>
        <div className={styles.title}>{title}</div>
        <span className={styles.separator} />
        <p className={styles.price}>{price} $</p>
      </div>
      <div className={styles.bottom}>{description.join(" | ")}</div>
    </li>
  );
}

export default MenuListItem;
