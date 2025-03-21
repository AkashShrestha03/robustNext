import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const FilterTech = ({ filteredProducts }) => {
  const router = useRouter();
  const [subCategories, setSubCategories] = useState([]); // Store subcategories
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [products, setProducts] = useState([]); // Store products

  // Fetch subcategories
  const getSubCategories = async () => {
    try {
      const res = await axios.get(
        `https://spice-13.onrender.com/api/product/Sub/Category/List?categoryID=66e95284e4a0682d9adf69de`
      );
      setSubCategories(res?.data?.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Fetch products by subcategory
  const getProductsBySubCategory = async (subCategoryId, subCategoryName) => {
    try {
      const res = await axios.get(
        `https://spice-13.onrender.com/api/product/Sub/Category/Product/List`,
        {
          params: {
            SubCategoryID: subCategoryId,
            CategoryID: subCategoryId ? null : "66e95284e4a0682d9adf69de",
          },
        }
      );
      setProducts(res?.data?.data);
      filteredProducts(res?.data?.data, subCategoryName); // Pass the subCategoryName here
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle radio button change
  const handleRadioChange = (subCategoryId, subCategoryName) => {
    if (subCategoryId === null) {
      setSelectedSubCategory("all");
    } else {
      setSelectedSubCategory(subCategoryId);
    }
    getProductsBySubCategory(subCategoryId, subCategoryName);
  };

  useEffect(() => {
    getSubCategories(); // Fetch subcategories on component mount
  }, []);

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
            Sub Category
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body panel">
            <label className="container my-2">
              All Tech
              <input
                type="radio"
                onChange={() => handleRadioChange(null, "All Tech")}
                checked={selectedSubCategory === "all"} // Adjust the checked condition
              />
            </label>
            {/* Map subcategories */}
            {subCategories?.map((subCat, index) => (
              <label className="container my-2" key={index}>
                {subCat?.SubCategoryName}
                <input
                  type="radio"
                  onChange={() =>
                    handleRadioChange(subCat?._id, subCat?.SubCategoryName)
                  }
                  checked={selectedSubCategory === subCat?._id}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTech;
