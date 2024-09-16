import React from "react";

const TopProducts = () => {
  return (
    <>
      <div className="heading-section">
        <h2>Top Products</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <section className="hexagon-gallery">
          <div className="hex">
            <img src="./Assets/pimg-1.jpg" alt="Drink Ware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Drink Ware</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-2.jpg" alt="Bags" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#00b9f8" }}
            >
              <p>Bags</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-3.jpg" alt="Stationery" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Stationery</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-4.jpg" alt="Accessories" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#f35000" }}
            >
              <p>Accessories</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-5.jpg" alt="Clothing" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#31814f" }}
            >
              <p>Clothing</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-1.jpg" alt="Drink Ware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Drink Ware</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-3.jpg" alt="Stationery" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Stationery</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-1.jpg" alt="Drink Ware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Drink Ware</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-2.jpg" alt="Bags" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#00b9f8" }}
            >
              <p>Bags</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assets/pimg-3.jpg" alt="Stationery" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Stationery</p>
              <button className="text-dark">Shop Now</button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TopProducts;
