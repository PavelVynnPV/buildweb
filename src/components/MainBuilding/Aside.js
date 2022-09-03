import React, { useState } from "react";
import useCollapse from "react-collapsed";
import { Link } from "react-router-dom";
import styles from "./Aside.module.css";

function InnerCollapsible({ link, active, setActive }) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  return (
    <div className="collapsible">
      <div
        className="header"
        {...getToggleProps()}
        id={active === true ? styles.gray_bg : styles.yellow}
      >
        {isExpanded ? (
          <p className={styles.collaps_text} onClick={() => setActive(true)}>
            <span className={styles.down_arrow}>&#62;</span> Загальне
            будівництво
          </p>
        ) : (
          <p className={styles.collaps_text} onClick={() => setActive(false)}>
            <span>&#62;</span> Загальне будівництво
          </p>
        )}
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          <ul className={styles.collapse_list}>
            <li
              className={
                link === "http://localhost:3000/building/countryhouse"
                  ? styles.yellow_transperent
                  : null
              }
            >
              <Link to="/building/countryhouse">Дачі</Link>
            </li>
            <li>Котеджі, особняки</li>
            <li>Будинки з бруса</li>
            <li>Лазні сауни</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Aside({ link }) {
  const [active, setActive] = useState(true);

  return (
    <div className={styles.collaps_container}>
      <h1 className={styles.collaps_title}>
        <span>БУДІВНИЦТВ</span>О
      </h1>
      <InnerCollapsible link={link} setActive={setActive} active={active} />
      <ul className={styles.other_list}>
        <li>
          <span className={styles.collaps_arrow}>&#62;</span> Оздоблення
        </li>
        <li>
          <span className={styles.collaps_arrow}>&#62;</span> Елементи ландшафту
        </li>
        <li>
          <span className={styles.collaps_arrow}>&#62;</span> Індивідуальні
          роботи
        </li>
        <li>
          <span className={styles.collaps_arrow}>&#62;</span> Супровід об'єкту
        </li>
      </ul>
      <h1 className={styles.collaps_title}>
        <span>РЕМОНТ ТА С</span>ЕРВІС
      </h1>
      <ul className={styles.collaps_service}>
        <li>Проектування</li>
        <Link to="/visualization">3D-візуалізація</Link>
        <li>Реставрація дерев'яних будинків</li>
        <li>Шліфування і фарбування дерев'яних стін</li>
      </ul>
    </div>
  );
}
export default Aside;
