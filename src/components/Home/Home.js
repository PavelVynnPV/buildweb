import React from "react";
import styles from "./Home.module.css";
import { bullhorn, gear, pencil, rocket } from "../utils/Icons";
import house1 from "../utils/img/house1.png";
import house2 from "../utils/img/house2.png";
import { Link } from "react-router-dom";
import mono from "../utils/img/mono.png";
import circle from "../utils/img/circle.png";
import circle2 from "../utils/img/circle2.png";
import epicenter from "../utils/img/epicenter.png";
import { SliderHeader, SliderPartners } from "../Sliders";

function Home() {
  return (
    <div className={styles.content}>
      <SliderHeader />
      <div className={styles.propose}>
        <h1>
          <span>ЩО МИ</span> ПРОПОНУЄМО?
        </h1>
        <div className={styles.blocks}>
          <div className={styles.block}>
            <h2>{bullhorn}</h2>
            <div>
              <h3>Проект</h3>
              <p>
                Правильно прийняті рішення допоможфуть запобігти зайвих витрат!
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h2>{gear}</h2>
            <div>
              <h3>Сервіс</h3>
              <p>
                Ваші будинки з дерева будуть служити для Вас фзавдяки нашому
                сервісу!
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h2>{pencil}</h2>
            <div>
              <h3>Контроль</h3>
              <p>
                Ми забезпечуємо контроль за якістю матеріалів та виконання
                робіт!
              </p>
            </div>
          </div>
          <div className={styles.block}>
            <h2>{rocket}</h2>
            <div>
              <h3>Будівництво</h3>
              <p>
                Якість виконаних робіт надасть відчуття задоволення та спокою!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.examples}>
        <h1>
          <span>ПРИКЛ</span>АДИ РОБІТ
        </h1>
        <div className={styles.img_link_blocks}>
          <Link to="/projects">
            <div className={styles.img_link_block}>
              <img src={house1} alt="" />
              <span>БУДІВНИЦТВО</span>
            </div>
          </Link>
          <Link to="/projects">
            <div className={styles.img_link_block}>
              <img src={house2} alt="" />
              <span>РЕМОНТ ТА СЕРВІС</span>
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.partners}>
        <h1>
          <span>ПАРТН</span>ЕРИ
        </h1>
        <SliderPartners styles={styles} />

        <div className={styles.partner_block}>
          <img src={mono} alt="monobank" />
          <img src={circle} alt="fordaq" />
          <img src={circle2} alt="stora-enso" />
          <img src={epicenter} alt="epicenter" />
          <span className={styles.partner_six}>+6</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
