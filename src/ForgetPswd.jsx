import React, { memo } from 'react';
import Input from "./Input";
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { Formik, Form } from 'formik';


function ForgetPswd(){
function handleForgetPswd(values){
  console.log("this is forgit pass", values.email)
}
  const Schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(16).required(),
    conformPassword: yup.string().min(8).max(16).required(),
  })
 
  return (
    
     <div className=" max-w-sm mx-auto m-3 ">
        <Link to="/Login/"><IoArrowBackCircleOutline className="text-3xl mt-16 ml-2 "/></Link>
  
       <p className="text-2xl font-semibold py-4  px-2"> Create A New Password</p>
    <p className=" py-4  px-2">If you lost your password so dont worry. You can create a new strong password. 
</p>
       <Formik 
         initialValues={{
           email: "",
           password: "",
           conformPassword: "",
         }}
         onSubmit={handleForgetPswd}
         validationSchema={Schema}
         validationOnMount
         required
         >
         <Form>    
     <div className="border border-slate-200 rounded-lg m-2 flex flex-col p-8">
       
      <Input 
        label=" Email*" 
        type="email"  
        id="email"
         name="email"      
        className="mt-2" />
       
       <Input 
         label="Enter New Password*"         type="password"
         id="password"
         name="password"
         className="mt-2"/>
       
       <Input 
         label="Enter Conform Password" 
         type="password" 
         id="conformPswd"
         name="conformPassword"
         className="mt-2"
         />
       
      <button className="py-2 px-5 bg-red-400 text-white rounded-lg mt-2 mb-4" type="button" onSubmit={handleForgetPswd}>Forget Password</button>
      
    </div>
           </Form> 
        </Formik>

        </div>
  )
}
export default memo(ForgetPswd);
