import { productDetails, removeProduct } from "@/store/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LeafIcon from "./LeafIcon";

const Grid = ({ filtered }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://spice-19.onrender.com/api/product/All`
        );
        setProducts(res?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    dispatch(removeProduct());
    getProduct();
  }, [dispatch]);

  return (
    <>
      <div className="products-card">
        {(filtered?.length > 0 ? filtered : products)?.map((product, index) => (
          <figure className="snip1423" key={index}>
            <img
              src={product?.productPicture[0] || "/Assests/mokup1.png"}
              alt="sample57"
            />
            <figcaption className="d-flex flex-column align-items-center">
              <h3 className="card-heading">
                {product?.productName}{" "}
                {product?.madeInIndia && (
                  <div className="made-in-india-flag">
                    <img src="/image.png" alt="Made in India" />
                  </div>
                )}
              </h3>
              <p>{product?.productDescription}</p>

              {/* {product?.madeInIndia && (
                <div className="made-in-india-flag">
                  <img src="/image.png" alt="Made in India" />
                  Make in India
                </div>
              )} */}

              {product?.sustainable && (
                <div className="sustainable-icon">
                  <i class="fa fa-leaf" aria-hidden="true"></i>
                </div>
              )}

              <div className="price">
                <s>₹{product?.productMRP}</s>₹{product?.productPrice}
              </div>
            </figcaption>

            <Link
              href="/productedit"
              onClick={() => dispatch(productDetails(product))}
            ></Link>
          </figure>
        ))}
      </div>
    </>
  );
};

export default Grid;
