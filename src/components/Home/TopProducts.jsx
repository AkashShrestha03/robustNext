import Link from "next/link";
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
            <img src="./Assests/pimg-1.jpg" alt="Drink Ware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Office</p>
              <button className="text-dark">
                <Link href={"/products/office/desk_accessories"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-2.jpg" alt="Bags" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#00b9f8" }}
            >
              <p>Apparel</p>
              <button className="text-dark">
                {" "}
                <Link href={"/products/apparels/tshirts"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Stationery" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Tech</p>
              <button className="text-dark">
                <Link href={"/products/tech/tech_accessories"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-4.jpg" alt="Accessories" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#f35000" }}
            >
              <p>Home & Living</p>
              <button className="text-dark">
                {" "}
                <Link href={"/products/wellness/self_care"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-5.jpg" alt="Clothing" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#31814f" }}
            >
              <p>Drinkware</p>
              <button className="text-dark">
                <Link href={"/products/drinkware/waterbottles"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-1.jpg" alt="Drink Ware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Bags</p>
              <button className="text-dark">
                <Link href={"/products/bags/totes"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Stationery" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Eco Friendly</p>
              <button className="text-dark">
                <Link href={"/products/ecofriendly"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-1.jpg" alt="Drink Ware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Fitness & Recreation</p>
              <button className="text-dark">
                <Link href={"/products/wellness/fitness"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-2.jpg" alt="Bags" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#00b9f8" }}
            >
              <p>Bags</p>
              <button className="text-dark">
                <Link href={"/products/bags/totes"}>Shop Now</Link>
              </button>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Stationery" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Stationery</p>
              <button className="text-dark">
                <Link href={"/products/office/pens"}>Shop Now</Link>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TopProducts;
