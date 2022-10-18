import React, { useState } from "react"
import { FiDelete } from "react-icons/fi";
import Loading from "./Loading"

function NewCartRow({ products, cart, updateCart, localCart, setLocalCart}) {


  function handleQuentityChange(event) {
const newValue = +event.target.value
    const InputId = event.target.getAttribute("cangeinputid", newValue )
    
    const newLocalCart= {...localCart, [InputId]:newValue}
setLocalCart(newLocalCart)

  }

  function handleProductRemove(event) {
    const productId = event.currentTarget.getAttribute("Removeid")
    const newCart = { ...cart }
    delete newCart[productId]
    updateCart(newCart)
  }

  return (

    products.map(function(p) {

      return <div key={p.id} className="mb-4">
        <div className="flex justify-end border-b border-slate-100 py-2 pr-2">
          <button removeid={p.id} onClick={handleProductRemove} ><FiDelete className="text-2xl" /></button>
        </div>

        <div className="flex items-center justify-center  py-2 pr-2 "><img src={p.thumbnail} className="w-16 h-16 object-cover" /></div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">Product:</p>
          <p className="text-sm font-semibold text-red-500">{p.title}</p>
        </div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">price:</p>
          <p className="text-sm font-semibold ">${p.price}</p>
        </div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">Quantity:</p>
          <input cangeinputid = {p.id} onChange={handleQuentityChange} value={localCart[p.id]} type="number" className="w-10 h-6 border border-gray-100" />
        </div>

        <div className="flex justify-between border border-slate-100 py-2 px-2">  <p className="text-sm font-semibold">Subtotal:</p>
          <p className="text-sm font-semibold ">${p.price * cart[p.id]}</p>
        </div>

      </div>
    })
  )
}

export default NewCartRow;




