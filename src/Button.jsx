import React from "react"

function Button(data) {
  return (
    
    <div>
      
      <button type= "button" className="bg-white hover:bg-red-400 px-5 py-2 mr-2 rounded-lg  ring-2 ring-black hover:ring-red-700  ">{data.title} </button>
   
    </div>
  );}




export default Button;