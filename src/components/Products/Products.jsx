import React, { useState, useEffect } from "react";
import Filter from "./Filter";
import Grid from "./Grid";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState(""); // To track the selected sort order

  // Function to fetch products sorted by price
  const fetchSortedProducts = async (sortOrder) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Sort?price=${sortOrder}`
      );
      if (response.data.status === 1) {
        setProducts(response.data.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
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
      <div className="row gap-3">
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
            <Filter
              loader={(data) => setLoading(data)}
              onProductsFetched={(products) => setProducts(products)}
            />
          </div>
        </div>
        <div className="col-md-8">
          <Grid
            load={loading}
            loader={(data) => setLoading(data)}
            filtered={products}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
