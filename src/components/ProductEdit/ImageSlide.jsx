import React, { useState } from "react";

const ImageSlide = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % images.length;
      } else {
        return (prevIndex - 1 + images.length) % images.length;
      }
    });
  };

  return (
    <>
      <div className="container">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {images?.map((image, index) => (
              <div
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
                key={index}
              >
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            onClick={() => handleSlideChange("prev")}
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            onClick={() => handleSlideChange("next")}
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="text-center d-flex gap-2 mt-2">
          {/* <span>{`${activeIndex + 1} of ${images.length}`}</span> */}
          {images?.map((image, index) => (
            <img src={image} key={index} style={{height: "80px", width: "80px", border: "1px solid grey"}} alt="img" />
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSlide;
