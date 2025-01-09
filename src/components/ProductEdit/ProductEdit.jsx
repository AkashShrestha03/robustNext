import React from "react";
import ImageSlide from "./ImageSlide";
import ProductEditor from "./ProductEditor";
import ProductsGrid from "./ProductsGrid";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ProductEdit = () => {
  const router = useRouter();
  const { product } = useSelector((state) => state.product);

  console.log(product);

  return (
    <>
      <div class="cart-details-main-container row ">
        <div className="col-md-6">
          <div className="back">
            {/* <button onClick={() => router.back()}>Previous Page</button> */}
            <Breadcrumb product={product} />
          </div>
          <ImageSlide images={product?.productPicture} />
        </div>
        <div className="col-md-6 ">
          <ProductEditor product={product} />
        </div>
        <div className="col-12 mt-5">
          <h2>Related Products</h2>
          <ProductsGrid id={product?.SubCategoryID} productID={product?._id} />
        </div>
      </div>
    </>
  );
};

export default ProductEdit;
