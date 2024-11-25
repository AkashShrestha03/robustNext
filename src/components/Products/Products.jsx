import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Grid from "./Grid";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // To track the selected sort order

  // Function to fetch products sorted by price
  const fetchSortedProducts = async (sortOrder) => {
    try {
      const response = await axios.get(
        `https://spice-19.onrender.com/api/product/Sort?price=${sortOrder}`
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
        <div className="col-md-3 filter-container">
          <div className="filter">
            
            <div className="form-group mb-3">
              <select
                name="sortPrice"
                className="form-control"
                id="sortPrice"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="">Sort By Price</option>
                <option value="AES">Lowest Price First</option>
                <option value="DES">Highest Price First</option>
              </select>
            </div>
            <Filter onProductsFetched={(products) => setProducts(products)} />
          </div>
        </div>
        <div className="col-md-8">
          <Grid filtered={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
