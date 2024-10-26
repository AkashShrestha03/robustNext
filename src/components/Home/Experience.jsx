import React from "react";

const Experience = () => {
  return (
    <>
      <div class="new-experience-main-container">
        <div class="experience-inner">
          <img src="/Assests/own-img.png" alt="" />
          <div class="experience-box">
            <h1>
              {" "}
              <span> Open up</span> <br />
              to a new experience.
            </h1>
            <p>
              Create, package and ship fully custom branded boxes. Show your
              employees and customers some love!
            </p>
            <button class="btn bg-pink">Let&apos;s Go!</button>
          </div>
        </div>
      </div>
      <div class="experience-box-mobile">
        <h1>
          {" "}
          <span> Open up</span> <br />
          to a new experience.
        </h1>
        <p>
          Create, package and ship fully custom branded boxes. Show your
          employees and customers some love!
        </p>
        <button class="btn bg-pink">Let&apos;s Go!</button>
      </div>
    </>
  );
};

export default Experience;
