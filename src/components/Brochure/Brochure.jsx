import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import axios from "axios";
import toast from "react-hot-toast";

const ProductBrochure = () => {
  const { brochure } = useSelector((state) => state.product);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [enquiryData, setEnquiryData] = useState({
    email: "",
    name: "",
    number: "",
    productCodes: brochure.map((product) => product?.productCode),
  });

  // console.log(brochure);

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnquiryData({ ...enquiryData, [name]: value });
  };

  useEffect(() => {
    const loadImages = async () => {
      if (!brochure || brochure.length === 0) {
        setImagesLoaded(true);
        return;
      }

      const imagePromises = brochure.map((product) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.crossOrigin = "Anonymous"; // Handle CORS issues
          img.src = product?.productPicture[0];
          img.onload = () => {
            console.log(`Image loaded: ${product?.productPicture[0]}`);
            resolve();
          };
          img.onerror = (error) => {
            console.error(
              `Error loading image: ${product?.productPicture[0]}`,
              error
            );
            resolve(); // Resolve even if there's an error to avoid blocking
          };
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images", error);
        setImagesLoaded(true); // Set to true to avoid blocking
      }
    };

    loadImages();
  }, [brochure]);

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(
        `https://robust.mmrsolutions.co.in/api/Enquiry/Send`,
        enquiryData
      );
      toast.success("Enquiry sent successfully!");
      setLoading(false);
      downloadPDF();
    } catch (error) {
      const message =
        error.response?.data?.message || "Failed to send enquiry.";
      toast.error(message);
      setLoading(false);
    }
  };

  const downloadPDF = async () => {
    if (!imagesLoaded) {
      alert("Please wait until all images are loaded.");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const pdfHeight = 297; // A4 height in mm

    for (let i = 0; i < brochure.length; i++) {
      const brochureElement = document.getElementById(`brochure-${i}`);
      if (brochureElement) {
        // Debugging: Check if brochureElement has visible images
        console.log(`Rendering element with ID: brochure-${i}`);
        const canvas = await html2canvas(brochureElement, {
          scale: 2,
          useCORS: true,
        });
        const imgData = canvas.toDataURL("image/png");

        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        if (imgHeight > pdfHeight) {
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, pdfHeight);
        } else {
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        }
        if (i < brochure.length - 1) {
          pdf.addPage();
        }
      } else {
        console.error(`Element not found: brochure-${i}`);
      }
    }

    pdf.save("product-brochure.pdf");
  };

  return (
    <>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "200px" }}
      >
        <button className="btn-download" onClick={() => setShowModal(true)}>
          Download Brochure
        </button>
      </div>
      {brochure?.map((product, index) => (
        <div
          className="brochure-container"
          key={index}
          id={`brochure-${index}`}
        >
          <div className="brochure-header">
            <div className="fs-1 d-flex justify-content-center  align-items-center">
              <div className="d-flex">
                {product?.productName}{" "}
                {product?.madeInIndia && (
                  <div className="made-in-india mx-2">
                    <img src="/image.png" alt="Made in India" />
                  </div>
                )}
                {product?.sustainable && (
                  <i
                    class="fa fa-leaf text-success mx-2 mt-2"
                    aria-hidden="true"
                  ></i>
                )}
              </div>
            </div>
            <p>{product?.SubCategoryName}</p>
            <p className="product-price">₹{product?.productPrice}</p>
          </div>
          <div>
            <div className="main-image">
              <img src={product?.productPicture[0]} alt="main-image" />
            </div>

            <div className={`brochure-images row multiple-images`}>
              {product?.productPicture.slice(1)?.map((picture, index) => (
                <img
                  src={picture}
                  key={index}
                  className="col"
                  alt={`Product Image`}
                />
              ))}
            </div>
          </div>
          <div className="mt-3">
            <div className="brochure-description mt-4">
              <h2>About the Product</h2>
              <p>{product?.ShortDescription}</p>
            </div>

            <div className="brochure-footer">
              <p>
                For more information, visit{" "}
                <a
                  href={"https://robustpromo.com"}
                  target="_blank"
                  rel="noreferrer"
                >
                  robustpromo.com
                </a>
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center mb-3">
        <button className="btn-download" onClick={() => setShowModal(true)}>
          Download Brochure
        </button>
      </div>

      {showModal && (
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
      )}
    </>
  );
};

export default ProductBrochure;
