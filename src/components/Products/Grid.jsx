import { productDetails, removeProduct } from "@/store/productSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LeafIcon from "./LeafIcon";
import Loader from "../Loader/Loader";

const Grid = ({ filtered, load, loader }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(load);
  const [count, setCount] = useState(18);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        loader(true);
        const res = await axios.get(
          `https://api.robustpromo.com/api/product/All`
        );
        setProducts(res?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        loader(false);
      }
    };
    dispatch(removeProduct());
    getProduct();
  }, [dispatch]);

  if (load) {
    return <Loader />;
  }

  const product = filtered || products;

  return (
    <>
      <h2 className="text-center">All Robust</h2>
      {product?.length === 0 ? (
        <h5 className="text-center">No products available in selected category.</h5>
      ) : (
        <div className="products-card">
          {(filtered?.length > 0 ? filtered : products)
            .slice(0, count)
            ?.map((product, index) => (
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
      )}
      {count >= products?.length || count >= filtered?.length ? null : (
        <div
          className="d-flex justify-content-center text-primary cursor"
          onClick={() => setCount(count + 9)}
        >
          View More...
        </div>
      )}
    </>
  );
};

export default Grid;
