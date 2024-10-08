import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productDetails, removeProduct } from "@/store/productSlice";
import FilterOffice from "./FilterOffice";

const Pens = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  console.log(filtered);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://spice-19.onrender.com/api/product/Sub/Category/Product/List?SubCategoryID=66e94ffbe4a0682d9adf697d`
        );
        setProducts(res?.data?.data); // Axios automatically parses JSON
        console.log(res?.data?.data); // Logs the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    dispatch(removeProduct());
    getProduct();
  }, [dispatch]);

  return (
    <>
      {" "}
      <div class="filter-main-product-cards-main container">
        <div className="row">
          <div className="col-md-3">
            <FilterOffice
              filteredProducts={(filtered) => setFiltered(filtered)}
            />
            {/* <Filter /> */}
          </div>
          <div className="col-md-8">
            {" "}
            <h2 className="text-center">Pens</h2>{" "}
            {/* Changed class to className */}
            <div className="products-card">
              {(filtered?.length > 0 ? filtered : products)?.map(
                (product, index) => (
                  <figure className="snip1423" key={index}>
                    {" "}
                    {/* Changed class to className */}
                    <img
                      src={product?.productPicture[0] || "/Assests/mokup1.png"}
                      alt="sample57"
                    />
                    <figcaption>
                      <h3>{product?.productName}</h3>
                      <p>{product?.productDescription}</p>
                      <div className="price">
                        {" "}
                        {/* Changed class to className */}
                        <s>₹{product?.productMRP}</s>₹{product?.productPrice}
                      </div>
                    </figcaption>
                    <i className="fa fa-cart-plus"></i>{" "}
                    {/* Changed class to className */}
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

export default Pens;
