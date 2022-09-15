import React from "react"
import Product from "./Product"
import Button from "./Button"


function ProductList({ products }) {

  return (

    <div className="flex flex-col sm:grid sm:grid-cols-3 justify-center">
      {products.map(function(item) {

        return (
          <Product
            key={item.id}
            {...item}
          />

        )
      })}

    </div>
  );
}

export default ProductList;