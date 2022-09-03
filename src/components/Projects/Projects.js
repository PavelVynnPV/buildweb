import React from "react";
import Title from "../HeaderForBackNInfoLinks/Title";
import styles from "./Projects.module.css";
import building from "../utils/img/building2.png";
import building2 from "../utils/img/building3.png";
import building3 from "../utils/img/building4.png";
import building4 from "../utils/img/building5.png";
import building5 from "../utils/img/building6.png";
import building6 from "../utils/img/building7.png";
import building7 from "../utils/img/building8.png";
import building8 from "../utils/img/building9.png";

function Projects({link, setLink }) {
  const href = window.location.href;
  setLink(href);

  return (
    <>
      <Title link={link} />
      <section>
        <div className={styles.btns}>
          <button>БУДІВНИЦТВО</button>
          <button>РЕМОНТ ТА СЕРВІС</button>
        </div>
        <div className={styles.house_prices_block}>
          <div className={styles.block}>
            <img src={building} alt="" />
            <h2>Будинок з оздобленням та клінкером</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>20 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building2} alt="" />
            <h2>Процес складання будинку із клеєного бруса</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>15 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building3} alt="" />
            <h2>Дача з дерев’яного бруса</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>25 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building4} alt="" />
            <h2>Зведення фундаменту для будинку</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>70 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building5} alt="" />
            <h2>Будівництво двоповерхового будинку</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>50 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building6} alt="" />
            <h2>Будівництво літньої тераси для ресторану</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>100 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building7} alt="" />
            <h2>Будівництво дерев'яного будинку</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>30 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
          <div className={styles.block}>
            <img src={building8} alt="" />
            <h2>Зведення фундаменту для садового будиночку</h2>
            <p>
              Орієнтовна ціна:{" "}
              <span className={styles.price_span}>50 000 грн</span>
            </p>
            <p className={styles.more_photos}>Більше фото &#62;</p>
          </div>
        </div>
        <div className={styles.pagination}>
          <span className={styles.pagination_arrow}>&#60; Назад</span>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>...</li>
            <li>9</li>
          </ul>
          <span className={styles.pagination_arrow}>Вперед &#62;</span>
        </div>
      </section>
    </>
  );
}

export default Projects;
