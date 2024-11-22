import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productDetails, removeProduct } from "@/store/productSlice";
import FilterWellness from "./FilterWellness";

const Combo = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [subcategoryName, setSubcategoryName] = useState("Combo Set");
  const [sortOrder, setSortOrder] = useState(""); // Default empty to show "Sort By Price"
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://spice-19.onrender.com/api/product/Sub/Category/Product/List?SubCategoryID=6735d235ec55d20d9810f4bd`
        );
        setProducts(res?.data?.data); // Axios automatically parses JSON
        console.log(res?.data?.data); // Logs the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    dispatch(removeProduct());
    getProduct();
  }, []);

  const fetchSortedProducts = async (order) => {
    try {
      const res = await axios.get(
        `https://spice-19.onrender.com/api/product/Sort/Product?price=${order}&SubCategoryID=6735d235ec55d20d9810f4bd`
      );
      setProducts(res?.data?.data);
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }
  };

  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    if (selectedOrder) {
      fetchSortedProducts(selectedOrder);
    }
  };

  const handleFilteredProducts = (filtered, subCategoryName) => {
    setFiltered(filtered); // Update filtered products
    setSubcategoryName(subCategoryName); // Update the heading to the selected subcategory name
  };

  return (
    <>
      {" "}
      <div class="filter-main-product-cards-main">
        <div className="row ">
          <div className="col-md-3 filter-container">
            <div className="filter">
              <div className="d-flex justify-content-end mb-3">
                <select
                  className="form-select"
                  value={sortOrder}
                  onChange={handleSortChange}
                >
                  <option value="">Sort By Price</option>
                  <option value="AES">Lowest Price First</option>
                  <option value="DES">Highest Price First</option>
                </select>
              </div>
              <FilterWellness
                filteredProducts={(filtered, subCategoryName) =>
                  handleFilteredProducts(filtered, subCategoryName)
                }
              />
            </div>
          </div>
          <div className="col-md-8">
            {" "}
            <h2 className="text-center">{subcategoryName}</h2>
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
                    <figcaption className="d-flex flex-column align-items-center">
                      <h3 className="card-heading">
                        {product?.productName}{" "}
                        {product?.madeInIndia && (
                          <div className="made-in-india-flag">
                            <img src="/image.png" alt="Made in India" />
                          </div>
                        )}
                      </h3>
                      <p>{product?.ShortDescription}</p>

                      {/* {product?.madeInIndia && (
                <div className="made-in-india-flag">
                  <img src="/image.png" alt="Made in India" />
                  Make in India
                </div>
              )} */}

                      {product?.sustainable && (
                        <div className="sustainable-icon">
                          <i class="fa fa-leaf" aria-hidden="true"></i>
                        </div>
                      )}

                      <div className="price">
                        <s>₹{product?.productMRP}</s>₹{product?.productPrice}
                      </div>
                    </figcaption>
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

export default Combo;
