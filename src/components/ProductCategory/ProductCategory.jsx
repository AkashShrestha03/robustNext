import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { productDetails, removeProduct } from "@/store/productSlice";
import Loader from "../Loader/Loader";
import SubCategoryFilter from "../SubCategoryProduct/SubCategoryFilter";

const ProductCategory = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(20);
  const [loading, setLoading] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [categoryName, setCategoryName] = useState("Apparel");
  const [sortOrder, setSortOrder] = useState(""); // Default empty to show "Sort By Price"
  const dispatch = useDispatch();
  const router = useRouter();
  const { categoryId, category } = router.query; // Retrieve categoryId from query parameters

  useEffect(() => {
    if (!categoryId) return; // Wait until categoryId is available

    const getProduct = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `https://robust.mmrsolutions.co.in/api/product/Category/Product/List?CategoryID=${categoryId}`
        );
        setProducts(res?.data?.data);
        setLoading(false);
        console.log(res?.data?.data);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    getProduct();
    dispatch(removeProduct());
  }, [categoryId, dispatch]); // Run effect whenever categoryId changes

  useEffect(() => {
    setCategoryName(router.query.category);
  }, [router.query.category]);

  const fetchSortedProducts = async (order) => {
    if (!categoryId) return; // Ensure categoryId is available before making API call

    try {
      const res = await axios.get(
        `https://spice-13.onrender.com/api/product/Sort/Product?price=${order}&CategoryID=${categoryId}`
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

  const handleFilteredProducts = (filteredProducts, subCategoryName) => {
    setFiltered(filteredProducts);
    setCategoryName(subCategoryName);
  };

  if (loading) {
    return <Loader />;
  }

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
                  {router.query.category || categoryName}
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
            <SubCategoryFilter
              filteredProducts={(filteredProducts, subCategoryName) =>
                handleFilteredProducts(filteredProducts, subCategoryName)
              }
            />
          </div>
        </div>
        <div className="col-md-8">
          <h2 className="text-center">{categoryName}</h2>

          <div className="products-card">
            {(filtered?.length > 0 ? filtered : products)
              .slice(0, count)
              ?.map((product, index) => (
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
                    <p>{product?.ShortDescription || "Product Description"}</p>

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
              ))}
          </div>
        </div>
        {count >= products?.length ? null : (
          <div
            className="d-flex justify-content-center text-primary cursor"
            onClick={() => setCount(count + 9)}
          >
            View More...
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategory;
