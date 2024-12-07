import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router"; // Import the useRouter hook
import { productDetails, removeProduct } from "@/store/productSlice";
import SubCategoryFilter from "./SubCategoryFilter";
import Loader from "../Loader/Loader";

const SubcategoryProducts = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { subCategoryId, SubCategoryName } = router.query; // Destructure SubCategoryID from query
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [subcategoryName, setSubcategoryName] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // Default empty to show "Sort By Price"
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://spice-13.onrender.com/api/product/Sub/Category/Product/List?SubCategoryID=${subCategoryId}`
        );
        setProducts(res?.data?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    getProduct();
    dispatch(removeProduct());
    setSubcategoryName(SubCategoryName);
  }, [subCategoryId, SubCategoryName]); // Re-run when SubCategoryID changes

  const fetchSortedProducts = async (order) => {
    if (!subCategoryId) return; // Ensure SubCategoryID is available

    try {
      setLoading(true);
      const res = await axios.get(
        `https://spice-13.onrender.com/api/product/Sort/Product?price=${order}&SubCategoryID=${subCategoryId}`
      );
      setProducts(res?.data?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
  const handleFilteredProducts = (filtered, subCategoryName) => {
    setFiltered(filtered);
    setSubcategoryName(subCategoryName);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="filter-main-product-cards-main">
        <div className="row">
          <div className="col-md-3 filter-container">
            <div className="filter">
              <div aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li
                    className="breadcrumb-item text-light"
                    aria-current="page"
                  >
                    {subcategoryName}
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
                loader={(loading) => setLoading(loading)}
                filteredProducts={(filtered, subCategoryName) =>
                  handleFilteredProducts(filtered, subCategoryName)
                }
              />
            </div>
          </div>
          <div className="col-md-8">
            <h2 className="text-center">{subcategoryName}</h2>
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
                      <p>
                        {product?.ShortDescription || "Product Description"}
                      </p>

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
    </>
  );
};

export default SubcategoryProducts;
