import { shortlist } from "@/store/productSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const ProductEditor = ({ product }) => {
  const [isShortlisted, setIsShortlisted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleShortlist = () => {
    setIsShortlisted(true);
    dispatch(shortlist(product));
  };

  // Parse the color array from the stringified format

  
  const colors = product?.colour ? JSON.parse(product.colour) : [];

  return (
    <div className="Product-editor p-3">
      <div className="edit-container-info-section d-flex justify-content-between align-items-center">
        <div className="m-4" style={{ width: "80%" }}>
          <h2 className="cart-details-heading">{product?.productName}</h2>
          <p className="cart-details-text">{product?.productDescription}</p>
          <div className="price mt-2">
            <s>₹{product?.productMRP}</s>₹{product?.productPrice}
          </div>
        </div>
        <div className="btn-sep-cart-details">
          <button className="btn bg-pink" onClick={handleShortlist}>
            {isShortlisted ? "Shortlisted" : "Shortlist"}
          </button>
        </div>
      </div>

      <hr />
      <div className="choose-color-container m-4">
        <h5>
          <span className="product-caption">
            <b>Choose your colors</b>
          </span>
        </h5>
        <div className="color-select d-flex pt-3 pl-4">
          {colors?.length > 0 ? (
            colors.map((color, index) => (
              <button className="circle-border" key={index}>
                <div
                  className="p-circle"
                  style={{ backgroundColor: color }}
                ></div>
              </button>
            ))
          ) : (
            <p>No Colours Available</p>
          )}
        </div>
      </div>
      <hr />
      <div className="offer-card uplaod-img-section m-4">
        <h5>
          &nbsp;
          <span className="product-caption">
            <b>Descriptions</b>
          </span>
        </h5>

        <ul>
          <li>{product?.productDescription}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductEditor;
