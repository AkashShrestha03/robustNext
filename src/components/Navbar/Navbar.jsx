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
import TopNav from "./TopNav";
import NavLinks from "./NavLinks";

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
  {
    label: "Personalized Products",
    link: "#",
    subItems: [
      // { label: "All Desktop Organizers", link: "/products/desktop/desktop" },
      // { label: "Combo Set", link: "/products/desktop/comboset" },
      // { label: "Pen Stand", link: "/products/desktop/penstand" },
    ],
  },
];

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

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
                  <TopNav />
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
                    <NavLinks></NavLinks>
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
              <TopNav />
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
                <NavLinks />
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
