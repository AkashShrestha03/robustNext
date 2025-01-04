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
  const [nav, setNav] = useState([]);
  const router = useRouter();

  const toggleDropdown = (category) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  useEffect(() => {
    const fetchNavbar = async () => {
      try {
        const res = await axios.get(
          "https://api.robustpromo.com/api/product/Nav/List"
        );
        setNav(res.data.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNavbar();
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
            <h3>Menu</h3>{" "}
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
              <li>
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
