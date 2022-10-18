import React, {useState, useEffect} from "react"
import NewCartRow from "./NewCartRow"
import Button from "./Button"

function NewCartList({products, cart, updateCart, }) {

  const [localCart, setLocalCart]= useState({cart})
  
useEffect(function(){
setLocalCart(cart)
},[cart])

function updateCartPage(){
updateCart(localCart)
}
  
  return(

   <div className="mx-4 mt-24 flex flex-col">
     <div className="border  border-gray-200  py-2 flex flex-col ">

   <NewCartRow  products= {products} cart= {cart} updateCart ={updateCart} localCart= {localCart} setLocalCart= {setLocalCart}  />
      
      <div className="mx-3 flex ">
       <div className="flex border mr-2  border-gray-300 flex-1"><input type="text" placeholder="Coupen Code" className=""/></div>
      
   <div className="flex  flex-1" >  <Button className="">
      APPLY COUPON
      </Button></div>
       
      </div>
     <Button onClick = {updateCartPage} className="w-32 mx-5 mt-2">
      UPDATE CART
      </Button>
     </div>

</div>
  )
}

export default NewCartList;
     