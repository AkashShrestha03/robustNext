import { shortlist } from "@/store/productSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";

const ProductEditor = ({ product }) => {
  const [isShortlisted, setIsShortlisted] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  // const [enquiryData, setEnquiryData] = useState({
  //   email: "",
  //   name: "",
  //   productIDs: product?._id,
  // });
  // const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleShortlist = () => {
    setIsShortlisted(true);
    dispatch(shortlist(product));
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEnquiryData({ ...enquiryData, [name]: value });
  // };

  // const handleEnquirySubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       `https://robust.mmrsolutions.co.in/api/Enquiry/Send`,
  //       enquiryData
  //     );
  //     toast.success("Enquiry sent successfully!");
  //     setLoading(false);
  //     setShowModal(false);
  //   } catch (error) {
  //     const message =
  //       error.response?.data?.message || "Failed to send enquiry.";
  //     toast.error(message);
  //     setLoading(false);
  //   }
  // };

  const colors = product?.colour;

  return (
    <div className="Product-editor p-3">
      {/* <Toaster position="top-right" reverseOrder={false} /> */}
      <div
        className="product-id-display p-2 mb-3"
        style={{
          backgroundColor: "#f5f5f5",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <h6 className="text-secondary">Product Code:</h6>
        <p
          className="text-primary"
          style={{ fontSize: "1.2rem", fontWeight: "bold" }}
        >
          {product?.productCode || "N/A"}
        </p>
      </div>
      <div className="edit-container-info-section d-flex justify-content-between align-items-center flex-wrap">
        <div className="m-4" style={{ width: "80%" }}>
          <h2 className="cart-details-heading">
            {product?.productName}{" "}
            {product?.madeInIndia && (
              <div className="made-in-india">
                <img src="/image.png" alt="Made in India" />
              </div>
            )}
            {product?.sustainable && (
              <i className="fa fa-leaf text-success" aria-hidden="true"></i>
            )}
          </h2>{" "}
          <div className="price mt-2">
            <s>₹{product?.productMRP}</s>₹{product?.productPrice}
          </div>
          <div className="price d-flex g-3">
            <span className="text-secondary">
              Minimum Order Quantity: {product?.minProduct}
            </span>
          </div>
        </div>
        <div className="px-4 w-100">
          <button className="btn bg-pink" onClick={handleShortlist}>
            {isShortlisted ? "Added" : "Add to Brochure"}
          </button>
          {/* <button
            className="btn bg-primary text-white ml-2 mx-3"
            onClick={() => setShowModal(true)}
          >
            Enquire Now
          </button> */}
        </div>
      </div>

      <hr />
      <div className="choose-color-container m-4">
        <h5>
          <span className="product-caption">
            <b>Choose your colors</b>
          </span>
        </h5>
        <div className="color-select d-flex pt-3 pl-4">
          {colors?.length > 0 ? (
            colors.map((color, index) => (
              <button className="circle-border" key={index}>
                <div
                  className="p-circle"
                  style={{ backgroundColor: color }}
                ></div>
              </button>
            ))
          ) : (
            <p>No Colours Available</p>
          )}
        </div>
      </div>
      <hr />
      <div className="offer-card uplaod-img-section m-4">
        <h5>
          &nbsp;
          <span className="product-caption">
            <b>Description</b>
          </span>
        </h5>
        <div
          dangerouslySetInnerHTML={{
            __html: product?.productDescription,
          }}
        />
      </div>

      {/* Enquiry Modal */}
      {/* {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h4>Enquire about this product</h4>
            <form
              onSubmit={handleEnquirySubmit}
              className="d-flex flex-column gap-3"
            >
              <div className="form-group">
                <label htmlFor="name" className="fw-bold me-2">
                  Name:{" "}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  style={{ borderBottom: "1px solid black" }}
                  value={enquiryData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="fw-bold me-2">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  style={{ borderBottom: "1px solid black" }}
                  value={enquiryData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="number" className="fw-bold me-2">
                  Contact No:
                </label>
                <input
                  type="number"
                  id="number"
                  name="number"
                  style={{ borderBottom: "1px solid black" }}
                  value={enquiryData.number}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your contact number"
                />
              </div>

              <input
                type="hidden"
                name="productId"
                value={enquiryData?.productIDs}
              />
              <div className="modal-actions">
                <button type="submit" className="btn bg-success text-white">
                  {loading ? "Loading..." : "Submit"}
                </button>
                <button
                  type="button"
                  className="btn bg-secondary text-white"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default ProductEditor;
