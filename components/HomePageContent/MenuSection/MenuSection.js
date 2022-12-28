import TitlesPart from "./TitlesPart";
import MenuListPart from "./MenuListPart";

import styles from "./MenuSection.module.css";

function MenuSection() {
  return (
    <section id="menu-section" className={styles.section}>
      <TitlesPart />
      <MenuListPart />
    </section>
  );
}

export default MenuSection;
