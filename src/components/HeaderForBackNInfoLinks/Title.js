import React from "react";
import { Link } from "react-router-dom";
import styles from "./Title.module.css";

function Title({ link }) {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {link === "http://localhost:3000/about"
            ? "ПРО НАС"
            : null || link === "http://localhost:3000/projects"
            ? "ПРОЕКТИ"
            : null || link === "http://localhost:3000/building"
            ? `ЗАГАЛЬНЕ БУДІВНИЦТВО`
            : null || link === "http://localhost:3000/building/countryhouse"
            ? "ДАЧІ"
            : null || link === "http://localhost:3000/visualization"
            ? "3D-ВІЗУАЛІЗАЦІЯ"
            : null || link === "http://localhost:3000/contacts"
            ? "КОНТАКТИ"
            : null}
        </h1>
        <Link to="/">
          Головна <span className={styles.arrow}>&#62;</span>
        </Link>
        <span className={styles.span_info_title}>
          {link === "http://localhost:3000/about"
            ? "Про нас"
            : null || link === "http://localhost:3000/projects"
            ? "Проекти"
            : null || link === "http://localhost:3000/building"
            ? `Будівництво > Загальне будівництво`
            : null || link === "http://localhost:3000/building/countryhouse"
            ? "Будівництво > Загальне будівництво > Дачі"
            : null || link === "http://localhost:3000/visualization"
            ? "Будівництво > Ремонт та сервіс > 3D-візуалізація"
            : null || link === "http://localhost:3000/contacts"
            ? "Контакти"
            : null}
        </span>
      </div>
    </>
  );
}

export default Title;
