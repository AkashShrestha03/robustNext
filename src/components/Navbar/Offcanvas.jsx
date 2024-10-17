import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./offcanvas.module.css";
import { useState } from "react";

const categories = [
  {
    name: "Apparel",
    links: [
      { label: "All Apparels", href: "/products/apparels/allapparels" },
      { label: "T Shirts", href: "/products/apparels/tshirts" },
      { label: "Hats", href: "/products/apparels/hats" },
      { label: "Footwear", href: "/products/apparels/footwears" },
      { label: "Sweatshirts", href: "/products/apparels/sweatshirts" },
      { label: "Outerwear", href: "/products/apparels/outerwear" },
    ],
  },
  {
    name: "Office",
    links: [
      { label: "All Office Accessories", href: "/products/office/alloffice" },
      { label: "Desk Accessories", href: "/products/office/desk_accessories" },
      { label: "Notebooks", href: "/products/office/notebooks" },
      { label: "Pens", href: "/products/office/pens" },
    ],
  },
  {
    name: "Drinkware",
    links: [
      { label: "All Drinkware", href: "/products/drinkware/alldrinkware" },
      { label: "Water bottles", href: "/products/drinkware/waterbottles" },
      { label: "Mugs", href: "/products/drinkware/mugs" },
      { label: "Tumblers", href: "/products/drinkware/tumblers" },
    ],
  },
  {
    name: "Bags",
    links: [
      { label: "All Bags", href: "/products/bags/allbags" },
      { label: "Totes", href: "/products/bags/totes" },
      { label: "Backpacks", href: "/products/bags/backpacks" },
      { label: "Pouches", href: "/products/bags/pouches" },
    ],
  },
  {
    name: "Tech",
    links: [
      { label: "All Tech Accessories", href: "/products/tech/alltech" },
      { label: "Tech Accessories", href: "/products/tech/tech_accessories" },
      { label: "Chargers", href: "/products/tech/chargers" },
      { label: "Audio", href: "/products/tech/audio" },
    ],
  },
  {
    name: "Wellness",
    links: [
      { label: "All Wellness", href: "/products/wellness/allwellness" },
      { label: "Self Care", href: "/products/wellness/self_care" },
      { label: "Fitness & Recreation", href: "/products/wellness/fitness" },
      { label: "Camping & Outdoors", href: "/products/wellness/outdoors" },
    ],
  },
];

const OffcanvasNav = ({ show, onClose }) => {
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <>
      <Offcanvas
        show={show}
        onHide={() => onClose(false)}
        placement="end"
        className="p-3"
      >
        <Offcanvas.Header className={styles.header}>
          <Offcanvas.Title>
            <h3>Menu</h3>
          </Offcanvas.Title>
          <div className={styles["close-btn"]}>
            <button type="button" onClick={() => onClose(false)}>
              &#x2715;
            </button>
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex flex-column">
            <ul className="d-flex flex-column f13 poppins-semibold">
              <Link href="/products" onClick={() => onClose(false)}>
                <li>
                  <h6>All Robust</h6>
                </li>
              </Link>

              {categories.map((category, index) => (
                <li key={index}>
                  <div className="dropdown">
                    <p onClick={() => toggleDropdown(category.name)}>
                      <h6>{category.name} </h6>
                    </p>
                    <div
                      className={`${styles["dropdown-menu"]} ${
                        openCategory === category.name && styles.show
                      }`}
                      style={{
                        maxHeight:
                          openCategory === category.name ? "200px" : "0",
                        transition: "max-height 0.3s ease",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        className="d-flex flex-column"
                        style={{ fontSize: "13px" }}
                      >
                        {category.links.map((link, linkIndex) => (
                          <Link
                            key={linkIndex}
                            className="dropdown-item"
                            href={link.href}
                            onClick={() => onClose(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
              <Link href="/products/ecofriendly" onClick={() => onClose(false)}>
                <li>
                  <div className="dropdown">
                    <p>
                      <h6>Eco Friendly</h6>
                    </p>
                  </div>
                </li>
              </Link>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasNav;
