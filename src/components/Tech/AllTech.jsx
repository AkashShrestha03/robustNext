import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { productDetails, removeProduct } from "@/store/productSlice";
import CategoryFilter from "../Products/CategoryFilter";

const AllTech = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categoryName, setCategoryName] = useState("Tech");
  const [sortOrder, setSortOrder] = useState(""); // Default empty to show "Sort By Price"
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://spice-13.onrender.com/api/product/Category/Product/List?CategoryID=66e95284e4a0682d9adf69de`
        );
        setProducts(res?.data?.data); // Axios automatically parses JSON
        console.log(res?.data?.data); // Logs the fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProduct();
    dispatch(removeProduct());
  }, [dispatch]);

  const fetchSortedProducts = async (order) => {
    try {
      const res = await axios.get(
        `https://spice-13.onrender.com/api/product/Sort/Product?price=${order}&CategoryID=66e95284e4a0682d9adf69de`
      );
      setProducts(res?.data?.data);
    } catch (error) {
      console.error("Error fetching sorted products:", error);
    }
  };

  const handleSortChange = (e) => {
    const selectedOrder = e.target.value;
    setSortOrder(selectedOrder);
    if (selectedOrder) {
      fetchSortedProducts(selectedOrder);
    }
  };

  // Function to handle filtered products and update the heading
  const handleFilteredProducts = (filteredProducts, subCategoryName) => {
    setFiltered(filteredProducts);
    setCategoryName(subCategoryName);
  };

  return (
    <div className="filter-main-product-cards-main">
      <div className="row">
        <div className="col-md-3 filter-container">
          <div className="filter">
            <div aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>

                <li className="breadcrumb-item " aria-current="page">
                  {categoryName}
                </li>
              </ol>
            </div>
            <div className="d-flex justify-content-end mb-3">
              <select
                className="form-select"
                value={sortOrder}
                onChange={handleSortChange}
              >
                <option value="">Sort By Price</option>
                <option value="AES">Lowest Price First</option>
                <option value="DES">Highest Price First</option>
              </select>
            </div>
            <CategoryFilter
              onProductsFetched={(filteredProducts, subCategoryName) =>
                handleFilteredProducts(filteredProducts, subCategoryName)
              }
            />
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="text-center">{categoryName}</h2>
          <div className="products-card">
            {(filtered?.length > 0 ? filtered : products)?.map(
              (product, index) => (
                <figure className="snip1423" key={index}>
                  <img
                    src={product?.productPicture[0] || "/Assests/mokup1.png"}
                    alt="sample57"
                  />
                  <figcaption className="d-flex flex-column align-items-center">
                    <h3 className="card-heading">
                      {product?.productName}
                      {product?.madeInIndia && (
                        <div className="made-in-india-flag">
                          <img src="/image.png" alt="Made in India" />
                        </div>
                      )}
                    </h3>
                    <p>{product?.ShortDescription}</p>

                    {product?.sustainable && (
                      <div className="sustainable-icon">
                        <i className="fa fa-leaf" aria-hidden="true"></i>
                      </div>
                    )}

                    <div className="price">
                      <s>₹{product?.productMRP}</s>₹{product?.productPrice}
                    </div>
                  </figcaption>

                  <Link
                    href="/productedit"
                    onClick={() => dispatch(productDetails(product))}
                  ></Link>
                </figure>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTech;
