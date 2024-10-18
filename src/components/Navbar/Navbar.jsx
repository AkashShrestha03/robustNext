import React, { useState } from "react";
import CardSwiper from "./CardSwiper";
import { useRouter } from "next/router";
import Link from "next/link";
import OffcanvasNav from "./Offcanvas";
import { Offcanvas } from "react-bootstrap";

const Navbar = () => {
  const router = useRouter();
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
                        <a href="">
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
                    {/* <div class="serach-top">
                      <i class="fa fa-search">
                        <input
                          type="search"
                          placeholder="Search by product name or type"
                        />
                      </i>
                    </div> */}

                    <div class="signup">
                      <Link href="/auth/signin">
                        <p>Signup</p>
                        <p>Login</p>
                      </Link>
                    </div>

                    <div class="brochure">
                      <Link href="/brochure">
                        <button className="p-2 btn-light text-secondary shadow">
                          Brochure
                        </button>
                      </Link>
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
                  <div class="navbar links">
                    <ul class="d-flex align-items-center f13 poppins-semibold ">
                      <Link href="/products">
                        <li>All Robust</li>
                      </Link>
                      <li>
                        <div class="dropdown">
                          <p
                            class=" dropdown-toggle mb-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Apparel
                          </p>
                          <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              {/* <Link
                                class="dropdown-item"
                                href="/products/apparels/allapparels"
                              >
                                All Apparels
                              </Link> */}
                              <Link
                                class="dropdown-item"
                                href="/products/apparels/allapparels"
                              >
                                All Apparels
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/apparels/tshirts"
                              >
                                T Shirts
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/apparels/hats"
                              >
                                Hats
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/apparels/footwears"
                              >
                                Footwear
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/apparels/sweatshirts"
                              >
                                Sweatshirts
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/apparels/outerwear"
                              >
                                Outwear
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown">
                          <p
                            class=" dropdown-toggle mb-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Office
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <Link
                                class="dropdown-item"
                                href="/products/office/alloffice"
                              >
                                All Office Accessories
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/office/desk_accessories"
                              >
                                Desk Accessories
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/office/notebooks"
                              >
                                Notebooks
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/office/pens"
                              >
                                Pens
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown">
                          <p
                            class=" dropdown-toggle mb-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Drinkware
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <Link
                                class="dropdown-item"
                                href="/products/drinkware/alldrinkware"
                              >
                                All Drinkware
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/drinkware/waterbottles"
                              >
                                Water bottles
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/drinkware/mugs"
                              >
                                Mugs
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/drinkware/tumblers"
                              >
                                Tumblers
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown">
                          <p
                            class=" dropdown-toggle mb-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Bags
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <Link
                                class="dropdown-item"
                                href="/products/bags/totes"
                              >
                                Totes
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/bags/backpacks"
                              >
                                Backpacks
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/bags/pouches"
                              >
                                Pouches
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown">
                          <p
                            class=" dropdown-toggle mb-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Tech
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <Link
                                class="dropdown-item"
                                href="/products/tech/tech_accessories"
                              >
                                Tech Accessories
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/tech/chargers"
                              >
                                Chargers
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/tech/audio"
                              >
                                Audio
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="dropdown">
                          <p
                            class=" dropdown-toggle mb-0"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            Wellness
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <Link
                                class="dropdown-item"
                                href="/products/wellness/allwellness"
                              >
                                All Wellness
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/wellness/self_care"
                              >
                                Self Care
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/wellness/fitness"
                              >
                                Fitness & Recreation
                              </Link>
                              <Link
                                class="dropdown-item"
                                href="/products/wellness/outdoors"
                              >
                                Camping & Outdoors
                              </Link>
                            </div>
                          </div>
                        </div>
                      </li>
                      <Link href="/products/ecofriendly">
                        <li>
                          <div class="dropdown">
                            <p
                              class=" mb-0"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Eco Friendly
                            </p>
                          </div>
                        </li>
                      </Link>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                  <Link href="/products">
                    <button class="btn bg-pink">
                      Shop Products
                      <i class="fa fa-angle-right" aria-hidden="true"></i>
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
                {/* <div class="serach-top">
                  <i class="fa fa-search">
                    <input
                      type="search"
                      placeholder="Search by product name or type"
                    />
                  </i>
                </div> */}

                <div class="signup">
                  <Link href="/auth/signin">
                    <p>Signup</p>
                    <p>Login</p>
                  </Link>
                </div>

                <div class="brochure">
                  <Link href="/brochure">
                    <button className="p-2 btn-light text-secondary shadow">
                      Brochure
                    </button>
                  </Link>
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
              <div class="navbar links">
                <ul class="d-flex align-items-center f13 poppins-semibold ">
                  <Link href="/products">
                    <li>All Robust</li>
                  </Link>
                  <li>
                    <div class="dropdown">
                      <p
                        class=" dropdown-toggle mb-0"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Apparel
                      </p>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          {/* <Link
                            class="dropdown-item"
                            href="/products/apparels/allapparels"
                          >
                            All Apparels
                          </Link> */}
                          <Link
                            class="dropdown-item"
                            href="/products/apparels/allapparels"
                          >
                            All Apparels
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/apparels/tshirts"
                          >
                            T Shirts
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/apparels/hats"
                          >
                            Hats
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/apparels/footwears"
                          >
                            Footwear
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/apparels/sweatshirts"
                          >
                            Sweatshirts
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/apparels/outerwear"
                          >
                            Outwear
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <p
                        class=" dropdown-toggle mb-0"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Office
                      </p>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <Link
                            class="dropdown-item"
                            href="/products/office/alloffice"
                          >
                            All Office Accessories
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/office/desk_accessories"
                          >
                            Desk Accessories
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/office/notebooks"
                          >
                            Notebooks
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/office/pens"
                          >
                            Pens
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <p
                        class=" dropdown-toggle mb-0"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Drinkware
                      </p>

                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <Link
                            class="dropdown-item"
                            href="/products/drinkware/alldrinkware"
                          >
                            All Drinkware
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/drinkware/waterbottles"
                          >
                            Water bottles
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/drinkware/mugs"
                          >
                            Mugs
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/drinkware/tumblers"
                          >
                            Tumblers
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <p
                        class=" dropdown-toggle mb-0"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Bags
                      </p>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <Link
                            class="dropdown-item"
                            href="/products/bags/allbags"
                          >
                            All Bags
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/bags/totes"
                          >
                            Totes
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/bags/backpacks"
                          >
                            Backpacks
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/bags/pouches"
                          >
                            Pouches
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <p
                        class=" dropdown-toggle mb-0"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Tech
                      </p>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <Link
                            class="dropdown-item"
                            href="/products/tech/alltech"
                          >
                            All Tech Accessories
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/tech/tech_accessories"
                          >
                            Tech Accessories
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/tech/chargers"
                          >
                            Chargers
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/tech/audio"
                          >
                            Audio
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="dropdown">
                      <p
                        class=" dropdown-toggle mb-0"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Wellness
                      </p>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <Link
                            class="dropdown-item"
                            href="/products/wellness/allwellness"
                          >
                            All Wellness
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/wellness/self_care"
                          >
                            Self Care
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/wellness/fitness"
                          >
                            Fitness & Recreation
                          </Link>
                          <Link
                            class="dropdown-item"
                            href="/products/wellness/outdoors"
                          >
                            Camping & Outdoors
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                  <Link href="/products/ecofriendly">
                    <li>
                      <div class="dropdown">
                        <p
                          class=" mb-0"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Eco Friendly
                        </p>
                      </div>
                    </li>
                  </Link>
                </ul>
              </div>
              <div></div>
            </nav>
          </div>
        </div>
      )}

      <OffcanvasNav show={show} onClose={(show) => setShow(show)} />
    </>
  );
};

export default Navbar;
