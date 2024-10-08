import { removeFromList } from "@/store/productSlice";
import { useAmp } from "next/amp";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const BrochureList = () => {
  const router = useRouter();
  const { brochure } = useSelector((state) => state.product);
  console.log(brochure);
  const dispatch = useDispatch();

  return (
    <>
      <main class="cart-details-inner">
        <div class="basket">
          <div class="basket-module">
            <button
              class="btn bg-sky-blue"
              onClick={() => router.push("/downloadbrochure")}
            >
              Brochure
            </button>
          </div>
          <div class="basket-labels">
            <ul>
              <li class="item item-heading">Item</li>
              <li class="price">Price</li>
            </ul>
          </div>
          {brochure?.map((product, index) => (
            <div class="basket-product" key={index}>
              <div class="item">
                <div class="product-image">
                  <img
                    // src="http://placehold.it/120x166"
                    src={product?.productPicture[0]}
                    alt="Placholder Image 2"
                    class="product-frame"
                    style={{ width: "120px", height: "166px" }}
                  />
                </div>
                <div class="product-details">
                  <h1>
                    <strong>{product?.productName}</strong>{" "}
                  </h1>
                </div>
              </div>
              <div class="price">{product?.productPrice}</div>

              <div class="remove">
                <button onClick={() => dispatch(removeFromList(product._id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BrochureList;
