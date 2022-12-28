import Link from "next/link";
import { useEffect, useState } from "react";

import { CgMenuRight } from "react-icons/cg";
import { MdRestaurantMenu } from "react-icons/md";

import styles from "./Navigation.module.css";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenuHandler() {
    setShowMenu((previousState) => !previousState);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          Gerícht
        </Link>
        <ul className={styles["nav__links"]}>
          <li>
            <Link href="/" className={styles["nav__links_link"]}>
              Home
            </Link>
          </li>
          <li>
            <a href="#menu-section" className={styles["nav__links_link"]}>
              Menu
            </a>
          </li>
          <li>
            <a href="#awards-section" className={styles["nav__links_link"]}>
              Awards
            </a>
          </li>
          <li>
            <a href="#blogs-section" className={styles["nav__links_link"]}>
              Blogs
            </a>
          </li>
          <li>
            <a href="#subscribe" className={styles["nav__links_link"]}>
              Subscribe
            </a>
          </li>
        </ul>
        <div className={styles.actions}>
          <button className={styles["btn__actions"]}>
            Log in / Registration
          </button>
          <span className={styles.separator}>
            <img src="/images/website__header-separator.png" alt="Line Image" />
          </span>
          <a href="#book-section" className={styles["btn__actions"]}>
            Book Table
          </a>
        </div>
        <button className={styles["btn__menu"]} onClick={toggleMenuHandler}>
          <CgMenuRight />
        </button>
      </nav>
      {showMenu && (
        <nav
          className={`${styles.navigation} ${styles["navigation--small-screens"]}`}
        >
          <ul className={styles["nav__links--small-screens"]}>
            <li>
              <Link
                href="/"
                className={styles["nav__links_link"]}
                onClick={toggleMenuHandler}
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#menu-section"
                className={styles["nav__links_link"]}
                onClick={toggleMenuHandler}
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#awards-section"
                className={styles["nav__links_link"]}
                onClick={toggleMenuHandler}
              >
                Awards
              </a>
            </li>
            <li>
              <a
                href="#blogs-section"
                className={styles["nav__links_link"]}
                onClick={toggleMenuHandler}
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#subscribe"
                className={styles["nav__links_link"]}
                onClick={toggleMenuHandler}
              >
                Subscribe
              </a>
            </li>
          </ul>
          <div className={styles["actions--small-screens"]}>
            <button
              className={`${styles["btn__actions"]} ${styles["btn__actions--small-screens"]}`}
            >
              Log in / Registration
            </button>
            <span className={styles["separator--mobile"]}>
              <img
                src="/images/website__header-separator.png"
                alt="Line Image"
              />
            </span>
            <a
              href="#book-section"
              className={`${styles["btn__actions"]} ${styles["btn__actions--small-screens"]}`}
              onClick={toggleMenuHandler}
            >
              Book Table
            </a>
          </div>
          <button
            className={`${styles["btn__menu"]} ${styles["btn__menu--small-screens"]}`}
            onClick={toggleMenuHandler}
          >
            <MdRestaurantMenu />
          </button>
        </nav>
      )}
    </header>
  );
}

export default Navigation;
