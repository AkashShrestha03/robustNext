import React, { useState } from "react";
import Filter from "./Filter";
import Grid from "./Grid";

const Products = () => {
  const [products, setProducts] = useState([])

  
  return (
    <div class="filter-main-product-cards-main container">
      <div className="row">
        <div className="col-md-3">
          {" "}
          <Filter onProductsFetched={(products)=>setProducts(products)} />
        </div>
        <div className="col-md-9">
          {" "}
          <Grid filtered={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
