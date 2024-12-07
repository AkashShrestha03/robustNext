import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 h-100">
      <img
        src="/Assests/main.gif"
        style={{ height: "60px", width: "60px" }}
        alt="loader"
      />
    </div>
  );
};

export default Loader;
