import { shortlist } from "@/store/productSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TextEditor from "../../../../robustAdmin/src/components/Products/TextEditor";

const ProductEditor = ({ product }) => {
  const [isShortlisted, setIsShortlisted] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleShortlist = () => {
    setIsShortlisted(true);
    dispatch(shortlist(product));
  };

  // Parse the color array from the stringified format

  const colors = product?.colour;

  return (
    <div className="Product-editor p-3">
      <div className="edit-container-info-section d-flex justify-content-between align-items-center flex-wrap">
        <div className="m-4" style={{ width: "80%" }}>
          <h2 className="cart-details-heading">
            {product?.productName}{" "}
            {product?.madeInIndia && (
              <div className="made-in-india">
                <img src="/image.png" alt="Made in India" />
              </div>
            )}
            {product?.sustainable && (
              <i class="fa fa-leaf text-success" aria-hidden="true"></i>
            )}
          </h2>{" "}
          {/* <p className="cart-details-text">{product?.productDescription}</p> */}
          <div className="price mt-2">
            <s>₹{product?.productMRP}</s>₹{product?.productPrice}
          </div>
          <div className="price d-flex g-3">
            <p className="text-secondary">Minimum Order Quantity:</p>{" "}
            <p className="mx-2"> {product?.minProduct}</p>
          </div>
        </div>
        <div className="px-4 w-100">
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

        <div
          dangerouslySetInnerHTML={{
            __html: product?.productDescription,
          }}
        />
      </div>
    </div>
  );
};

export default ProductEditor;
