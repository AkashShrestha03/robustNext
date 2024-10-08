import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { productDetails, removeProduct } from "@/store/productSlice";
import { useDispatch } from "react-redux";
import FilterOffice from "./FilterOffice";
import API from "@/Config";

const Notebooks = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `${API}/api/product/Sub/Category/Product/List?SubCategoryID=66e94fa7e4a0682d9adf6975`
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
            <h2 className="text-center">Notebooks</h2>{" "}
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

export default Notebooks;
