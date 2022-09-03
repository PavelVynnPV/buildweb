import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mono from "../utils/img/mono.png";
import circle from "../utils/img/circle.png";
import circle2 from "../utils/img/circle2.png";
import epicenter from "../utils/img/epicenter.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SliderPartners.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function SliderPartners({ styles }) {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper mySwiperCustom"
      >
        <SwiperSlide>
          <div className="partner_block">
            <img src={mono} alt="monobank" />
            <img src={circle} alt="fordaq" />
            <img src={circle2} alt="stora-enso" />
            <img src={epicenter} alt="epicenter" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="partner_block">
            <span className={styles.partner_six}>+6</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
