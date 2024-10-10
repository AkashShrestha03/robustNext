import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { productDetails, removeProduct } from "@/store/productSlice";
import { useDispatch } from "react-redux";
import FilterApparel from "./FilterApparel";

const Sweatshirts = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [subcategoryName, setSubcategoryName] = useState("Sweatshirts");
  const dispatch = useDispatch();

  console.log(filtered);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://spice-19.onrender.com/api/product/Sub/Category/Product/List?SubCategoryID=66e94e63e4a0682d9adf68d7`
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

  const handleFilteredProducts = (filtered, subCategoryName) => {
    setFiltered(filtered); // Update filtered products
    setSubcategoryName(subCategoryName); // Update the heading to the selected subcategory name
  };

  return (
    <>
      <div className="filter-main-product-cards-main container">
        <div className="row">
          <div className="col-md-3">
            <FilterApparel
              filteredProducts={(filtered, subCategoryName) =>
                handleFilteredProducts(filtered, subCategoryName)
              }
            />
          </div>
          <div className="col-md-8">
            <h2 className="text-center">{subcategoryName}</h2>
            <div className="products-card">
              {(filtered?.length > 0 ? filtered : products)?.map(
                (product, index) => (
                  <figure className="snip1423" key={index}>
                    <img
                      src={product?.productPicture[0] || "/Assests/mokup1.png"}
                      alt="sample57"
                    />
                    <figcaption className="d-flex flex-column align-items-center">
                      <h3 className="card-heading">
                        {product?.productName}
                        {product?.madeInIndia && (
                          <div className="made-in-india-flag">
                            <img src="/image.png" alt="Made in India" />
                          </div>
                        )}
                      </h3>
                      <p>{product?.productDescription}</p>

                      {product?.sustainable && (
                        <div className="sustainable-icon">
                          <i className="fa fa-leaf" aria-hidden="true"></i>
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

export default Sweatshirts;
