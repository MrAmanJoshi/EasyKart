import React, { useState } from 'react';

import NoMaching from './NoMaching';
import MyCartPage from './MyCartPage'
import ProductDetailPage from './ProductDetailPage';


import ProductListPage from './ProductListPage';

import FooterPage from './FooterPage';

import { Routes, Route } from "react-router-dom";

import HeadPage from './HeadPage';


function App() {

  const saveDataString = localStorage.getItem("my-cart");
  const saveData = JSON.parse(saveDataString)
  console.log(saveData)

  const [cart, setCart] = useState(saveData || {})

  function handlAddToCard(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }
    setCart(newCart);

    const CartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", CartString);
  }

  const totalCount = Object.keys(cart).reduce(function(output, current) {
    return output + cart[current];
  }, 0);

  return (

    <div className="flex flex-col h-screen overflow ">


      <HeadPage productCount={totalCount} />

      <div className='grow'>
        <Routes>

          <Route path='/' element={<ProductListPage />}> </Route>

          <Route path="/viewDetail/:id/" element={<ProductDetailPage onAddToCart={handlAddToCard} />}> </Route>

          <Route path='*' element={<NoMaching />}></Route>
          <Route path="/MyCartPage/" element={<MyCartPage/>}></Route>

        </Routes>
      </div>
      <FooterPage />
    </div >
  )
}


export default App;
