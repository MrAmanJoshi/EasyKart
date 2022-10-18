import React, {useEffect, useContext } from "react"
import { FaCheckCircle } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';
import { BiErrorCircle } from 'react-icons/bi';
import withProvider from './withProvider'
import { AlertContext } from './Contexts'

function Alert(alertObjt) {
  const { alert, setAlert, removeAlert } = alertObjt;
  
  useEffect(()=>{
  if(alert){
    const Timeout = setTimeout(()=> removeAlert()
  , 3 * 1000)
  return function (){
    return clearTimeout(Timeout)
  }}
},[alert])
    
  if (!alert) {
    return <></>; }
  
const {type, message} = alert;
  
  let color;
  let Icon;
  let color2;

  if (type == "Success") {
    color = "bg-green-100 border-green-200 "
    color2 = "bg-green-400 border-green-400";
    Icon = FaCheckCircle;
} else if (type == "error") {
    color = "bg-red-100 border-red-300";
    color2 = "bg-red-400 border-red-400";
    Icon = BiErrorCircle; 
  }

  return (
    <div className={" border  p-2 rounded-xl mx-1 mt-1 flex content-center justify-between " + color}>
      <div className="flex">

        <div className={" w-8 h-8 flex justify-center  border rounded-xl items-center " + color2}>
          <Icon className="text-white text-3xl" />
        </div>

        <div className="h-8 flex items-center text-gray-700 font-medium text-lg mx-8">
          <p>{message}</p>
        </div>
      </div>
      
      <div className="h-8 flex items-center mr-4">
        <TiDeleteOutline onClick={removeAlert} className="text-2xl text-gray-600" />
      </div>
  </div> 
  )}
export default withProvider(AlertContext)(Alert);