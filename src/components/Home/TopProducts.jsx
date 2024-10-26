import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

const TopProducts = () => {
  const [productCounts, setProductCounts] = useState({});

  // Fetch product counts for each category on component mount
  useEffect(() => {
    const fetchProductCounts = async () => {
      try {
        const response = await axios.get(
          `https://spice-19.onrender.com/api/product/Count/Product/Category`
        );
        if (response.data.status === 1) {
          setProductCounts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching product counts", error);
      }
    };
    fetchProductCounts();
  }, []);

  // Function to format product count as "1 item" or "X items"
  const formatProductCount = (count) => {
    return `${count} ${count === 1 ? "item available" : "items available"}`;
  };

  return (
    <>
      <div className="heading-section">
        <h2>Top Products</h2>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <section className="hexagon-gallery">
          {/* Office Category */}
          <div className="hex">
            <img src="./Assests/pimg-1.jpg" alt="Office" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Office</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/office/alloffice"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts.Office || 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Bags Category */}
          <div className="hex">
            <img src="/Assests/pimg-2.jpg" alt="Bags" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#00b9f8" }}
            >
              <p>Bags</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/bags/allbags"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts.Bags || 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Tech Category */}
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Tech" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Tech</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/tech/alltech"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts.Tech || 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Wellness Category */}
          <div className="hex">
            <img src="/Assests/pimg-4.jpg" alt="Wellness" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#f35000" }}
            >
              <p>Wellness</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/wellness/allwellness"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts.Wellness || 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Apparel Category */}
          <div className="hex">
            <img src="/Assests/pimg-5.jpg" alt="Apparel" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#31814f" }}
            >
              <p>Apparel</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/apparels/allapparels"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts.Apparel || 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Drinkware Category */}
          <div className="hex">
            <img src="/Assests/pimg-1.jpg" alt="Drinkware" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#ff2c5c" }}
            >
              <p>Drinkware</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/bags/totes"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts.Drinkware || 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Eco-Friendly Category */}
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Eco-Friendly" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Eco-Friendly</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/ecofriendly"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(productCounts["Eco-Friendly"] || 0)}
                </span>
              </div>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Eco-Friendly" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Category 8</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/ecofriendly"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount( 0)}
                </span>
              </div>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Eco-Friendly" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Category 9</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/ecofriendly"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount(0)}
                </span>
              </div>
            </div>
          </div>
          <div className="hex">
            <img src="/Assests/pimg-3.jpg" alt="Eco-Friendly" />
            <div
              className="item-name-hex"
              style={{ backgroundColor: "#9844ff" }}
            >
              <p>Category 10</p>
              <div className="button-hover">
                <button className="text-dark">
                  <Link href={"/products/ecofriendly"}>Shop Now</Link>
                </button>
                <span className="product-count">
                  {formatProductCount( 0)}
                </span>
              </div>
            </div>
          </div>

          {/* Other categories as needed */}
        </section>
      </div>

      <style jsx>{`
        .button-hover {
          position: relative;
        }

        .product-count {
          display: none;
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.8em;
          color: #fff;
        }

        .item-name-hex:hover .product-count {
          display: inline-block;
        }
      `}</style>
    </>
  );
};

export default TopProducts;
