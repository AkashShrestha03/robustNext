
import API from "@/Config";
import { productDetails, removeProduct } from "@/store/productSlice";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Grid = ({ filtered }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  console.log(filtered);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`${API}/api/product/All`);
        setProducts(res?.data?.data); // Axios automatically parses JSON
        console.log(res?.data?.data); // Logs the fetched product data
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
        {" "}
      
        {(filtered?.length > 0 ? filtered : products)?.map((product, index) => (
          <figure className="snip1423" key={index}>
            {" "}
           
            <img
              src={product?.productPicture[0] || "/Assests/mokup1.png"}
              alt="sample57"
            />
            <figcaption className="d-flex flex-column align-items-center">
              <h3>{product?.productName}</h3>
              <p>{product?.productDescription}</p>
              <div className="price">
                {" "}
            
                <s>₹{product?.productMRP}</s>₹{product?.productPrice}
              </div>
            </figcaption>
            <i className="fa fa-cart-plus"></i>{" "}
          
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
