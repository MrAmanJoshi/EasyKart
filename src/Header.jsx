import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, } from "react-icons/fi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { Navigate } from "react-router-dom";
import withProvider from "./withProvider"
import { withCart } from "./withProvider"
import { withUser, withAlert } from "./withProvider"


function Header({ totalCount, alert, user }) {
  
  /*if (!user){
    return<></>
  }*/


  return  (
    <div>
      { alert == undefined && <div className="py-4  flex   justify-between bg-gradient-to-r from-white to-orange-100 px-2 left-0 right-0 ">
<div className= "flex flex-col">
        <div className="flex">
          <p className="text-xl font-bold text-red-500">Easy</p>
          <p className="text-blue-500 text-xl font-bold animate-bounce">K</p>
          <p className="text-xl font-bold text-red-500">art</p>
        </div>
  </div>
        
     <div className="flex ">
    <Link to="/NewCartPage/">
    <div className="flex-col ">
<FiShoppingCart className="text-3xl text-slate-700 "></FiShoppingCart>

  <p className="text-red-500 font-black text-sm  -mt-10 ml-3">{totalCount} </p>

            </div>
          </Link>

 <Link  to="/Profile/"> <HiOutlineUserCircle className="text-3xl text-slate-700 mx-2" />  </Link> 

        </div>

      </div>}
    </div>
  )
}


export default memo(withCart(withUser(withAlert(Header))));


