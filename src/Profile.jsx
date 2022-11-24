import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { withUser } from './withProvider'
import Button from './Button'

function Profile({ user, setUser }) {

  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(undefined)

  }
  return (
    <div className= "flex w-full ml-2 mt-24 justify-end"  >
<div className="flex flex-col w-24  mr-5">   
      <Link className= "border-y border-gray-200 py-2" to= "/">Home</Link>
      
      <Link className= "border-b border-gray-200 py-2"  to= "/">All Products</Link>
      
      <Link className= "border-b border-gray-200 py-2"  to="/NewCartPage/">My Cart</Link>
  
     { user && <Link className= "border-b border-gray-200 py-2"  to="/Login/">
        <button onClick={handleLogOut}>LogOut</button>
      </Link>}
  
     { !user && <Link className= "border-b border-gray-200 py-2"  to="/Login/">
        <button onClick={handleLogOut}>Login</button>
      </Link>}
  
     { !user && <Link className= "border-b border-gray-200 py-2"  to="/SignUp/">
        <button onClick={handleLogOut}>SignUp</button>
      </Link>}
  
     </div> 
    </div>
  )
}


export default withUser(Profile);