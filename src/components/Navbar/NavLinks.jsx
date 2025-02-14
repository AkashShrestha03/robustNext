import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const NavLinks = () => {
  const [nav, setNav] = useState([]);
  const [brands, setBrands] = useState([]);
  const router = useRouter();

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
  }, []);

  useEffect(() => {
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

  const handleCategoryClick = (categoryId) => {
    router.push({
      pathname: "/productcategory",
      query: { categoryId },
    });
  };

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
      <ul className="d-flex align-items-center f13 poppins-semibold">
        <li>
          <Link href="/products" className="text-dark">
            All Robust
          </Link>
        </li>
        {/* <li>
          <div className="dropdown">
            <p
              className="dropdown-toggle mb-0"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              id="dropdownbrand"
            >
              Brands
            </p>
            <div
              className="dropdown-menu"
              aria-labelledby={`dropdownMenuButton`}
            >
              <div className="d-flex flex-column align-items-center gap-2">
                {brands?.map((brand, index) => (
                  <span key={index}>
                    <img
                      src={brand?.BrandPicture}
                      style={{
                        height: "40px",
                        width: "60px",
                        objectFit: "contain",
                      }}
                      alt=""
                    />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </li> */}
        {nav.map((item, index) => (
          <li key={index}>
            {item.SubItems.length > 0 ? (
              <div className="dropdown">
                <p
                  className="dropdown-toggle mb-0"
                  id={`dropdownMenuButton-${index}`}
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.name}
                </p>
                <div
                  className="dropdown-menu"
                  aria-labelledby={`dropdownMenuButton-${index}`}
                >
                  <div
                    className="d-flex flex-wrap"
                    style={{ fontSize: "13px" }}
                  >
                    {item.SubItems.map((subItem, subIndex) => (
                      <button
                        key={subIndex}
                        className="dropdown-item btn text-dark"
                        onClick={() =>
                          handleSubCategoryClick(
                            subItem.SubCategoryID,
                            item._id,
                            subItem.SubCategoryName
                          )
                        }
                      >
                        {subItem.SubCategoryName}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="btn btn-link text-dark"
                onClick={() => handleCategoryClick(item._id, item.name)}
              >
                <p className="mb-0">{item.name}</p>
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavLinks;
