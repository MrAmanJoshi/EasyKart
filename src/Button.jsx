import React,{memo} from "react"

const Button = (props ) =>{ 
  
  return  <button type={props.type} {...props} className={" text-white hover:bg-red-500 bg-red-300 font-medium px-2 py-1 mx-1 rounded-lg "+ props.className }></button>
 }




export default memo(Button);