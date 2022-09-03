import React from "react";
import {Link} from "react-router-dom"
import styles from "./Footer.module.css"
import logo from "../utils/img/logo_without_bg.png"
import { facebook, instagram, pinterest, telegram, twitter } from "../utils/Icons";


function Footer() {
  return (
    <>
      <footer>
        <div className={styles.footer_logo_links}>
          <Link to='/'><img src={logo} alt="" /></Link>
          <ul className={styles.footer_links_list}>
            <a href="/">
              <li>{facebook}</li>
            </a>
            <a href="/">
              <li>{telegram}</li>
            </a>
            <a href="/">
              <li>{twitter}</li>
            </a>
            <a href="/">
              <li>{pinterest}</li>
            </a>
            <a href="/">
              <li>{instagram}</li>
            </a>
          </ul>
          <span>© Copyrights 2022 BUDVEST</span>
        </div>
        <div className={styles.footer_building}>
          <h2>
            <span>БУДІВНИ</span>ЦТВО
          </h2>
          <ul>
            <li>
              <Link to="/building">Загальне будівництво</Link>
            </li>
            <li>
              <Link to="/">Оздоблення</Link>
            </li>
            <li>
              <Link to="/">Елементи ландшафту</Link>
            </li>
            <li>
              <Link to="/">Індивідуальні роботи</Link>
            </li>
            <li>
              <Link to="/">Супровід об'єкту</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_service}>
          <h2>
            <span>РЕМОН Т</span>А СЕРВІС
          </h2>
          <ul>
            <li>
              <Link to="/visualization">3D-візуалізація</Link>
            </li>
            <li>
              <Link to="/">Реставрація дерев'яних будинків</Link>
            </li>
            <li>
              <Link to="/">Шліфування і фарбування дерев'яних стін</Link>
            </li>
            <li>
              <Link to="/">Індивідуальні роботи</Link>
            </li>
            <li>
              <Link to="/">Супровід об'єкту</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer