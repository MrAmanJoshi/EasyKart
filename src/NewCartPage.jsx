import React from "react"
import NewCartList from "./NewCartList"
import { withCart } from "./withProvider"

function NewCartPage() {
  
  return (

    <div className="mt-14">
      <NewCartList/>
    </div>
  )
}

export default withCart(NewCartPage);

/*
<div className="flex flex-col mt-10 justify-center items-center">
        <p className="border border-gray-200 w-full text-center py-4 ">SHOPPING CART</p>
        <p className=" py-4 ">No products in the cart.</p>
        <Link to="/" >

          <p className="text-sm bg-red-400 px-3 py-1 rounded-lg w-36 pl-4" > RETURN TO SHOP </p>

        </Link>
      </div>

*/