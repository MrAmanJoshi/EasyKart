import React, { useState } from 'react';
import AuthRoute from './AuthRoute'
import Login from './Login';
import Loading from './Loading';
import SignUp from './SignUp';
import NoMaching from './NoMaching';
import ForgetPswd from './ForgetPswd';
import ProductDetail from './ProductDetail';
import NewCartPage from './NewCartPage';
import ProductListPage from './ProductListPage';
import Footer from './Footer';
import { Routes, Route } from "react-router-dom";
import Header from './Header';
import Profile from "./Profile"
import UserRoute from "./UserRoute"
import Alert from "./Alert"
import UserProvider from './Providers/UserProvider'
import AlertProvider from './Providers/AlertProvider'


function App() {

  const saveDataString = localStorage.getItem("my-cart");
  const saveData = JSON.parse(saveDataString)

  const [cart, setCart] = useState(saveData || {})

  function handlAddToCard(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count }

    updateCart(newCart);
  }

  function updateCart(newCart) {
    const CartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", CartString);
    setCart(newCart)
  }

  const totalCount = Object.keys(cart).reduce(function(output, current) {
    return output + cart[current];
  }, 0);


  return (

    <div className="flex flex-col h-screen overflow ">
      
<UserProvider>
  <AlertProvider>
    <Alert/>
    
  
        <Header productCount={totalCount} />
    

      <div className='grow'>
        <Routes>
          
          <Route path='/' element={ <UserRoute> 
  <ProductListPage />
          </UserRoute> } > 
          </Route>

          <Route path="/viewDetail/:id/" element={<ProductDetail onAddToCart={handlAddToCard} />}> </Route>

          <Route path='*' element={<NoMaching />}></Route>
          <Route path="/NewCartPage/" element={<NewCartPage cart={cart} updateCart={updateCart} />}></Route>

          <Route path="/Login/" element={<AuthRoute>
            <Login /> 
          </AuthRoute>}></Route>

          <Route path="/SignUp/" element={ <AuthRoute>
          <SignUp />
          </AuthRoute>   }></Route>

          <Route path="/profile/" element={<Profile />}></Route>


          <Route path="/ForgetPswd/" element={<ForgetPswd />}></Route>

        </Routes>
      </div>
      <Footer />
    </AlertProvider>
      </UserProvider>
    </div >
  )
}


export default App;
