import styles from "./SectionSubtitle.module.css";

function SectionSubtitle({ text }) {
  return (
    <div className={styles.subtitle}>
      <p>{text}</p>
      <img src="/images/website__spoon-right.png" alt="Spoon Icon" />
    </div>
  );
}

export default SectionSubtitle;
