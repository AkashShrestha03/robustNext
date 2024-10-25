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
              <h6>Strengthens Bonds</h6>
              <hr />

              <p>
                80% of clients prefer doing business with companies that gift,
                building stronger, lasting relationships.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>Boosts Morale</h6>
              <hr />

              <p>
                Corporate gifting can increase employee motivation by 70%,
                reinforcing their value and boosting morale.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>Enhances Partnerships</h6>
              <hr />

              <p>
                Thoughtful gifts improve supplier loyalty and cooperation,
                leading to stronger business partnerships.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>Increases Retention</h6>
              <hr />

              <p>
                Regular gifting boosts client retention by 30%, reminding them
                of your appreciation and commitment.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div>
              <h6>Elevates Perception</h6>
              <hr />

              <p>
                75% of recipients view companies more favorably after receiving
                high-quality, branded gifts.
              </p>
            </div>
          </SwiperSlide>
        </div>
      </div>
    </Swiper>
  );
};

export default CardSwiper;
