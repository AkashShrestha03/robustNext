import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";
const CardSwiper = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <div class="">
        <div class="swiper-wrapper">
          <SwiperSlide>
            {" "}
            <div>
              <h6>We Provide Something New</h6>
              <hr />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, recusandae. Sint eveniet voluptate nulla fuga vitae.
                Nemo eaque tenetur est?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>We Provide Something New</h6>
              <hr />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, recusandae. Sint eveniet voluptate nulla fuga vitae.
                Nemo eaque tenetur est?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>We Provide Something New</h6>
              <hr />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, recusandae. Sint eveniet voluptate nulla fuga vitae.
                Nemo eaque tenetur est?
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>We Provide Something New</h6>
              <hr />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, recusandae. Sint eveniet voluptate nulla fuga vitae.
                Nemo eaque tenetur est?
              </p>
            </div>
          </SwiperSlide>
        </div>
      </div>
    </Swiper>
  );
};

export default CardSwiper;
