import { productDetails } from "@/store/productSlice";
import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchedProducts = () => {
  const dispatch = useDispatch();
  const { searchedProducts } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [page, setPage] = useState(1);
  const observer = useRef();

  const fetchSortedProducts = async (sortOrder, pageNum) => {
    try {
      const response = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Sort?price=${sortOrder}&page=${pageNum}`
      );
      if (response.data.status === 1) {
        setProducts((prevProducts) => [...prevProducts, ...response.data.data]);
      }
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }
  };

  useEffect(() => {
    fetchSortedProducts(sortOrder, page);
  }, [sortOrder, page]);

  const handleSortChange = (event) => {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);
    setPage(1);
    setProducts([]);
    fetchSortedProducts(selectedSortOrder, 1);
  };

  const lastProductRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prevPage) => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  return (
    <div className="filter-main-product-cards-main">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Searched Results</h2>
          <div className="products-card">
            {(searchedProducts?.length > 0 ? searchedProducts : products)?.map(
              (product, index) => {
                if (index === products.length - 1) {
                  return (
                    <figure
                      className="snip1423"
                      key={index}
                      ref={lastProductRef}
                    >
                      <img
                        src={
                          product?.productPicture[0] || "/Assests/mokup1.png"
                        }
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
                        <p>
                          {product?.ShortDescription || "Product Description"}
                        </p>
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
                  );
                } else {
                  return (
                    <figure className="snip1423" key={index}>
                      <img
                        src={
                          product?.productPicture[0] || "/Assests/mokup1.png"
                        }
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
                        <p>
                          {product?.ShortDescription || "Product Description"}
                        </p>
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
                  );
                }
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchedProducts;
