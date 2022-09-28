import React  from "react"
import Head from "./Head"
import {Link} from "react-router-dom";


import { HiOutlineShoppingBag } from "react-icons/hi"

function HeadPage({ productCount }) {
  return (
    <div className="py-5 flex  bg-white justify-between px-2">

      <Head photo="https://i.postimg.cc/ZRCM6jvD/IMG-20220830-220031-584.jpg" />

   <Link to="/MyCartPage/">  <div className="flex">
        
        <HiOutlineShoppingBag className="text-5xl text-orange-400  "></HiOutlineShoppingBag> <span className="text-green-500 font-bold -mb-8 -ml-8 ">{productCount}</span>

      </div>    </Link> 


    </div>

  )
}
export default HeadPage;