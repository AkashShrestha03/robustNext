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
              At Robust, we specialize in providing thoughtful{" "}
              <strong>corporate gifting</strong>
              solutions, creative <strong>advertising</strong> products, and
              impactful <strong>promotional merchandise</strong> to help your
              brand stand out and strengthen relationships. Let's make every
              gesture count!
            </p>
          </div>
          <div className="d-flex justify-content-evenly gap-4">
            <div class="vertical-line"></div>
            <div class="d-flex flex-column align-items-center justify-content-between">
              <div class="circle"></div>
              <div class="incline"></div>
            </div>
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
