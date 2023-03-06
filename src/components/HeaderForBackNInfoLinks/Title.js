import React from "react";
import { Link } from "react-router-dom";
import styles from "./Title.module.css";

function Title({ link }) {
  return (
    <>
      <div className={styles.content}>
        <h1 className={styles.title}>
          {link === "https://pavelvynnpv.github.io/buildweb/about"
            ? "ПРО НАС"
            : null || link === "https://pavelvynnpv.github.io/buildweb/projects"
            ? "ПРОЕКТИ"
            : null || link === "https://pavelvynnpv.github.io/buildweb/building"
            ? `ЗАГАЛЬНЕ БУДІВНИЦТВО`
            : null || link === "https://pavelvynnpv.github.io/buildweb/building/countryhouse"
            ? "ДАЧІ"
            : null || link === "https://pavelvynnpv.github.io/buildweb/visualization"
            ? "3D-ВІЗУАЛІЗАЦІЯ"
            : null || link === "https://pavelvynnpv.github.io/buildweb/contacts"
            ? "КОНТАКТИ"
            : null}
        </h1>
        <Link to="/">
          Головна <span className={styles.arrow}>&#62;</span>
        </Link>
        <span className={styles.span_info_title}>
          {link === "https://pavelvynnpv.github.io/buildweb/about"
            ? "Про нас"
            : null || link === "https://pavelvynnpv.github.io/buildweb/projects"
            ? "Проекти"
            : null || link === "https://pavelvynnpv.github.io/buildweb/building"
            ? `Будівництво > Загальне будівництво`
            : null || link === "https://pavelvynnpv.github.io/buildweb/building/countryhouse"
            ? "Будівництво > Загальне будівництво > Дачі"
            : null || link === "https://pavelvynnpv.github.io/buildweb/visualization"
            ? "Будівництво > Ремонт та сервіс > 3D-візуалізація"
            : null || link === "https://pavelvynnpv.github.io/buildweb/contacts"
            ? "Контакти"
            : null}
        </span>
      </div>
    </>
  );
}

export default Title;
