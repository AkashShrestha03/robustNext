import React from "react";
import CardSwiper from "./CardSwiper";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

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
                <div class="top-nav f13 poppins-medium">
                  <div class="d-flex align-items-center">
                    <i class="d-flex g5 fa fa-phone pr-3">
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
                    <div class="serach-top">
                      <i class="fa fa-search">
                        <input
                          type="search"
                          placeholder="Search by product name or type"
                        />
                      </i>
                    </div>

                    <div class="signup">
                      <Link href="/auth/signin">
                        <p>Signup</p>
                        <p>Login</p>
                      </Link>
                    </div>

                    <div class="cart f24">
                      <Link style={{ color: "white" }} href="/cart">
                        <i class="fa fa-shopping-cart"></i>
                      </Link>
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
                  <div class="links">
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
                            Brands
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
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
                            Apparel
                          </p>
                          <div
                            class="dropdown-menu "
                            aria-labelledby="dropdownMenuButton"
                          >
                            <div class="d-flex" style={{ fontSize: "13px" }}>
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
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
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
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
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
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
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
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
                              <a class="dropdown-item" href="#">
                                Action
                              </a>
                              <a class="dropdown-item" href="#">
                                Another action
                              </a>
                              <a class="dropdown-item" href="#">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div></div>
                </nav>
              </div>
            </div>

            {isHomePage && (
              <div class="header-body">
                <div class="left-section">
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

                <div class="right-section">
                  <CardSwiper />
                </div>
              </div>
            )}
          </header>{" "}
        </>
      ) : (
        <div class="div-main">
          <div class="top-nav-main-container">
            <div class="top-nav f13 poppins-medium">
              <div class="d-flex align-items-center">
                <i class="d-flex g5 fa fa-phone pr-3">
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
                  <i class="fa fa-search">
                    <input
                      type="search"
                      placeholder="Search by product name or type"
                    />
                  </i>
                </div>

                <div class="signup">
                  <Link href="/auth/signin">
                    <p>Signup</p>
                    <p>Login</p>
                  </Link>
                </div>

                <div class="cart f24">
                  <Link style={{ color: "white" }} href="/cart">
                    <i class="fa fa-shopping-cart"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div class="nav-main">
            <nav>
              <div class="logo">
                <Link href="/">
                  <img src="../../Assests/logo2.png" alt="" />
                </Link>
              </div>
              <div class="links">
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
                        Brands
                      </p>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
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
                        Apparel
                      </p>
                      <div
                        class="dropdown-menu "
                        aria-labelledby="dropdownMenuButton"
                      >
                        <div class="d-flex" style={{ fontSize: "13px" }}>
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
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
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
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
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
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
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
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
                          <a class="dropdown-item" href="#">
                            Action
                          </a>
                          <a class="dropdown-item" href="#">
                            Another action
                          </a>
                          <a class="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div>

              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
