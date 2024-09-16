import React from "react";
import Basket from "./Basket";
import Summary from "./Summary";

const Cart = () => {
  return (
    <>
      <main class="cart-details-inner">
        <Basket />
        <Summary />
      </main>
    </>
  );
};

export default Cart;
