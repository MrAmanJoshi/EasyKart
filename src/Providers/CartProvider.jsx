import React, { useState, useEffect } from 'react'
import { CartContext } from "../Contexts"
import { withUser } from "../withProvider"
import { getCart, saveCartInServer, getProductByIds } from "../Api"

function CartProvider({ children, user, isLoggedIn }) {
  
  const [cart, setCart] = useState([])
  console.log("cart to", cart)

  useEffect(function() {
    if (isLoggedIn){
      getCart().then(function(saveCart) {
        setCart(saveCart)
      })
    } else  {
      const saveCartString = localStorage.getItem("my-cart") || '{}';
      const saveCart = JSON.parse(saveCartString)
      quantityMapToCart(saveCart)
      
  } }, [isLoggedIn]);

  function quantityMapToCart(quantityMap){
    getProductByIds(Object.keys(quantityMap)).then(function(products){
        const savedData= products.map( (p) =>({
          product:p,
          quantity: quantityMap[p.id],
        }));
        setCart(savedData);
      })
    } 

  function handleAddToCard(productId, count) {

    const quantityMap = cart.reduce(function(oldMap, cartItem){
  return {
    ...oldMap, [cartItem.product.id]: cartItem.quantity
  }
},{})

    const oldCount = quantityMap[productId] || 0;
    
    const newCart = { ...quantityMap, [productId]: oldCount + count }
    updateCart(newCart);
  }

  function updateCart(quantityMap) {
    if (isLoggedIn){
      saveCartInServer(quantityMap).then( function(response){
        quantityMapToCart(quantityMap)
      })
    } else {
      const quantityMapString = JSON.stringify(quantityMap)
      localStorage.setItem("my-cart", quantityMapString);
      quantityMapToCart(quantityMap)
    } 
  }

  const totalCount = cart.reduce(function(output, current) {
    return output + current.quantity;
  }, 0);


  return (
    <CartContext.Provider value={{ handleAddToCard, updateCart, totalCount, cart }}>{children} </CartContext.Provider>
)}

export default withUser(CartProvider);