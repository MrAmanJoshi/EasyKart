import  React, { memo} from "react";
import { Link } from "react-router-dom";

function PageNotFound(){
  return (
    <div>
    <div className="p-5  flex bg-white sm-w-full rounded-xl justify-center mx-auto items-center mt-64 ">
      <div  className="flex px-2 flex-1 flex-col bg-white bg-gradient-to-r from-yellow-100 to-white text-center rounded-2xl">
 <p className=" shrink-0  text-3xl font-bold text-indigo-800 drop-shadow-md	 ">O o P s... </p>
             
        <p className=" shrink-0  text-xl text-green-500 font-medium my-5 italic">I think you turn the wrong way </p>
           
      <div className="flex justify-end">
        <Link to="/" className="px-2 hover:bg-yellow-500 py-1 bg-yellow-300  drop-shadow-md	ring-2 hover:ring-yellow-500 
 text-white rounded-full pr-2">Let's go back</Link> </div>
        
        </div>
      <div className='flex-1'><img src='https://i.postimg.cc/JnF22V4W/istockphoto-1355858742-612x612.jpg
                                '/></div>
    </div>
      </div>
  )
}


export default memo(PageNotFound);
