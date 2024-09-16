import React from "react";
import ImageSlide from "./ImageSlide";
import ProductEditor from "./ProductEditor";
import ProductsGrid from "./ProductsGrid";

const ProductEdit = () => {
  return (
    <>
      <div class="cart-details-main-container row ">
        <div className="col-6">
          <ImageSlide />
        </div>
        <div className="col-6 ">
          <ProductEditor />
        </div>
        <div className="col-12">
          <ProductsGrid />
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
