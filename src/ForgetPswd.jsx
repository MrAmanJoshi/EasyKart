import React, { memo } from 'react';
import Input from "./Input"
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { withFormik } from 'formik';

function handleForgetPswd(values){
  console.log("this is forget", values.emailF, values.passwordF)
}
  const Schema = yup.object().shape({
    emailF: yup.string().email().required(),
    passwordF: yup.string().min(8).max(16).required(),
    
  })
const  initialValues = {
           emailF: "",
           passwordF: "",
           
         }

export function ForgetPswd({
     values,
     touched,
     errors,
     handleChange,
     handleBlur,
     handleSubmit }){

  return (

     <div className=" max-w-sm mx-auto m-3 ">
        <Link to="/Login/"><IoArrowBackCircleOutline className="text-3xl mt-16 ml-2 "/></Link>

       <p className="text-2xl font-semibold py-4  px-2"> Create A New Password</p>
    <p className=" py-4  px-2">If you lost your password so dont worry. You can create a new strong password. 
</p>
       
 <form onSubmit={handleSubmit}>    
     <div className="border border-slate-200 rounded-lg m-2 flex flex-col p-8">

      <Input 
        label=" Email*" 
        type="email"  
        id="email"
         name="emailF"      
        className="mt-2"
      
        touched= { touched.emailF }
      error = { errors.emailF }
      onChange= { handleChange }
      onBlur = { handleBlur }
   />

       <Input 
    label="Enter New Password*"         type="password"
    id="password"
    name="passwordF"
    className="mt-2"
    
    touched={ touched.passwordF }
    error = { errors.passwordF }
    onChange ={ handleChange }
    onBlur = { handleBlur }/>

      <button className="py-2 px-5 bg-red-400 text-white rounded-lg mt-2 mb-4" type="submit" >Forget Password</button>

    </div>
     </form> 
    </div>
  )
}
   const myHoc = withFormik ( { 
  
  validationSchema:Schema,
   initialValues:initialValues,
     handleSubmit: handleForgetPswd,
   } )
const newForgetPswd = myHoc( ForgetPswd )

export default newForgetPswd;
