import React from "react"
import {BsHourglassBottom} from "react-icons/bs"
function Loading(){
  return <div className= " text-black  text-4xl flex flex-col items-center justify-center font-extralight  ">
< BsHourglassBottom className="animate-spin"/><span className="text-black font-normal text-xl  mt-2">Just a sec...</span></div>
}
export default Loading;