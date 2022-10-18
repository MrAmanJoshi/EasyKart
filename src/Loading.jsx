import React,{memo} from "react"
import {AiOutlineLoading3Quarters} from "react-icons/ai"
function Loading(){
  return <div className= " text-black  text-4xl flex flex-col items-center justify-center h-screen font-extralight  ">
< AiOutlineLoading3Quarters className="animate-spin"/><span className="text-black font-normal text-xl  mt-2">Just a sec...</span></div>
}
export default memo(Loading);