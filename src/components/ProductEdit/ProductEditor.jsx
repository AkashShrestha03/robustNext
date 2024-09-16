import Link from "next/link";
import React from "react";

const ProductEditor = () => {
  return (
    <div class=" Product-editor p-3 ">
      <div class=" edit-container-info-section d-flex justify-content-between align-items-center">
        <div class="m-4" style={{ width: "80%" }}>
          <h2 class="cart-details-heading">Ascolour Basic Tshirts</h2>
          <p class="cart-details-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            culpa autem pariatur ullam laudantium, nostrum facilis aut delectus
            provident amet, et ipsa molestiae quibusdam facere.
          </p>
        </div>
        <div class="btn-sep-cart-details">
          <button class="btn bg-pink">Download Sample</button>

          <Link href="/cart">
            <button class="btn bg-sky-blue">Add To Cart</button>
          </Link>
        </div>
      </div>

      <div id="myDIV" style={{ display: "none" }}>
        <svg
          class="pop-up-btn"
          viewBox="2 2 20 20"
          style={{
            display: "inline-block",
            color: "rgba(0, 0, 0, 0.87)",
            fill: "rgb(255, 255, 255)",
            height: "24px",
            width: "24px",
            userSelect: "none",
            transition: "all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms",
            top: "-9px",
            left: "-10px",
          }}
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
        </svg>
        <h3 class="mb-5">Instant quote</h3>
        <form action="/action_page.php">
          <label for="quantity">Quantity (between 1 and 5):</label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" />
          <hr />
          <label for="quantity">Quantity (between 1 and 5):</label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" />
          <hr />
          <label for="quantity">Quantity (between 1 and 5):</label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" />
          <hr />
          <button class="btttn-pop">Submit</button>
        </form>
      </div>

      <hr />
      <div class="choose-color-container  m-4">
        <h5 class="">
          <span class="product-step">1</span>&nbsp;
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
          <span class="product-step">
            <b>2</b>
          </span>
          &nbsp;
          <span class="product-caption">
            <b>Available offers</b>
          </span>
        </h5>
        <ul>
          <li>
            Bank OfferGet ₹50 instant discount on first UPI txn on order of ₹200
            and aboveT&C{" "}
          </li>

          <li> Bank Offer5% Cashback on Axis Bank CardT&C </li>

          <li>
            {" "}
            Bank Offer10% off up to ₹1,250 on HDFC Bank Credit Card EMI Txns,
            Tenure: 6 and 9 months, Min Txn Value: ₹7500T&C{" "}
          </li>

          <li>
            {" "}
            Special PriceGet extra 10% off (price inclusive of
            cashback/coupon)T&C
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductEditor;
