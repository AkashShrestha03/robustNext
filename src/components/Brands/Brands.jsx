import React, { useEffect, useState } from "react";
import BrandProducts from "./BrandProducts";
import BrandFilter from "./BrandFilter";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { removeProduct } from "@/store/productSlice";

const Brands = () => {
  const [products, setProducts] = useState([]);
  const [brandName, setBrandName] = useState("");
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("");
  const [brandID, setBrandID] = useState(null);
    const dispatch = useDispatch();
  const router = useRouter();

  // Function to fetch products sorted by price
  const fetchSortedProducts = async (sortOrder) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Sort`,
        {
          params: {
            brandID: brandID || router.query?.brandId,
            price: sortOrder,
          },
        }
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

  useEffect(() => {
    fetchSortedProducts();
    dispatch(removeProduct());
  }, [brandID, router.query?.brandId]);

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
            <BrandFilter
              loader={(data) => setLoading(data)}
              onProductsFetched={(products, brandName) => {
                setProducts(products);
                setBrandName(brandName);
              }}
              brandID={(data) => setBrandID(data)}
            />
          </div>
        </div>
        <div className="col-md-8">
          <BrandProducts
            load={loading}
            loader={(data) => setLoading(data)}
            filtered={products}
            brandName={brandName}
          />
        </div>
      </div>
    </div>
  );
};

export default Brands;
