import  React, { memo } from "react";
function Footer() {
  return (
    <div className="flex justify-between bg-gray-700 py-6 px-2">
      <p  className="text-white text-lg " >Copyright ©2022 All rights reserved</p>
      
        <p className="text-white text-lg" >Powered by CodeYogi</p>

    </div>
  )
}

export default memo(Footer);