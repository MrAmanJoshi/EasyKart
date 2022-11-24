import React from 'react';
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
import CartProvider from './Providers/CartProvider'


function App() {
return (
 <div className="flex flex-col h-screen overflow ">
      
<UserProvider>
  <CartProvider>
  <AlertProvider>
    
      <Alert/>
    
<Header/>
    <div className='grow'>
        <Routes>
          
          <Route path='/' element={ //<UserRoute> 
  <ProductListPage />
          //</UserRoute> 
          } > </Route>

          <Route path="/viewDetail/:id/" element={<ProductDetail />}> </Route>

          <Route path='*' element={<NoMaching />}></Route>
          <Route path="/NewCartPage/" element={<NewCartPage />}></Route>

          <Route path="/Login/" element={<AuthRoute>
            <Login /> 
          </AuthRoute>
          }></Route>

          <Route path="/SignUp/" element={ <AuthRoute>
          <SignUp />
          </AuthRoute>   
          }></Route>

          <Route path="/Profile/" element={<Profile />}></Route>


          <Route path="/ForgetPswd/" element={<ForgetPswd />}></Route>
  
    </Routes>
      </div>
      
  <Footer />    
    </AlertProvider>
  </CartProvider>    
  </UserProvider>
    </div >
  )
}


export default App;
