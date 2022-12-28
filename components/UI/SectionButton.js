import styles from "./SectionButton.module.css";

function SectionButton({ type, text }) {
  return (
    <button type={type ? type : null} className={styles.button}>
      {text}
    </button>
  );
}

export default SectionButton;
