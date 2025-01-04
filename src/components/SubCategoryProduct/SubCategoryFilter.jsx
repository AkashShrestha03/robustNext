import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SubCategoryFilter = ({ filteredProducts, loader }) => {
  const [subCategories, setSubCategories] = useState([]); // Store subcategories
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const router = useRouter();
  const { categoryId, subCategoryId } = router.query; // Extract IDs from the router query

  // Fetch subcategories
  const getSubCategories = async () => {
    try {
      
      const res = await axios.get(
        `https://api.robustpromo.com/api/product/Sub/Category/List?categoryID=${categoryId}`
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
        `https://api.robustpromo.com/api/product/Sub/Category/Product/List`,
        {
          params: {
            SubCategoryID: subCategoryId,
            CategoryID: subCategoryId ? null : categoryId,
          },
        }
      );
      filteredProducts(res?.data?.data, subCategoryName); // Send products and subcategory name back to parent
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

    // Update query parameters in the URL
    router.push(
      {
        pathname: router.pathname,
        query: { categoryId, subCategoryId },
      },
    );
  };

  useEffect(() => {
    if (categoryId) {
      getSubCategories(); // Fetch subcategories on component mount
    }
  }, [categoryId]);

  useEffect(() => {
    if (subCategoryId) {
      setSelectedSubCategory(subCategoryId);
    }
  }, [subCategoryId]);

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
              All Products
              <input
                type="radio"
                onChange={() => handleRadioChange(null, "All Products")}
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

export default SubCategoryFilter;
