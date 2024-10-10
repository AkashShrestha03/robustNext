import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productDetails, removeProduct } from "@/store/productSlice";
import FilterApparel from "./FilterApparel";

const Footwears = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://spice-19.onrender.com/api/product/Sub/Category/Product/List?SubCategoryID=66e94d9be4a0682d9adf68c9`
        );
        setProducts(res?.data?.data); // Axios automatically parses JSON
        console.log(res?.data?.data); // Logs the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProduct();
    dispatch(removeProduct());
  }, [dispatch]);

  return (
    <>
      {" "}
      <div class="filter-main-product-cards-main container">
        <div className="row">
          <div className="col-md-3">
            {/* <Filter /> */}
            <FilterApparel
              filteredProducts={(filtered) => setFiltered(filtered)}
            />
          </div>
          <div className="col-md-8">
            {" "}
            <h2 className="text-center">Footwears</h2>{" "}
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

                      {product?.madeInIndia && (
                        <div className="made-in-india-flag">
                          <img src="/image.png" alt="" />
                          Make in India
                        </div>
                      )}
                      {product?.sustainable && (
                        <div className="sustainable-icon">
                          <i class="fa fa-leaf" aria-hidden="true"></i>
                        </div>
                      )}

                      <div className="price">
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

export default Footwears;
