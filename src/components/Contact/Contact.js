import React from "react";
import Title from "../HeaderForBackNInfoLinks/Title";
import styles from "./Contact.module.css";
import { clock, phone, location } from "../utils/Icons";

function Contact({ setLink, link }) {
  const href = window.location.href;
  setLink(href);
  return (
    <>
      <Title link={link} />
      <section className={styles.contacts}>
        <ul className={styles.contact_list}>
          <li>
            <span>{phone}</span>Телефон:
            <br /> +38 (044) 239 33 01
          </li>
          <li>
            <span>{clock}</span>Пн - Пт: 09.00 - 20.00
            <br />
            Сб - Нд: вихідний
          </li>
          <li>
            <span>{location}</span>Київ, Україна
            <br />
            вул.Хрещатик, 23
          </li>
        </ul>
        <form>
          <div>
            <label>
              <input type="text" placeholder="Ваше Ім'я *" />
            </label>
            <label>
              <input type="text" placeholder="Ваш Email *" />
            </label>
            <label>
              <input type="text" placeholder="Ваш Телефон *" />
            </label>
          </div>
          <textarea cols="30" rows="10" placeholder="Ваше Повідомлення *" />
          <button>НАДІСЛАТИ</button>
        </form>
        <iframe title="place-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.7898411687606!2d30.519870715731248!3d50.44501507947464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce567fa9b42f%3A0x7c42ce90252fbf12!2z0YPQuy4g0JrRgNC10YnQsNGC0LjQuiwgMjMsINCa0LjQtdCyLCDQo9C60YDQsNC40L3QsCwgMDEwMDE!5e0!3m2!1sru!2sde!4v1657354548541!5m2!1sru!2sde"></iframe>
      </section>
    </>
  );
}

export default Contact;
