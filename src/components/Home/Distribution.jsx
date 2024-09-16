import React from "react";

const Distribution = () => {
  return (
    <div class="bg-c">
      <div
        class="we-do-main-container justify-content-around mb-0"
        style={{ padding: "40px", gap: 0 }}
      >
        <div class="d-flex justift-content-around sep-logo">
          <div style={{ textAlign: "right", width: "80%" }}>
            <h4 class="disstribution">Robust Distribution</h4>
            <p class="distribution-text">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, enim!
            </p>
          </div>
        </div>

        <div
          class="animated animate__animate__fadeInUp___zVJAI"
          style={{animationDuration: "0.75s"}}
        >
          <div>
            <div class="distribution__cardThirdIcons___lYECv">
              <div class="distribution__cardThirdIcon___FzDco">
                <img
                  src="https://static.swag.com/images-webpack/dashboard.1c98dca628c600547be1..png"
                  alt="Customer service excellence icon with a user silhouette and three stars"
                />
                <p>
                  Engage with your
                  <br />
                  Remote Employees
                </p>
              </div>
              <hr />
              <div class="distribution__cardThirdIcon___FzDco">
                <img
                  src="https://static.swag.com/images-webpack/circle-container.5a937d6781aeca88d8f0..png"
                  alt="Award ribbon icon enclosed in a dashed circular border"
                />
                <p>
                  Reward your best
                  <br />
                  customers
                </p>
              </div>
              <div class="distribution__cardThirdIcon___FzDco">
                <img
                  src="https://static.swag.com/images-webpack/people.0bcb5cac12674bf9d981..png"
                  alt="Icon of three interconnected people, symbolizing a team or network, enclosed within a dashed circular border"
                />
                <p>
                  Convert prospects
                  <br />
                  and leads
                </p>
              </div>
              <hr />
              <div class="distribution__cardThirdIcon___FzDco">
                <img
                  src="https://static.swag.com/images-webpack/calendar.71c2436ecd6bdf38e112..png"
                  alt="Calendar icon with a star marking a special date, enclosed within a dashed circular border"
                />
                <p>
                  Humanize online
                  <br />
                  events and meetings
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
