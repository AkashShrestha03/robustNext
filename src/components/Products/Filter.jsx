import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Filter = ({ onProductsFetched, loader }) => {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const getCategory = async () => {
    try {
      const res = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/category/List`
      );
      setCategory(res.data?.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
      // Optional: Handle error state for categories
    }
  };
  console.log("Id from router", router.query.id);

  const getProductsByCategory = async (categoryId) => {
    try {
      loader(true);
      const res = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Category/Product/List`,
        {
          params: { CategoryID: categoryId || router.query?.id },
        }
      );
      const products = res.data?.data;
      const categoryName = category.find((cat) => cat._id === categoryId)?.name;

      onProductsFetched(products, categoryName); // Send the products and category name to the parent
    } catch (error) {
      console.log("Error fetching products by category:", error);
      // Optional: Handle error state for products
    } finally {
      loader(false);
    }
  };
  useEffect(() => {
    getProductsByCategory();
  }, [router.query?.id]);

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
            <label className="container my-2">
              All Products
              <input
                type="radio"
                checked={selectedCategory === null}
                onChange={() => {
                  handleCheckboxChange(null);
                  getProduct();
                }}
              />
            </label>
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

export default Filter;
