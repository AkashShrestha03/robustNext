import React from 'react'

const Summary = () => {
  return (
    <>
      <aside>
        <div class="summary">
          <div class="summary-total-items">
            <span class="total-items"></span> Items in your Bag
          </div>
          <div class="summary-subtotal">
            <div class="subtotal-title">Subtotal</div>
            <div class="subtotal-value final-value" id="basket-subtotal">
              130.00
            </div>
            <div class="summary-promo hide">
              <div class="promo-title">Promotion</div>
              <div class="promo-value final-value" id="basket-promo"></div>
            </div>
          </div>
          <div class="summary-delivery">
            <select
              name="delivery-collection"
              class="summary-delivery-selection"
            >
              <option value="0" selected="selected">
                Select Collection or Delivery
              </option>
              <option value="collection">Collection</option>
              <option value="first-class">Royal Mail 1st Class</option>
              <option value="second-class">Royal Mail 2nd Class</option>
              <option value="signed-for">Royal Mail Special Delivery</option>
            </select>
          </div>
          <div class="summary-total">
            <div class="total-title">Total</div>
            <div class="total-value final-value" id="basket-total">
              130.00
            </div>
          </div>
          <div class="summary-checkout">
            <button class="btn bg-pink w-100">Checkout</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Summary
