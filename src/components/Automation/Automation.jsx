import React from "react";
import Seemless from "./Seemless";
import LogoSlider from "../Home/LogoSlider";
import YouCan from "./YouCan";
import Distribution from "../Home/Distribution";
import GetInTouch from "./GetInTouch";
import TopProducts from "../Home/TopProducts";
import WhatDo from "../Home/WhatDo";

const Automation = () => {
  return (
    <>
      <Seemless />
      <LogoSlider />

      <div class="we-do-main-container-1 my-5 ">
        <div class="we-do">
          <h1 class="endless-h1">
            Endless integrations. Unlimited possibilities. <br />{" "}
            <span>Zero fees.</span>
          </h1>
          <p class="endless-p">
            Do you have a specific workflow in mind? Let us know, and we can
            help set it up for free with your robust purchase.
          </p>
          <div class="d-flex align-items-center justify-content-start ">
            <button class="btn bg-pink">
              Get In Touch
              <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <img src="Assests/main.gif" alt="" />
      </div>
      <YouCan />
      <Distribution />
      <GetInTouch />
      <TopProducts />
      <WhatDo />
    </>
  );
};

export default Automation;
