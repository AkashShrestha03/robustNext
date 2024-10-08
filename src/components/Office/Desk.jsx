import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productDetails, removeProduct } from "@/store/productSlice";
import API from "@/Config";
import FilterOffice from "./FilterOffice";

const Desk = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${API}/api/product/Sub/Category/Product/List?SubCategoryID=66e94f09e4a0682d9adf68fa`
        );
        setProducts(res?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    dispatch(removeProduct());
    getProduct();
  }, [dispatch]);

  return (
    <>
      <div class="filter-main-product-cards-main container">
        <div className="row">
          <div className="col-md-3">
            <FilterOffice
              filteredProducts={(filtered) => setFiltered(filtered)}
            />
          </div>
          <div className="col-md-8">
            {" "}
            <h2 className="text-center">Desk</h2>{" "}
            <div className="products-card">
              {(filtered?.length > 0 ? filtered : products)?.map(
                (product, index) => (
                  <figure className="snip1423" key={index}>
                    {" "}
                    <img
                      src={product?.productPicture[0] || "/Assests/mokup1.png"}
                      alt="sample57"
                    />
                    <figcaption>
                      <h3>{product?.productName}</h3>
                      <p>{product?.productDescription}</p>
                      <div className="price">
                        {" "}
                        <s>₹{product?.productMRP}</s>₹{product?.productPrice}
                      </div>
                    </figcaption>
                    <i className="fa fa-cart-plus"></i>{" "}
                    <Link
                      href="/productedit"
                      onClick={() => dispatch(productDetails(product))}
                    ></Link>
                  </figure>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desk;
