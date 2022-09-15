import React from "react"
import MyCart from "./MyCart"
import ProductListPage from "./ProductListPage"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import {Link} from "react-router-dom";

function MyCartPage(){
  return (
    <div className="bg-slate-100">
    <div className="flex my-4">
      <span className="flex-1 bg-slate-100 "> <Link to="/" element={<ProductListPage/>}><IoArrowBackCircleOutline className='text-5xl pl-2'/></Link> </span>
  <div className="flex flex-1 flex-col w-full  border-y border-slate-100  item-end">
<p className="text-xl border-b border-slate-300 bg-slate-300  pt-2 font-bold text-gray-500  pl-1">Cart Total</p>  
    <p  className="text-xl border-b border-slate-300 bg-slate-200  pt-2 font-bold text-gray-500  pl-1">Sub Total - $ 2200</p>
      <p  className="text-xl border-b border-slate-300 bg-slate-100  pt-2 font-bold text-gray-500  pl-1">Total- $ 2200</p>
    <button className="bg-red-400 text-white  my-4 mr-1 p-2">Proceed To CheakOut</button>
  </div>
        </div>

      <p className="text-xl font-medium pl-3"></p>
      

    <MyCart
      thumbnail="https://media.istockphoto.com/photos/cup-of-coffee-on-table-picture-id888239450?k=20&m=888239450&s=612x612&w=0&h=GlncgrIMqDxFgZLPcqMEHBEoVqnpkpollC0GRufffGM="
    title = "Coffee Mug "
      price= "350"
      discription= "Best coffee mug for your family members and your relatives. You should buy this product just now"
      
quantity="2"
      total="700"
    
      />
    
    <MyCart
      thumbnail="https://media.istockphoto.com/photos/supercar-picture-id483349053?k=20&m=483349053&s=612x612&w=0&h=2eJPTneCG-jNY8TnqBazmgPqo5HZeMxCftlcHKQcJG8="
    title = "Coffee Mug "
      price= "300"
      discription= "Best coffee mug for your family members and your relatives. You should buy this product just now"
      quantity="5"
      total="1500"
   
      />
      <div className="flex mt-3 px-2"	>
        <input type="text" placeholder="Coupan Code" className='mx-1'/>
          <button className="text-white bg-red-400  px-2 py-3">Apply Coupan</button>
        
       </div>
         <div className="flex justify-end">
            <button className="text-white bg-red-300 mt-4 mr-2 px-2 py-3">Update Cart </button>
</div>
  
    </div>
  );
}

export default MyCartPage;
