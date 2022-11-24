import React, { useState } from "react"
import { FiDelete } from "react-icons/fi";
import Loading from "./Loading"
import {withCart} from "./withProvider"


function NewCartRow({ products, cart, updateCart, quantityMap, setQuantityMap, cartToQuantityMap}) {


  function handleQuentityChange(event) {
const newValue = +event.target.value
    const InputId = event.target.getAttribute("cangeinputid", newValue )
    
    const newquantityMap= {...quantityMap, [InputId]:newValue}
setQuantityMap(newquantityMap)

  }

  function handleProductRemove(event) {
    const productId = event.currentTarget.getAttribute("Removeid")
    const newQuantityMap = cartToQuantityMap;
    delete newQuantityMap[productId]
    updateCart(newQuantityMap)
  }

  return (

    cart.map(function(cartItem) {
console.log("cartItem",cartItem.quantity)

      return <div key={cartItem.product.id} className="mb-4">
        <div className="flex justify-end border-b border-slate-100 py-2 pr-2">
          <button removeid={cartItem.product.id} onClick={handleProductRemove} ><FiDelete className="text-2xl" /></button>
        </div>

        <div className="flex items-center justify-center  py-2 pr-2 "><img src={cartItem.product.thumbnail} className="w-16 h-16 object-cover" /></div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">Product:</p>
          <p className="text-sm font-semibold text-red-500">{cartItem.product.title}</p>
        </div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">price:</p>
          <p className="text-sm font-semibold ">${cartItem.product.price}</p>
        </div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">Quantity:</p>
          <input cangeinputid = {cartItem.product.id} onChange={handleQuentityChange} value={quantityMap[cartItem.product.id]} type="number" className="w-10 h-6 border border-gray-100" />
        </div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">Subtotal:</p>
          <p className="text-sm font-semibold ">${cartItem.product.price * cartItem.quantity}</p>
        </div>
      </div>
    })
  )
}

export default withCart(NewCartRow);




