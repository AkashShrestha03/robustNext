import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer class="mt-0 " style={{ borderTop: "60px solid white" }}>
      <div class="footer-content">
        <h3>Robust</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vitae
          felis scelerisque, gravida sapien non, cursus augue. Aenean id pretium
          turpis. Suspendisse eros nunc, sollicitudin nec.
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
      <div class="footer-bottom">
        <p style={{ textAlign: "center" }}>
          Copyright &copy <span id="year"></span> <Link href="/">@Robust</Link>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
