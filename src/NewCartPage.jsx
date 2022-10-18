import React, { useEffect, useState } from "react"
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { getProductData } from "./Api"
import Loading from "./Loading";

import NewCartList from "./NewCartList"
function NewCartPage({ cart, updateCart }) {
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  console.log("this is useState products", products)

  const productIds =
    Object.keys(cart);

  useEffect(function() {
    setLoading(true)
    const myProducts = productIds.map(function(ids) {
      return getProductData(ids)
    })
    Promise.all(myProducts).then(function(products) {
      setLoading(false)
      setProducts(products);

    })
  }, [cart])

  if (loading) {
    return (
      <Loading />
    )
  }
  return (

    <div className="mt-14">

      {products.length > 0 && <NewCartList products={products} cart={cart} updateCart={updateCart} />}

      {!products.length && <div className="flex flex-col mt-10 justify-center items-center">
        <p className="border border-gray-200 w-full text-center py-4 ">SHOPPING CART</p>
        <p className=" py-4 ">No products in the cart.</p>
        <Link to="/" >

          <p className="text-sm bg-red-400 px-3 py-1 rounded-lg w-36 pl-4" > RETURN TO SHOP </p>

        </Link>
      </div>}


    </div>
  )
}

export default NewCartPage;







