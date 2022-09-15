import React from "react"
import Footer from "./Footer"


function FooterPage(){
  return(
    <div className="flex ">
        <Footer text="Copyright ©2022 All rights reserved" />
        <div className="flex justify-end">
 <Footer text="Powered by CodeYogi" />
 </div>
      </div>
  )
}

export default FooterPage;