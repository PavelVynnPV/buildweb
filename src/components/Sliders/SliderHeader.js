import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./SliderHeader.css";

import { Navigation } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide className="first_slide">
          <ul className="slider">
            <li className="budvest">
              <h1>BUDVEST</h1>
            </li>
            <li className="text">
              Будівництво багатоквартирних житлових будинків, приватних
              будинків, офісних, виробничих, відпочинково-оздоровчих об’єктів.
              <br />
              Крім цього, ми надамо кваліфіковану допомогу з питань оформлення
              технічних паспортів та права власності на об’єкти нерухомості.
            </li>
            <li className="btn">
              <button>ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="second_slide">
          {" "}
          <ul className="slider">
            <li className="budvest">
              <h1>BUDVEST</h1>
            </li>
            <li className="text">
              Будівництво багатоквартирних житлових будинків, приватних
              будинків, офісних, виробничих, відпочинково-оздоровчих об’єктів.
              <br />
              Крім цього, ми надамо кваліфіковану допомогу з питань оформлення
              технічних паспортів та права власності на об’єкти нерухомості.
            </li>
            <li className="btn">
              <button>ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>
            </li>
          </ul>
        </SwiperSlide>
        <SwiperSlide className="third_slide">
          {" "}
          <ul className="slider">
            <li className="budvest">
              <h1>BUDVEST</h1>
            </li>
            <li className="text">
              Будівництво багатоквартирних житлових будинків, приватних
              будинків, офісних, виробничих, відпочинково-оздоровчих об’єктів.
              <br />
              Крім цього, ми надамо кваліфіковану допомогу з питань оформлення
              технічних паспортів та права власності на об’єкти нерухомості.
            </li>
            <li className="btn">
              <button>ЗАМОВИТИ КОНСУЛЬТАЦІЮ</button>
            </li>
          </ul>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
