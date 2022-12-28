import { useSelector } from "react-redux";
import Image from "next/image";

import SectionSubtitle from "../../UI/SectionSubtitle";
import SectionButton from "../../UI/SectionButton";
import MenuListItem from "./MenuListItem";

import styles from "./MenuListPart.module.css";

function MenuListPart() {
  const { "wine-menu": wineMenu, "cocktails-menu": cocktailsMenu } =
    useSelector((state) => state.menuSectionContent);

  return (
    <div className={styles["list-part"]}>
      <div className={`container ${styles["list-part__container"]}`}>
        <div className={styles.titles}>
          <SectionSubtitle text="Menu that fits you palatte" />
          <h2 className="section__title-h2">Today’s Special</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.menu}>
            <h3 className={styles["menu__title"]}>Wine & Beer</h3>
            <ul className={styles["menu__list"]}>
              {wineMenu.map((item, index) => (
                <MenuListItem key={item.title + index} item={item} />
              ))}
            </ul>
          </div>
          <div className={styles.image}>
            <Image
              width={412}
              height={660}
              src="/images/home-page/menu/menu-list__banner.png"
              alt="Bar Menu Image"
            />
          </div>
          <div className={styles.menu}>
            <h3 className={styles["menu__title"]}>Cocktails</h3>
            <ul className={styles["menu__list"]}>
              {cocktailsMenu.map((item, index) => (
                <MenuListItem key={item.title + index} item={item} />
              ))}
            </ul>
          </div>
        </div>
        <SectionButton text="View More" />
      </div>
    </div>
  );
}

export default MenuListPart;
