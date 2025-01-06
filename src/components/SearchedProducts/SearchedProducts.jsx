import { productDetails } from "@/store/productSlice";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchedProducts = () => {
  const dispatch = useDispatch();
  const { searchedProducts } = useSelector((state) => state.product);
  const [count, setCount] = useState(20);
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // To track the selected sort order

  // Function to fetch products sorted by price
  const fetchSortedProducts = async (sortOrder) => {
    try {
      const response = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Sort?price=${sortOrder}`
      );
      if (response.data.status === 1) {
        setProducts(response.data.data); // Update products with sorted data
      }
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }
  };

  // Handle change of sort order
  const handleSortChange = (event) => {
    const selectedSortOrder = event.target.value;
    setSortOrder(selectedSortOrder);
    fetchSortedProducts(selectedSortOrder); // Fetch sorted products based on selection
  };
  return (
    <div className="filter-main-product-cards-main">
      <div className="row">
      
        <div className="col-md-12">
          <h2 className="text-center">Searched Results</h2>
          <div className="products-card">
            {(searchedProducts?.length > 0 ? searchedProducts : products)
              .slice(0, count)
              ?.map((product, index) => (
                <figure className="snip1423" key={index}>
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
                    <p>{product?.ShortDescription || "Product Description"}</p>

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
              ))}
          </div>
          {count >= products?.length ||
          count >= searchedProducts?.length ? null : (
            <div
              className="d-flex justify-content-center text-primary cursor"
              onClick={() => setCount(count + 9)}
            >
              View More...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchedProducts;
