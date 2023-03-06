import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  phone,
  clock,
  envelope,
  telegram,
  pinterest,
  instagram,
  twitter,
  facebook,
} from "../utils/Icons";
import styles from "./Navbar.module.css";
import logo from "../utils/img/logo_without_bg.png";

function Navbar({ link }) {
  const [active, setActive] = useState(false);
  const [menuService, setMenuService] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  function BurgerMenu() {
    if (burgerMenu === false) {
      setBurgerMenu(true);
    } else setBurgerMenu(false);
  }

  function Switcher() {
    if (active === false) {
      setActive(true);
    } else setActive(false);
    if (menuService === true) {
      setActive(false);
    }
  }

  function SwitcherMenuService() {
    if (menuService === false) {
      setMenuService(true);
    } else setMenuService(false);
    if (active === true) {
      setMenuService(false);
    }
  }

  return (
    <>
      <div className={styles.bg}>
        <div className={styles.contact_header}>
          <ul className={styles.contact_list}>
            <li>
              <span>{phone}</span>+ 38 (044) 239 33 01
            </li>
            <li>
              <span>{envelope}</span>budvest@gmail.com
            </li>
            <li>
              <span>{clock}</span>Пн - Пт: 09.00 - 20.00
            </li>
          </ul>
          <ul className={styles.contact_links_list}>
            <a href="https://t.me/pavel_vynn">
              <li>{telegram}</li>
            </a>
            <a href="/">
              <li>{pinterest}</li>
            </a>
            <a href="https://www.instagram.com/vinn_glasses/?hl=ru">
              <li>{instagram}</li>
            </a>
            <a href="https://twitter.com/Pavel_vynn">
              <li>{twitter}</li>
            </a>
            <a href="https://www.facebook.com/pavel.vinnichencko/">
              <li>{facebook}</li>
            </a>
          </ul>
        </div>
      </div>
      <nav>
      <div className={styles.nav_logo_menu}>
        <Link to="/buildweb">
         
          <img src={logo} alt="logo" />
        </Link>
        <div className={styles.burger_menu} onClick={() => BurgerMenu()}>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
          <div className={styles.menu_bar}></div>
        </div>
        </div>

        <ul
          className={styles.main_links}
          id={burgerMenu === true ? styles.activeBurger : styles.unActiveNavList}
        >
          <Link to="/buildweb/about">
            <li
              className={
                link === "https://pavelvynnpv.github.io/buildweb/about" ? styles.yellow : null
              }
            >
              Про нас
            </li>
          </Link>
          <li id={styles.building} onClick={() => Switcher(active, setActive)}>
            <span id={active === true ? styles.yellow_span : null}>
              Будівництво
            </span>
            <div
              className={styles.menu}
              id={
                active === false
                  ? styles.unActive
                  : null || menuService === true
                  ? styles.unActive
                  : null
              }
            >
              <ul>
                <li>
                  <Link to="/buildweb/building" id={styles.yellow}>
                    Загальне будівництво
                  </Link>
                </li>
                <li>Оздоблення</li>
                <li>Елементи ландшафту</li>
                <li>Індивідуальні роботи</li>
                <li>Супровід об'єкту</li>
              </ul>
              <ul>
                <li>
                  <Link to="/buildweb/building/countryhouse" id={styles.yellow}>
                    Дачі{" "}
                  </Link>
                </li>

                <li>Коттеджі, особняки</li>
                <li>Будинки з бруса</li>
                <li>Лазні, сауни</li>
              </ul>
            </div>
          </li>

          <li
            id={styles.building}
            onClick={() => SwitcherMenuService(menuService, setMenuService)}
          >
            <span id={menuService === true ? styles.yellow_span : null}>
              Ремонт та сервіс
            </span>{" "}
            <ul
              className={styles.menu_service}
              id={
                menuService === false
                  ? styles.unActive
                  : null || active === true
                  ? styles.unActive
                  : null
              }
            >
              <li>Проектування</li>
              <li>
                <Link to="/buildweb/visualization" id={styles.yellow}>
                  3D-візуалізація
                </Link>
              </li>
              <li>Реставрація дерев'яних будинків</li>
              <li>Шліфування і фарбування дерев'яних стін</li>
            </ul>
          </li>

          <Link to="/buildweb/projects">
            <li
              className={
                link === "https://pavelvynnpv.github.io/buildweb/projects" ? styles.yellow : null
              }
            >
              Проекти
            </li>
          </Link>
          <Link to="/buildweb/contacts">
            <li
              className={
                link === "https://pavelvynnpv.github.io/buildweb/contacts" ? styles.yellow : null
              }
            >
              Контакти
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
