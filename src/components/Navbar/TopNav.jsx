import { searchedProducts } from "@/store/productSlice";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const TopNav = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const { brochure } = useSelector((state) => state.product);
  const router = useRouter();
  const dispatch = useDispatch();

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://robust.mmrsolutions.co.in/api/product/category/List"
      );
      setCategory(response?.data?.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getCategory();
  }, []);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://robust.mmrsolutions.co.in/api/product/Sort?&productName=${search}&categoryID=${categoryID}`
      );
      if (response.data.status === 1) {
        setLoading(false);
        setProducts(response.data.data);
        dispatch(searchedProducts(response.data.data));
        router.push("/searchedexample");
      }
    } catch (error) {
      setLoading(false);
      if (error.status === 404) {
        toast.error(`No products found with name ${search}`);
      }
      console.error("Error fetching sorted products:", error);
    }
  };
  return (
    <div class="top-nav-right-container">
      <div class="serach-top">
        <select
          name="category"
          onChange={(e) =>
            setCategoryID(e.target.value === "" ? "" : e.target.value)
          }
          id="category"
        >
          <option value="" selected>
            Select Category
          </option>
          {category?.map((category, index) => (
            <option value={category?._id} key={index}>
              {category?.name}
            </option>
          ))}
        </select>
        <i class="fa fa-search"></i>
        <input
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by product name or type"
        />
        <button type="button" onClick={handleSearch}>
          {loading ? (
            <div
              className="spinner-border text-light"
              role="status"
              style={{ height: "25px", width: "25px" }}
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Search"
          )}
        </button>
      </div>

      <div class="brochure">
        <button
          type="button"
          onClick={() =>
            brochure?.length === 0
              ? toast.error("Please add products first!")
              : router.push("/brochure")
          }
          className="p-2 btn-light text-secondary shadow"
        >
          Brochure
        </button>

        <span className="bro-count">{brochure?.length}</span>
      </div>
    </div>
  );
};

export default TopNav;
