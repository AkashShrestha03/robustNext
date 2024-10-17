import React from "react";

const WhatDo = () => {
  return (
    <div class=" bg-b ">
      <div
        class="we-do-main-container row"
        style={{ padding: "40px", gap: "0" }}
      >
        <div class="we-do d-flex justify-content-around sep-logo col">
          <div class="w-50" style={{ textAlign: "right" }}>
            <h4>What we do</h4>
            <p>
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, enim!
            </p>
          </div>
          <div class="vertical-line"></div>
          <div class="d-flex flex-column align-items-center justify-content-between">
            <div class="circle"></div>
            <div class="incline"></div>
          </div>
        </div>
        <div className="we-do-grid col">
          <img src="/Assests/RIA.png" alt="RIA" style={{ width: "330px" }} />
        </div>
      </div>
    </div>
  );
};

export default WhatDo;
