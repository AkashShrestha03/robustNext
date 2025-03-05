import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const BrandFilter = ({loader, onProductsFetched, brandID}) => {
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const res = await axios.get(
          "https://robust.mmrsolutions.co.in/api/Brand/Get"
        );
        setBrands(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrands();
  }, []);
  console.log("Id from router", router.query.id);

  const getProductsByCategory = async (brandID) => {
    try {
      loader(true);
      const res = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Sort`,
        {
          params: { brandID: brandID || router.query?.brandId },
        }
      );
      const products = res.data?.data;
      const brandName = brands.find((cat) => cat._id === brandID)?.BrandName;

      onProductsFetched(products, brandName); // Send the products and category name to the parent
    } catch (error) {
      console.log("Error fetching products by category:", error);
      // Optional: Handle error state for products
    } finally {
      loader(false);
    }
  };
  useEffect(() => {
    getProductsByCategory();
  }, [router.query?.brandId]);

  const getProduct = async () => {
    try {
      loader(true);
      const res = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/All`
      );
      onProductsFetched(res?.data?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      loader(false);
    }
  };

  const handleCheckboxChange = (brandId) => {
    setSelectedBrand(brandId);
    getProductsByCategory(brandId); // Fetch products when category is selected
    brandID(brandId);
  };

  
  return (
    <div className="accordion mb-3" id="accordionPanelsStayOpenExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#panelsStayOpen-collapseOne"
            aria-expanded="true"
            aria-controls="panelsStayOpen-collapseOne"
          >
            Brands
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body panel">
            <label className="container my-2">
              All Products
              <input
                type="radio"
                checked={selectedBrand === null}
                onChange={() => {
                  handleCheckboxChange(null);
                  getProduct();
                }}
              />
            </label>
            {brands?.map((brand, index) => (
              <label className="container my-2" key={index}>
                {brand?.BrandName}
                <input
                  type="radio"
                  onChange={() => handleCheckboxChange(brand?._id)}
                  checked={selectedBrand === brand?._id}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandFilter;
