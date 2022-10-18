import React,{useContext} from "react"
import { Link } from "react-router-dom"

import {withUser} from './withProvider'
import Button from './Button'
function Profile({setUser}) {

  
  function handleLogOut() {
    localStorage.removeItem("token");
    setUser(undefined)

  }
  return (
    <div>
      <Link to="/">
        <Button onClick={handleLogOut} className=" mt-24">LogOut</Button>
      </Link>
    </div>
  )
}


export default withUser(Profile);