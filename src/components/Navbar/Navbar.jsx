import React, { useState } from "react";
import CardSwiper from "./CardSwiper";
import { useRouter } from "next/router";
import Link from "next/link";
import OffcanvasNav from "./Offcanvas";
import { Toaster } from "react-hot-toast";
import TopNav from "./TopNav";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const isHomePage = router.pathname === "/";

  return (
    <>
      {isHomePage ? (
        <>
          <header>
            <div class="div-main">
              <div class="top-nav-main-container">
                <div
                  class="top-nav d-flex justify-content-center 
                align-items-center
                 f13 poppins-medium"
                >
                  <div class="d-flex align-items-center mobile-top">
                    <i class="d-flex g5 fa fa-phone pe-3">
                      <a href="tel:+917778926169">
                        <p class="poppins-medium">+91 7778926169</p>
                      </a>
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
                      <img src="/robust-R.png" alt="robust-logo" />
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
                  <p class="poppins-medium">
                    +91 7778926169, +91 9015254103, +919023143952
                  </p>
                </i>
                {/* <div class="dropdown">
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
                </div> */}
              </div>
              <TopNav />
            </div>
          </div>
          <div class="nav-main">
            <nav>
              <div class="logo">
                <Link href="/">
                  <img src="/robust-R.png" alt="robust-logo" />
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
