import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import { productDetails, removeProduct } from "@/store/productSlice";
import Link from "next/link";

const BrandProducts = ({ filtered, load, loader, brandName }) => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(20);
  const observer = useRef();
  const dispatch = useDispatch();
  const router = useRouter();

  const getProduct = async () => {
    try {
      loader(true);
      const res = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/All`
      );
      setProducts(res?.data?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      loader(false);
    }
  };
  

  const product = filtered?.length > 0 ? filtered : products;

  const lastProductRef = useCallback(
    (node) => {
      if (load) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setCount((prevCount) => prevCount + 20);
        }
      });
      if (node) observer.current.observe(node);
    },
    [load]
  );

  if (load === true) {
    return <Loader />;
  }
  return (
    <>
      <h2 className="text-center">
        {brandName || router.query?.brandName || "All Robust"}
      </h2>
      {product?.length === 0 ? (
        <h5 className="text-center">
          No products available in selected brand.
        </h5>
      ) : (
        <div className="products-card">
          {product.slice(0, count).map((product, index) => {
            if (index + 1 === count) {
              return (
                <figure className="snip1423" key={index} ref={lastProductRef}>
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
                    <p>{product?.ShortDescription || "Product Description"}</p>
                    {product?.sustainable && (
                      <div className="sustainable-icon">
                        <i className="fa fa-leaf" aria-hidden="true"></i>
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
              );
            } else {
              return (
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
                    <p>{product?.ShortDescription || "Product Description"}</p>
                    {product?.sustainable && (
                      <div className="sustainable-icon">
                        <i className="fa fa-leaf" aria-hidden="true"></i>
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
              );
            }
          })}
        </div>
      )}
    </>
  );
};

export default BrandProducts;
