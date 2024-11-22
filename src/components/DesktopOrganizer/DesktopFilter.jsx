import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DesktopFilter = ({ filteredProducts }) => {
  const router = useRouter();
  const [subCategories, setSubCategories] = useState([]); // Store subcategories
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [products, setProducts] = useState([]); // Store products

  // Fetch subcategories
  const getSubCategories = async () => {
    try {
      const res = await axios.get(
        `https://spice-19.onrender.com/api/product/Sub/Category/List?categoryID=673f1aeb432f3bd04f531570`
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
        `https://spice-19.onrender.com/api/product/Sub/Category/Product/List`,
        {
          params: {
            SubCategoryID: subCategoryId,
            CategoryID: "673f1aeb432f3bd04f531570",
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

export default DesktopFilter;
