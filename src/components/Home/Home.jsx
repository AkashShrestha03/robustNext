import React from "react";
import LogoSlider from "./LogoSlider";
import WhatDo from "./WhatDo";
import TopProducts from "./TopProducts";
import Distribution from "./Distribution";
import Experience from "./Experience";
import Automation from "./Automation";

const Home = () => {
  return (
    <>
      <LogoSlider />
      <WhatDo />
      <TopProducts />
      <Distribution />
      <Experience />
      <Automation />
      <div>
        <img src="/Assests/bottom-bg.png" alt="" />
      </div>
    </>
  );
};

export default Home;
