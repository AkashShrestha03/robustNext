import { productDetails } from "@/store/productSlice";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductsGrid = ({ id, productID }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://robust.mmrsolutions.co.in/api/product/Sub/Category/Product/List?SubCategoryID=${id}`
        );
        setProducts(res?.data?.data);
        setLoading(false);
        console.log(res?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  return (
    <>
      <div className="products-card mt-5">
        {products
          ?.filter((product) => product._id !== productID) // Exclude the product with the matching ID
          ?.slice(0, 5)
          ?.map((product, index) => (
            <figure className="snip1423" key={index}>
              <img
                src={product?.productPicture[0] || "/Assests/mokup1.png"}
                alt="sample57"
              />
              <figcaption>
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
          ))}
      </div>
    </>
  );
};

export default ProductsGrid;
