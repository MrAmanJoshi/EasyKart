import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import NoMaching from './NoMaching';
import ForgetPswd from './ForgetPswd';
import ProductDetail from './ProductDetail';

import NewCartPage from './NewCartPage';

import ProductListPage from './ProductListPage';

import Footer from './Footer';

import { Routes, Route } from "react-router-dom";

import Header from './Header';


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


     <Header productCount={totalCount}/>

      <div className='grow'>
        <Routes>

          <Route path='/' element={<ProductListPage />}> </Route>

          <Route path="/viewDetail/:id/" element={<ProductDetail onAddToCart={handlAddToCard} />}> </Route>

          <Route path='*' element={<NoMaching />}></Route>
          <Route path="/NewCartPage/" element={<NewCartPage/>}></Route>

          <Route path="/Login/" element={<Login/>}></Route>
           <Route path="/SignUp/" element={<SignUp/>}></Route>
           <Route path="/SignUp/" element={<SignUp/>}></Route>
           <Route path="/ForgetPswd/" element={<ForgetPswd/>}></Route>
     
        </Routes>
      </div>
      <Footer />
    </div >
  )
}


export default App;
