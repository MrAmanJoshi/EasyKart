import React,{ useEffect, useState } from 'react'
import axios from "axios"
import { UserContext } from "../Contexts"
import Loading from '../Loading'

function UserProvider({children}){
  
  const [user, setUser] = useState()
  
  const [loadingUser, setLoadingUser] = useState(true)
  
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (token) {
      axios.get(' https://myeasykart.codeyogi.io/me ', {
        headers: {
          authorization: token
        }
      }).then((response) => {
        setUser(response.data)
        setLoadingUser(false)
      }).catch(() => {
        localStorage.removeItem("token")
        setLoadingUser(false)
      })
    } else {
      setLoadingUser(false)
    }

  }, [])

  if (loadingUser) {
    return (
      <Loading />
    )
  }
  return (
    <UserContext.Provider value= { { user, setUser, isLoggedIn: !!token } }>{children}
  </UserContext.Provider>)
}

export default UserProvider;