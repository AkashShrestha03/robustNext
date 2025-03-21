import axios from "axios";
import React, { useEffect, useState } from "react";

const CategoryFilter = ({ onProductsFetched }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategory = async () => {
    try {
      const res = await axios.get(`${API}/api/product/category/List`);
      setCategory(res.data?.data); // Assuming res.data.data holds the category list
    } catch (error) {
      console.error("Error fetching categories:", error.message || error);
    }
  };

  const getProductsByCategory = async (categoryId) => {
    try {
      const res = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Category/Product/List`,
        {
          params: { CategoryID: categoryId },
        }
      );
      const categoryName = categoryId
        ? category.find((cat) => cat._id === categoryId)?.name
        : "All Products";

      onProductsFetched(res.data?.data, categoryName); // Pass products and category name to parent
    } catch (error) {
      console.error(
        "Error fetching products by category:",
        error.message || error
      );
    }
  };

  const handleCheckboxChange = (catId) => {
    setSelectedCategory(catId);
    getProductsByCategory(catId); // Fetch products when category is selected
  };

  useEffect(() => {
    getCategory();
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
            Category
          </button>
        </h2>
        <div
          id="panelsStayOpen-collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="panelsStayOpen-headingOne"
        >
          <div className="accordion-body panel">
            {category?.map((cat, index) => (
              <label className="container my-2" key={index}>
                {cat?.name}
                <input
                  type="radio"
                  onChange={() => handleCheckboxChange(cat?._id)}
                  checked={selectedCategory === cat?._id}
                />
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
