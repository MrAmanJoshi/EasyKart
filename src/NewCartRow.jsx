import React from "react"
import { RiDeleteBinLine } from "react-icons/ri";
function NewCartRow(){
  return (
    
    <div className=" flex flex-col mt-7 mx-5 ">

      <div className="border-b border-gray-300 text-end py-2 pr-2 ">
         <RiDeleteBinLine className="text-xl text-center"/>
      </div>
      <div  className="justify-center flex py-2 px-2 border-b border-gray-300">
   
      <img src="https://media.istockphoto.com/photos/supercar-picture-id483349053?k=20&m=483349053&s=612x612&w=0&h=2eJPTneCG-jNY8TnqBazmgPqo5HZeMxCftlcHKQcJG8=" className="w-12 h-12 object-cover  "/>
      </div>
       <div className="justify-between py-2 border-b border-gray-300 flex px-2">
       <p >Product</p>
      <p className="text-red-400">RED COLOR LEMBORGINY</p>
      </div>
      <div className="justify-between flex px-2 py-2 border-b border-gray-300">
       <p className="">price</p>
      <p>$98</p>
      </div>
      
      <div className="justify-between flex py-2 px-2 border-b border-gray-300">
       <p className="">Quantiy:</p>
      <input type="number" className="w-8 h-4 border border-black"/>
      </div>
        
     
        <div className="justify-between  py-2  flex px-2">
      
      <p>Subtotal</p>
           <p>$65</p>
    </div>
         </div>
  )
}

export default NewCartRow;