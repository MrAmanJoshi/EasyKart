import React,{ useContext } from 'react'
import {AlertContext, UserContext} from "./Contexts"

function withProvider( provider ) {
  
   function myHoc( IncomingComponent ){
     function OutgoingComponent( props ) {
       const contextData = useContext(provider)
     return <IncomingComponent {...props } {...contextData} />  
     }
     return OutgoingComponent;
   }
  return myHoc;
}

export default withProvider;

export const withAlert = withProvider(AlertContext)


export const withUser = withProvider(UserContext)