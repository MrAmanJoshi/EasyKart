import React from "react" 

function MyCart(data){
  return (
<div className="bg-slate-100 mb-4">



  
<div className= "flex border-b border-slate-400 px-4 py-4  ">
  
<div className= "flex-1 max-w-sm mx-auto " >
  <img src= {data.thumbnail} />
  </div>
  
  <div className= "flex-1 flex flex-col pl-2">
    
  <p className= "text-gray-500 font-medium ">{data.title}</p>
    <p className="text-lg " >{data.discription}</p>
    <p className="text-xl">${data.price}</p>
 
    <div  className="flex border border-slate-300 p-2 mt-2">
   <p className="text-gray-500 font-medium  mr-2">Quantity</p> <input type="number" className="w-12 bg-slate-100 border border-slate-400" value={data.quantity} />
    </div>
    
     <div className="border mt-3 border-slate-300">
    <p className="text-lg text-gray-500 font-medium p-2">Total-{data.total} </p>
     </div>
    
 </div>
</div>
    
</div>


)
}

export default MyCart;