import React from "react";
import ImageSlide from "./ImageSlide";
import ProductEditor from "./ProductEditor";
import ProductsGrid from "./ProductsGrid";
import { useSelector } from "react-redux";

const ProductEdit = () => {
  const {product} = useSelector(state => state.product)

  console.log(product);
  
  return (
    <>
      <div class="cart-details-main-container row ">
        <div className="col-md-6">
          <ImageSlide images={product?.productPicture} />
        </div>
        <div className="col-md-6 ">
          <ProductEditor product={product} />
        </div>
        {/* <div className="col-12">
          <ProductsGrid />
        </div> */}
      </div>
    </>
  );
};

export default ProductEdit;
