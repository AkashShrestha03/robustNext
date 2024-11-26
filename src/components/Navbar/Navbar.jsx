import React, { useEffect, useState } from "react";
import CardSwiper from "./CardSwiper";
import { useRouter } from "next/router";
import Link from "next/link";
import OffcanvasNav from "./Offcanvas";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { searchedProducts } from "@/store/productSlice";

const menuItems = [
  {
    label: "All Robust",
    link: "/products",
    subItems: [],
  },
  {
    label: "Brands",
    link: "/",
    subItems: [
      { label: "Brand", link: "" },
      { label: "Brand", link: "" },
      { label: "Brand", link: "" },
      { label: "Brand", link: "" },
      { label: "Brand", link: "" },
      { label: "Brand", link: "" },
    ],
  },
  {
    label: "Apparel",
    subItems: [
      { label: "All Apparels", link: "/products/apparels/allapparels" },
      { label: "T Shirts", link: "/products/apparels/tshirts" },
      { label: "Hats", link: "/products/apparels/hats" },
      { label: "Footwear", link: "/products/apparels/footwears" },
      { label: "Sweatshirts", link: "/products/apparels/sweatshirts" },
      { label: "Outwear", link: "/products/apparels/outerwear" },
      { label: "Jeans", link: "/products/apparels/jeans" },
    ],
  },
  {
    label: "Office",
    subItems: [
      { label: "All Office Accessories", link: "/products/office/alloffice" },
      { label: "Desk Accessories", link: "/products/office/desk_accessories" },
      { label: "Notebooks", link: "/products/office/notebooks" },
      { label: "Pens", link: "/products/office/pens" },
      { label: "Combo Set", link: "/products/office/combo" },
      { label: "2 pcs Combo Set", link: "/products/office/two" },
      { label: "3 pcs Combo Set", link: "/products/office/three" },
      { label: "4 pcs Combo Set", link: "/products/office/four" },
      { label: "Diary", link: "/products/office/diary" },
      { label: "Sleeve Bag", link: "/products/office/sleeve" },
    ],
  },
  {
    label: "Drinkware",
    subItems: [
      { label: "All Drinkware", link: "/products/drinkware/alldrinkware" },
      { label: "Water bottles", link: "/products/drinkware/waterbottles" },
      { label: "Mugs", link: "/products/drinkware/mugs" },
      { label: "Tumblers", link: "/products/drinkware/tumblers" },
      { label: "Combo Set", link: "/products/drinkware/combo" },
    ],
  },
  {
    label: "Bags",
    subItems: [
      { label: "All Bags", link: "/products/bags/allbags" },
      { label: "Totes", link: "/products/bags/totes" },
      { label: "Backpacks", link: "/products/bags/backpacks" },
      { label: "Pouches", link: "/products/bags/pouches" },
      { label: "Duffle Bags", link: "/products/bags/duffle" },
      { label: "Laptop Bags", link: "/products/bags/laptop" },
      { label: "Sling Bags", link: "/products/bags/sling" },
    ],
  },
  {
    label: "Tech",
    subItems: [
      { label: "All Tech", link: "/products/tech/alltech" },
      { label: "Tech Accessories", link: "/products/tech/tech_accessories" },
      { label: "Chargers", link: "/products/tech/chargers" },
      { label: "Audio", link: "/products/tech/audio" },
    ],
  },
  {
    label: "Wellness",
    subItems: [
      { label: "All Wellness", link: "/products/wellness/allwellness" },
      { label: "Self Care", link: "/products/wellness/self_care" },
      { label: "Fitness & Recreation", link: "/products/wellness/fitness" },
      { label: "Camping & Outdoors", link: "/products/wellness/outdoors" },
      { label: "Perfume", link: "/products/wellness/perfume" },
      { label: "Combo Set", link: "/products/wellness/comboset" },
    ],
  },
  {
    label: "Eco Friendly",
    // link: "/products/eco-friendly/ecofriendly",
    subItems: [
      { label: "All Eco Friendly", link: "/products/eco-friendly/ecofriendly" },
      { label: "Combo Set", link: "/products/eco-friendly/comboset" },
    ],
  },
  {
    label: "Desktop Organizer",
    // link: "/products/eco-friendly/ecofriendly",
    subItems: [
      { label: "All Desktop Organizers", link: "/products/desktop/desktop" },
      { label: "Combo Set", link: "/products/desktop/comboset" },
      { label: "Pen Stand", link: "/products/desktop/penstand" },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryID, setCategoryID] = useState(null);
  const { brochure } = useSelector((state) => state.product);

  const getCategory = async () => {
    try {
      const response = await axios.get(
        "https://spice-19.onrender.com/api/product/category/List"
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
        `https://spice-19.onrender.com/api/product/Sort?&productName=${search}&categoryID=${categoryID}`
      );
      if (response.data.status === 1) {
        setLoading(false);
        setProducts(response.data.data);
        dispatch(searchedProducts(response.data.data));
        router.push("/searchedexample");
      }
    } catch (error) {
      setLoading(false);
      if(error.status === 404){
        toast.error(`No products found with name ${search}`)
      }
      console.error("Error fetching sorted products:", error);
    }
  };

  const handleShow = () => setShow(true);
  const isHomePage = router.pathname === "/";
  const isSignin = router.pathname === "/auth/signin";

  return (
    <>
      {!isSignin && isHomePage ? (
        <>
          {" "}
          <header>
            <div class="div-main">
              <div class="top-nav-main-container">
                <div
                  class="top-nav d-flex justify-content-center 
                align-items-center
                 f13 poppins-medium"
                >
                  <div class="d-flex align-items-center">
                    <i class="d-flex g5 fa fa-phone pe-3">
                      <p class="poppins-medium">+91 9090909090</p>
                    </i>
                    <div class="dropdown">
                      <span>
                        What We Offer <i class="fa fa-chevron-down"></i>
                      </span>
                      <div class="dropdown-content">
                        <a>
                          <p>
                            {" "}
                            <span>Robust bulk order -</span>
                            Easily shop our curated selection of the highest
                            quality swag.
                          </p>
                        </a>
                        <p>
                          {" "}
                          <span>Robust bulk order -</span> Easily shop our
                          curated selection of the highest quality swag.
                        </p>
                        <p>
                          {" "}
                          <span>Robust bulk order -</span> Easily shop our
                          curated selection of the highest quality swag.
                        </p>
                        <p>
                          {" "}
                          <span>Robust bulk order -</span> Easily shop our
                          curated selection of the highest quality swag.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="top-nav-right-container">
                    <div class="serach-top">
                      <select
                        name="category"
                        onChange={(e) =>
                          setCategoryID(
                            e.target.value === "" ? "" : e.target.value
                          )
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

                    {/* <div className="searched-items">
                      <div className="search-item">
                        <p>Product Name</p> <p>₹400</p>
                      </div>
                      <div className="search-item">
                        <p>Product Name</p> <p>₹400</p>
                      </div>
                    </div> */}

                    <div class="signup">
                      <Link href="/auth/signin">
                        <p>Signup</p>
                        <p>Login</p>
                      </Link>
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
                </div>
              </div>
              <div class="nav-main">
                <nav>
                  <div class="logo">
                    <Link href="/">
                      <img src="/Assests/logo2.png" alt="" />
                    </Link>
                  </div>
                  <div className="navbar-toggle">
                    <span type="button" onClick={handleShow}>
                      <i class="bi bi-list"></i>
                    </span>
                  </div>
                  <div className="navbar links">
                    <ul className="d-flex align-items-center f13 poppins-semibold">
                      {menuItems.map((item, index) => (
                        <li key={index}>
                          {item.subItems.length > 0 ? (
                            <div className="dropdown">
                              <p
                                className="dropdown-toggle mb-0"
                                id={`dropdownMenuButton-${index}`}
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                {item.label}
                              </p>
                              <div
                                className="dropdown-menu"
                                aria-labelledby={`dropdownMenuButton-${index}`}
                              >
                                <div
                                  className="d-flex flex-wrap"
                                  style={{ fontSize: "13px" }}
                                >
                                  {item.subItems.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      className="dropdown-item"
                                      href={subItem.link}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <Link href={item.link} className="text-dark">
                              <p className="mb-0">{item.label}</p>
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div></div>
                </nav>
              </div>
            </div>

            {isHomePage && (
              <div class="header-body row">
                <div class="left-section col">
                  <h1 class="poppins-black">ROBUST</h1>
                  <p class="poppins-bold f14 mb-5">
                    {" "}
                    A Robust platform for all your corporate gifting needs.
                    Shop, customize and deliver premium products with just a
                    click.
                  </p>
                  <Link href="/products">
                    <button class="btn bg-pink">
                      Shop Products
                      <i class="fa fa-angle-right ms-2" aria-hidden="true"></i>
                    </button>
                  </Link>
                </div>

                <div class="right-section col">
                  <CardSwiper />
                </div>
              </div>
            )}
          </header>{" "}
        </>
      ) : (
        <div class="div-main">
          <div class="top-nav-main-container">
            <div
              class="top-nav d-flex justify-content-center 
                align-items-center
                 f13 poppins-medium"
            >
              <div class="d-flex align-items-center">
                <i class="d-flex g5 fa fa-phone pe-3">
                  <p class="poppins-medium">+91 9090909090</p>
                </i>
                <div class="dropdown">
                  <span>
                    What We Offer <i class="fa fa-chevron-down"></i>
                  </span>
                  <div class="dropdown-content">
                    <a href="">
                      <p>
                        {" "}
                        <span>Robust bulk order -</span>
                        Easily shop our curated selection of the highest quality
                        swag.
                      </p>
                    </a>
                    <p>
                      {" "}
                      <span>Robust bulk order -</span> Easily shop our curated
                      selection of the highest quality swag.
                    </p>
                    <p>
                      {" "}
                      <span>Robust bulk order -</span> Easily shop our curated
                      selection of the highest quality swag.
                    </p>
                    <p>
                      {" "}
                      <span>Robust bulk order -</span> Easily shop our curated
                      selection of the highest quality swag.
                    </p>
                  </div>
                </div>
              </div>
              <div class="top-nav-right-container">
                <div class="serach-top">
                  <select
                    name="category"
                    onChange={(e) =>
                      setCategoryID(
                        e.target.value === "" ? "" : e.target.value
                      )
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

                <div class="signup">
                  <Link href="/auth/signin">
                    <p>Signup</p>
                    <p>Login</p>
                  </Link>
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

                {/* <div class="cart f24">
                  <Link style={{ color: "white" }} href="/cart">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
          <div class="nav-main">
            <nav>
              <div class="logo">
                <Link href="/">
                  <img src="/Assests/logo2.png" alt="" />
                </Link>
              </div>

              <div className="navbar-toggle">
                <span type="button" onClick={handleShow}>
                  <i class="bi bi-list"></i>
                </span>
              </div>
              <div className="navbar links">
                <ul className="d-flex align-items-center f13 poppins-semibold">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      {item.subItems.length > 0 ? (
                        <div className="dropdown">
                          <p
                            className="dropdown-toggle mb-0"
                            id={`dropdownMenuButton-${index}`}
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            {item.label}
                          </p>
                          <div
                            className="dropdown-menu"
                            aria-labelledby={`dropdownMenuButton-${index}`}
                          >
                            <div
                              className="d-flex flex-wrap"
                              style={{ fontSize: "13px" }}
                            >
                              {item.subItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  className="dropdown-item"
                                  href={subItem.link}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <Link href={item.link} className="text-dark">
                          <p className="mb-0">{item.label}</p>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </nav>
          </div>
        </div>
      )}

      <OffcanvasNav show={show} onClose={(show) => setShow(show)} />
      <Toaster />
    </>
  );
};

export default Navbar;
