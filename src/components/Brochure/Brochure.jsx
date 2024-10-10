import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const ProductBrochure = () => {
  const { brochure } = useSelector((state) => state.product);
  const [imagesLoaded, setImagesLoaded] = useState(false);

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

  const downloadPDF = async () => {
    if (!imagesLoaded) {
      alert("Please wait until all images are loaded.");
      return;
    }

    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 page height in mm
    const imgHeight = (pageHeight * 210) / imgWidth; // Calculate height to maintain aspect ratio

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

        // Debugging: Check if the image data is present
        console.log(`Canvas to Data URL: ${imgData}`);

        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

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
      {brochure?.map((product, index) => (
        <div
          className="brochure-container"
          key={index}
          id={`brochure-${index}`}
          style={{ width: "210mm", padding: "10mm", boxSizing: "border-box" }} // Ensure proper sizing
        >
          <div className="brochure-header">
            <h1>{product?.productName}</h1>
            <p>{product?.SubCategoryName}</p>
            <p className="product-price">₹{product?.productPrice}</p>
          </div>

          <div
            className={`brochure-images ${
              product?.productPicture?.length === 1
                ? "single-image"
                : "multiple-images"
            }`}
          >
            {product?.productPicture?.map((picture, index) => (
              <img src={picture} key={index} alt={`Product Image`} />
            ))}
          </div>

          <div className="brochure-description">
            <h2>About the Product</h2>
            <p>{product?.productDescription}</p>
          </div>

          <div className="brochure-footer">
            <p>
              For more information, visit{" "}
              <a
                href={"https://robust-01.netlify.app"}
                target="_blank"
                rel="noreferrer"
              >
                demo-website.com
              </a>
            </p>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center">
        <button className="btn-download" onClick={downloadPDF}>
          Download Brochure
        </button>
      </div>
    </>
  );
};

export default ProductBrochure;
