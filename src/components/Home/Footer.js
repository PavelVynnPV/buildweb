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
          <Link to='/buildweb'><img src={logo} alt="" /></Link>
          <ul className={styles.footer_links_list}>
            <a href="https://www.facebook.com/pavel.vinnichencko/">
              <li>{facebook}</li>
            </a>
            <a href="https://t.me/pavel_vynn">
              <li>{telegram}</li>
            </a>
            <a href="https://twitter.com/Pavel_vynn">
              <li>{twitter}</li>
            </a>
            <a href="/">
              <li>{pinterest}</li>
            </a>
            <a href="https://www.instagram.com/vinn_glasses/?hl=ru">
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
              <Link to="/buildweb/building">Загальне будівництво</Link>
            </li>
            <li>
              <Link to="/buildweb">Оздоблення</Link>
            </li>
            <li>
              <Link to="/buildweb">Елементи ландшафту</Link>
            </li>
            <li>
              <Link to="/buildweb">Індивідуальні роботи</Link>
            </li>
            <li>
              <Link to="/buildweb">Супровід об'єкту</Link>
            </li>
          </ul>
        </div>
        <div className={styles.footer_service}>
          <h2>
            <span>РЕМОН Т</span>А СЕРВІС
          </h2>
          <ul>
            <li>
              <Link to="/buildweb/visualization">3D-візуалізація</Link>
            </li>
            <li>
              <Link to="/buildweb">Реставрація дерев'яних будинків</Link>
            </li>
            <li>
              <Link to="/buildweb">Шліфування і фарбування дерев'яних стін</Link>
            </li>
            <li>
              <Link to="/buildweb">Індивідуальні роботи</Link>
            </li>
            <li>
              <Link to="/buildweb">Супровід об'єкту</Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer