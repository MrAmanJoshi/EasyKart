
import React from 'react';

import { Link } from "react-router-dom";
import { MdAspectRatio } from "react-icons/md";

function Product({thumbnail , category, title, price, id ,rating }) {
  return (

    <div className=" border border-solid   mb-4  shadow-lg shadow-slate-700 bg-gray-200" >

      <div className="mb-2">
        <img className="w-64 h-64 object-cover " src={thumbnail} />
      </div >

      <div className="p-2">
        <p className="text-sm text-gray-400 mb-4" >{category}</p>

        <h6 className="text-sm">{title} </h6>
        <p className=" text-sm"> ₹  {price}</p>
        <p className=" text-sm"> Rating - {rating}</p>
        <div className="flex justify-end mr-1">
          <Link to={"/viewDetail/" + id} className=" text-black text-sm underline underline-offset-8"><MdAspectRatio className="text-3xl" /></Link>
        </div>
      </div>
    </div>
  );
}
export default Product;