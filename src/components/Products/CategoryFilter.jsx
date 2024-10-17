import React, { useEffect, useState } from "react";

const CategoryFilter = ({ onProductsFetched }) => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategory = async () => {
    const res = await fetch(
      `https://spice-19.onrender.com/api/product/category/List`
    );
    const data = await res.json();
    setCategory(data?.data);
  };

  const getProductsByCategory = async (categoryId) => {
    const res = await fetch(
      `https://spice-19.onrender.com/api/product/Category/Product/List?CategoryID=${categoryId}`
    );
    const data = await res.json();
    onProductsFetched(
      data?.data,
      categoryId
        ? category.find((cat) => cat._id === categoryId)?.name
        : "All Products"
    ); // Send the products and category name to the parent
  };

  const handleCheckboxChange = (catId) => {
    setSelectedCategory(catId);
    getProductsByCategory(catId); // Fetch products when category is selected
  };

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <div className="accordion" id="accordionPanelsStayOpenExample">
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
