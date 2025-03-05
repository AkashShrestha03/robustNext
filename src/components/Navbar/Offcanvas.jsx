import Link from "next/link";
import Offcanvas from "react-bootstrap/Offcanvas";
import styles from "./offcanvas.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const OffcanvasNav = ({ show, onClose }) => {
  const [openCategory, setOpenCategory] = useState(null);
  const { brochure } = useSelector((state) => state.product);
   const [brands, setBrands] = useState([]);
  const [openBrand, setOpenBrand] = useState(false);
  const [nav, setNav] = useState([]);
  const router = useRouter();
  const toggleBrandDropdown = () => {
    setOpenBrand(!openBrand);
  };

  const toggleDropdown = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get(
          "https://robust.mmrsolutions.co.in/api/product/Nav/List"
        );
        setNav(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNavbar();

    const fetchBrands = async () => {
      try {
        const res = await axios.get(
          "https://robust.mmrsolutions.co.in/api/Brand/Get"
        );
        setBrands(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBrands();
  }, []);

  const handleSubCategoryClick = (
    subCategoryId,
    categoryId,
    SubCategoryName
  ) => {
    router.push({
      pathname: "/productsubcategory",
      query: { subCategoryId, categoryId, SubCategoryName },
    });
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
          <div className={`d-flex flex-column ${styles.nav}`}>
            <ul className="d-flex flex-column f13 poppins-semibold">
              <li className={styles["mobile-option"]}>
                <h6 className="brochure-mobile d-flex gap-1">
                  Brochure{" "}
                  <span className={styles["bro-count"]}>
                    {brochure?.length}
                  </span>
                </h6>
              </li>
              <Link href="/products" onClick={() => onClose(false)}>
                <li>
                  <h6>All Robust</h6>
                </li>
              </Link>

              <li>
                <div className={`dropdown ${styles.dropdown}`}>
                  <p onClick={() => toggleBrandDropdown()}>
                    <h6>Brands</h6>
                  </p>
                  <div
                    className={`${styles["dropdown-menu"]} ${
                      openBrand && styles.show
                    }`}
                  >
                    <div
                      className="d-flex flex-column"
                      style={{ fontSize: "13px" }}
                    >
                      {brands.map((brand, index) => (
                        <span key={index} className="py-1 dropdown-item">
                          <img
                            src={brand?.BrandPicture}
                            style={{
                              height: "40px",
                              width: "60px",
                              objectFit: "contain",
                            }}
                            alt={`${brand?.BrandName}`}
                          />
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </li>

              {nav.map((item, index) => (
                <li key={index}>
                  <div className={`dropdown ${styles.dropdown}`}>
                    <p onClick={() => toggleDropdown(item.name)}>
                      <h6>{item.name} </h6>
                    </p>
                    <div
                      className={`${styles["dropdown-menu"]} ${
                        openCategory === item.name && styles.show
                      }`}
                    >
                      <div
                        className="d-flex flex-column"
                        style={{ fontSize: "13px" }}
                      >
                        {item.SubItems.map((subItem, subIndex) => (
                          <button
                            key={subIndex}
                            style={{ textDecoration: "none" }}
                            className="dropdown-item"
                            href={""}
                            onClick={() => {
                              onClose(false);
                              handleSubCategoryClick(
                                subItem.SubCategoryID,
                                item._id,
                                subItem.SubCategoryName
                              );
                            }}
                          >
                            {subItem.SubCategoryName}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffcanvasNav;
