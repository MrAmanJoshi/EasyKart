import React from "react"
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";


import NewCartList from "./NewCartList"
function NewCartPage() {
return(
<div className="mt-14">
  <Link to="/" >
  <IoArrowBackCircleOutline className="text-5xl pl-4"/>
  </Link>

<NewCartList/>
</div>
)
}
 
export default NewCartPage;
