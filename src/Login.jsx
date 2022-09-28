import React, { useState, memo } from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import Input from "./Input"
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
 <Link to="/"><IoArrowBackCircleOutline className="text-3xl mt-16 ml-2 "/></Link>

function Login() {

  function hendleCallApi(values) {
    
    console.log('values aa Rhi Hai', values.email, values.password)

  }
  
  const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(16). required() 
})
  
const initialValues = {email: '',
      password: '',}
  const validationSchema = schema;

  return (
    <>
      <Link to="/"><IoArrowBackCircleOutline className="text-3xl mt-16 ml-2 "/></Link>
    <Formik 
      onSubmit={hendleCallApi}
  initialValues={initialValues} validationSchema={validationSchema}
  validateOnMount >
      
    <Form  className="mt-8 max-w-sm mx-auto ">
      
       <div className=" max-w-sm mx-auto mb-3 ">
        <h4 className="text-2xl font-semibold py-4  px-2"> Login</h4>
      </div>

      <div className="border border-slate-200 rounded-lg m-2 flex flex-col p-8">
        
        <Input
          label="Enter Email or Username*"
          type="email"
          name="email"
          id= "@email"
          required
          autoComplete="on"
           className="mt-2"
        />
         
        <Input
          label="Password*"
          id="pswd"
          type="password"
          name="password"
          required
          autoComplete="on"
        className="mt-2"        
        />

        <div className="flex mt-5 ">

  <input type="checkbox" className="w-4 h-4" />

          <p className="font-medium text-xm  ">Remember me</p>
        </div>

        <button type="submit" className="bg-red-500 px-5 py-3 my-3 text-white w-24 rounded-lg font-medium disabled:bg-red-200" >
          LOG IN
				</button>

        <Link to="/ForgetPswd/" className="text-red-600 mb-2 ">Forget Password </Link>
        
<p>Don't have an account? <Link to= "/SignUp/" className="text-red-600 ">SignUp</Link>  </p>  

      </div>


    </Form>
      
      </Formik>
      </>
  );
}
export default memo(Login);
//disabled= {!dirty && !isVaild  }