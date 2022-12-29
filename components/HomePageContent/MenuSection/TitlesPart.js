import { useEffect, useRef, useState } from "react";

import styles from "./TitlesPart.module.css";

function TitlesPart() {
  const barMenuRef = useRef();
  const foodMenuRef = useRef();
  const dessertsMenuRef = useRef();

  const [linkActive, setLinkActive] = useState();

  useEffect(() => {
    setLinkActive(barMenuRef.current);
  }, []);

  // --- Set background image source
  // --- Initially will be cover for Bar Menu as both "linkActive" and "barMenuRef" are "undefined"
  const backgroundImageLink =
    linkActive === barMenuRef.current
      ? `url(/images/home-page/menu/menu-titles__cover-bar.jpg)`
      : linkActive === foodMenuRef.current
      ? `url(/images/home-page/menu/menu-titles__cover-food.png)`
      : `url(/images/home-page/menu/menu-titles__cover-desserts.png)`;

  // --- Set styles for active link
  const activeLinkStyles = { borderBottom: "3px solid #ffffff" };

  // --- To change Active link and Background image
  function changeActiveLinkHandler(event) {
    setLinkActive(event.target);
  }

  return (
    <div
      className={styles["titles-part"]}
      style={{
        backgroundImage: backgroundImageLink,
      }}
    >
      <div className="section__overlay"></div>
      <div className={`container ${styles["title-part__container"]}`}>
        <ul className={styles["menu__buttons"]}>
          <li>
            <button
              ref={barMenuRef}
              style={
                barMenuRef.current === linkActive ? activeLinkStyles : null
              }
              className={styles["menu__btn"]}
              onMouseEnter={changeActiveLinkHandler}
            >
              Bar Menu
            </button>
          </li>
          <li>
            <button
              ref={foodMenuRef}
              style={
                foodMenuRef.current === linkActive ? activeLinkStyles : null
              }
              className={styles["menu__btn"]}
              onMouseEnter={changeActiveLinkHandler}
            >
              Food Menu
            </button>
          </li>
          <li>
            <button
              ref={dessertsMenuRef}
              style={
                dessertsMenuRef.current === linkActive ? activeLinkStyles : null
              }
              className={styles["menu__btn"]}
              onMouseEnter={changeActiveLinkHandler}
            >
              Desserts Menu
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TitlesPart;
