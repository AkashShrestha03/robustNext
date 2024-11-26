import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumb = ({ product }) => {
  const router = useRouter();
  return (
    <>
      <div aria-label="breadcrumb" >
        <ol className="breadcrumb" style={{margin: "10px 11px"}}>
          <li className="breadcrumb-item">
            <Link href="/" >Home</Link>
          </li>
          <li className="breadcrumb-item">
            <a href="#" onClick={() => router.back()}>
              {product?.SubCategoryName}
            </a>
          </li>
          <li className="breadcrumb-item text-light" aria-current="page">
           {product?.productName}
          </li>
        </ol>
      </div>
    </>
  );
};

export default Breadcrumb;
