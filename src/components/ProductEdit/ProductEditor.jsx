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
    dispatch(shortlist(product))
  };
  return (
    <div class=" Product-editor p-3 ">
      <div class=" edit-container-info-section d-flex justify-content-between align-items-center">
        <div class="m-4" style={{ width: "80%" }}>
          <h2 class="cart-details-heading">{product?.productName}</h2>
          <p class="cart-details-text">{product?.productDescription}</p>
          <div className="price mt-2 ">
            {" "}
            <s>₹{product?.productMRP}</s>₹{product?.productPrice}
          </div>
        </div>
        <div class="btn-sep-cart-details">
          <button class="btn bg-pink" onClick={handleShortlist}>
            {isShortlisted ? "Shortlisted" : "Shortlist"}
          </button>

          {/* <Link href="/cart">
            <button class="btn bg-sky-blue">Add To Cart</button>
          </Link> */}
        </div>
      </div>

      <hr />
      <div class="choose-color-container  m-4">
        <h5 class="">
          <span class="product-caption">
            <b>Choose your colors</b>
          </span>
        </h5>
        <div class="color-select d-flex pt-3 pl-4">
          <button class="circle-border">
            <div class="p-circle" style={{ backgroundColor: "red" }}></div>
          </button>
          <button class="circle-border">
            <div
              class="p-circle"
              style={{ backgroundColor: "rgb(239, 176, 18)" }}
            ></div>
          </button>
          <button class="circle-border">
            <div
              class="p-circle"
              style={{ backgroundColor: "rgb(255, 39, 244)" }}
            ></div>
          </button>
          <button class="circle-border">
            <div
              class="p-circle"
              style={{ backgroundColor: "rgb(46, 68, 239)" }}
            ></div>
          </button>
        </div>
      </div>
      <hr />
      <div class=" offer-card uplaod-img-section m-4">
        <h5 class="">
          &nbsp;
          <span class="product-caption">
            <b>Descriptions</b>
          </span>
        </h5>

        <ul>
          <li> {product?.productDescription}</li>
          {/* <li>
            Bank Offer: Get ₹50 instant discount on first UPI txn on order of
            ₹200 and aboveT&C{" "}
          </li>

          <li> Bank Offer: 5% Cashback on Axis Bank CardT&C </li>

          <li>
            {" "}
            Bank Offer: 10% off up to ₹1,250 on HDFC Bank Credit Card EMI Txns,
            Tenure: 6 and 9 months, Min Txn Value: ₹7500T&C{" "}
          </li>

          <li>
            {" "}
            Special Price: Get extra 10% off (price inclusive of
            cashback/coupon)T&C
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default ProductEditor;
