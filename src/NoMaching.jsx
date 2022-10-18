import React,{memo} from "react"
import { Link } from "react-router-dom"

function NoMaching(){
  return (
    <div className="p-5  flex bg-white sm-w-full rounded-xl justify-center items-center  mx-auto">
      <div  className="flex px-2 flex-1 flex-col bg-white bg-gradient-to-r from-yellow-100 to-white text-center rounded-2xl">
 <p className=" shrink-0  text-3xl font-bold text-indigo-800 drop-shadow-md	 ">S o r r y... </p>
        
       
        <p className=" shrink-0  text-xl text-gray-700 font-medium my-5 italic">No Maching Results here. Please search anthor products.  </p>
           
     </div>
     
    </div>
  )
}


export default memo(NoMaching);
