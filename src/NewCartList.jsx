import React, {useState, useEffect} from "react"
import NewCartRow from "./NewCartRow"
import Button from "./Button"
import { withCart } from "./withProvider"
import { Link } from "react-router-dom"

function NewCartList({ cart, updateCart}) {

  const [quantityMap, setQuantityMap]= useState({})
  
  const cartToQuantityMap = () => cart.reduce(function(oldMap, cartItem){
  return {
    ...oldMap, [cartItem.product.id]: cartItem.quantity
  }
},{})
  
  useEffect(function(){

setQuantityMap(cartToQuantityMap())
},[cart])


  console.log("caer",cart)

function updateCartPage(){
updateCart(quantityMap)
}
  
  return(
<>
   { cart.length >= 1 && <div className="mx-4 mt-24 flex flex-col">
     <div className="border  border-gray-200  py-2 flex flex-col ">

   <NewCartRow quantityMap ={quantityMap} setQuantityMap ={setQuantityMap}  cartToQuantityMap={cartToQuantityMap()}/>
      
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

}
  
  { cart.length == 0 &&
  <div className="flex flex-col mt-10 justify-center items-center">
        <p className="border border-gray-200 w-full text-center py-4 ">SHOPPING CART</p>
        <p className=" py-4 ">No products in the cart.</p>
        <Link to="/" >

          <p className="text-sm bg-red-400 px-3 py-1 rounded-lg w-36 pl-4" > RETURN TO SHOP </p>

        </Link>
      </div>

}  </>
  )
}

export default withCart(NewCartList);
     