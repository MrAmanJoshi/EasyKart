import React from "react"
import NewCartRow from "./NewCartRow"

function NewCartList() {
  return(
  
   <div className="m-2 flex flex-col">
     <div className="border  border-gray-300  py-2 flex flex-col ">
        <NewCartRow/>
      <div className="  border-gray-300 px-4 py-2 flex ">
       
      <input type="text" placeholder="Coupen Code" className="border w-32  mr-4 border-gray-300"/>
        <button className="py-1 rounded-lg bg-red-500 w-32 px-2 font-semibold text-white ">
      APPLY COUPON
      </button>
        
      </div>
     <button className="px-4 mx-5 py-2 rounded-lg my-2 bg-red-300 font-semibold border-x border-gray-300  text-white">
      UPDATE CART
      </button>
     </div>

<div className="border border-gray-300 mx-3 my-3">
<h4 className="font-bold  text-xl py-2 mr-2">Cart totals</h4>


<div className="border-t border-gray-300 flex px-2 justify-between ">

<p className=" py-3 mr-2">Subtotal:</p>
<p>$566</p>
 </div>

<div className="border-y border-gray-300 flex px-2 justify-between ">
<p>Total</p>
<p>$566</p>
</div>
<button className="px-6 py-2 font-semibold text-white mx-2 my-2 bg-red-400">PROCEED TO CHECKOUT</button>
 </div>
      <div className="m-2 flex flex-col">
  

     <div className="border mx-3 border-gray-300 px-4 py-2 flex flex-col ">
      <div className="  border-gray-300 px-4 py-2 flex ">
      <input type="text" placeholder="Coupen Code" className="border w-32  mr-4 border-gray-300"/>
        <button className="py-1 rounded-lg bg-red-500 w-32 px-2 font-semibold text-white ">
      APPLY COUPON
      </button>
        
      </div>


        <button className="px-4 mx-5 py-2 rounded-lg my-2 bg-red-300 font-semibold border-x border-gray-300  text-white">
      UPDATE CART
      </button>
     </div>
</div>
</div>

  )
}

export default NewCartList;
