import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Footer = () => {
  return (
    <footer class="mt-0 " style={{ borderTop: "60px solid white" }}>
      <div className="footer-container">
        <div class="footer-content">
          {/* <h3>Robust</h3> */}
          <div className="footer-logo">
            {" "}
            <img src="/footer-logo.png" alt="robust promotions & advertising" />
          </div>
          <p>
            At Robust, we bring your brand to life with tailored corporate
            gifts, inventive advertising items, and memorable promotional
            merchandise designed to leave a lasting impression and build strong
            connections. Make every interaction meaningful with our customized
            solutions!
          </p>
          <ul class="socials">
            <li>
              <Link href="#">
                <i class="fa fa-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa fa-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa fa-google-plus"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa fa-youtube"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i class="fa fa-linkedin-square"></i>
              </Link>
            </li>
          </ul>
        </div>
        <ul>
          <li>
            <h5 className="navlink-head">Latest News</h5>
            <div className=" links ">
              <a href="#">
                Our Favorite Eco-Friendly Promotional Products for 2025
              </a>

              <a href="#">
                Personalized Gift Bags for Events, Clients, and Teams
              </a>
            </div>
          </li>
          <li>
            <h5 className="navlink-head">Tasty links</h5>
            <div className=" links ">
              <a href="#">robust bulk ordering</a>

              <a href="#">robust distribution</a>

              <a href="#">robust in a box</a>

              <a href="#">Corporate gifting</a>

              <a href="#">Company Stores</a>

              <a href="#">robust Automation</a>
            </div>
          </li>
          <li>
            <h5 className="navlink-head">robust</h5>
            <div className=" links ">
              <a href="#">Blog</a>

              <a href="#">Fully custom robust</a>

              <a href="#">Testimonials and reviews</a>

              <a href="#">Our latest work</a>

              <a href="#">robustpromo.com brand shop</a>
            </div>
          </li>
          <li>
            <h5 className="navlink-head">Information</h5>
            <div className=" links ">
              <a href="#">Contact Us</a>

              <a href="#">Our story</a>

              <a href="#">Refer a friend</a>

              <a href="#">FAQ</a>

              <a href="#">Privacy policy</a>

              <a href="#">Terms of Service</a>

              <a href="#">Commitment to Accessibility</a>
            </div>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p style={{ textAlign: "center" }}>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <Link href="/">Robust</Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
