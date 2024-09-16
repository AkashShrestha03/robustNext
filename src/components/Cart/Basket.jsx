import React from "react";

const Basket = () => {
  return (
    <>
      <div class="basket">
        <div class="basket-module">
          <label for="promo-code">Enter a promotional code</label>
          <input
            id="promo-code"
            type="text"
            name="promo-code"
            maxlength="5"
            class="promo-code-field"
          />
          <button class="btn bg-sky-blue">Apply</button>
        </div>
        <div class="basket-labels">
          <ul>
            <li class="item item-heading">Item</li>
            <li class="price">Price</li>
            <li class="quantity">Quantity</li>
            <li class="subtotal">Subtotal</li>
          </ul>
        </div>

        <div class="basket-product">
          <div class="item">
            <div class="product-image">
              <img
                src="http://placehold.it/120x166"
                alt="Placholder Image 2"
                class="product-frame"
              />
            </div>
            <div class="product-details">
              <h1>
                <strong>
                  <span class="item-quantity">4</span> x Eliza J
                </strong>{" "}
                Lace Sleeve Cuff Dress
              </h1>
              <p>
                <strong>Navy, Size 18</strong>
              </p>
              <p>Product Code - 232321939</p>
            </div>
          </div>
          <div class="price">26.00</div>
          <div class="quantity">
            <input type="number" value="4" min="1" class="quantity-field" />
          </div>
          <div class="subtotal">104.00</div>
          <div class="remove">
            <button>Remove</button>
          </div>
        </div>
        <div class="basket-product">
          <div class="item">
            <div class="product-image">
              <img
                src="http://placehold.it/120x166"
                alt="Placholder Image 2"
                class="product-frame"
              />
            </div>
            <div class="product-details">
              <h1>
                <strong>
                  <span class="item-quantity">1</span> x Whistles
                </strong>{" "}
                Amella Lace Midi Dress
              </h1>
              <p>
                <strong>Navy, Size 10</strong>
              </p>
              <p>Product Code - 232321939</p>
            </div>
          </div>
          <div class="price">26.00</div>
          <div class="quantity">
            <input type="number" value="1" min="1" class="quantity-field" />
          </div>
          <div class="subtotal">26.00</div>
          <div class="remove">
            <button>Remove</button>
          </div>
        </div>
        <div class="basket-product">
          <div class="item">
            <div class="product-image">
              <img
                src="http://placehold.it/120x166"
                alt="Placholder Image 2"
                class="product-frame"
              />
            </div>
            <div class="product-details">
              <h1>
                <strong>
                  <span class="item-quantity">1</span> x Whistles
                </strong>{" "}
                Amella Lace Midi Dress
              </h1>
              <p>
                <strong>Navy, Size 10</strong>
              </p>
              <p>Product Code - 232321939</p>
            </div>
          </div>
          <div class="price">26.00</div>
          <div class="quantity">
            <input type="number" value="1" min="1" class="quantity-field" />
          </div>
          <div class="subtotal">26.00</div>
          <div class="remove">
            <button>Remove</button>
          </div>
        </div>
        <div class="basket-product">
          <div class="item">
            <div class="product-image">
              <img
                src="http://placehold.it/120x166"
                alt="Placholder Image 2"
                class="product-frame"
              />
            </div>
            <div class="product-details">
              <h1>
                <strong>
                  <span class="item-quantity">1</span> x Whistles
                </strong>{" "}
                Amella Lace Midi Dress
              </h1>
              <p>
                <strong>Navy, Size 10</strong>
              </p>
              <p>Product Code - 232321939</p>
            </div>
          </div>
          <div class="price">26.00</div>
          <div class="quantity">
            <input type="number" value="1" min="1" class="quantity-field" />
          </div>
          <div class="subtotal">26.00</div>
          <div class="remove">
            <button>Remove</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Basket;
