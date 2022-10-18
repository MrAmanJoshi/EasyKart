import React, { useState, memo } from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import Input from "./Input"
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import axios from "axios"
import withProvider from './withProvider'
import { withUser, withAlert } from "./withProvider"
import Button from './Button'

function handleCallApi(values, bag, setUser, setAlert) {
axios.post('https://myeasykart.codeyogi.io/login', {
  email: values.email, 
 password: values.password}).then( ( response ) => { 
  
  const { user, token } = response.data;
  localStorage.setItem( 'token', token );
  bag.props.setUser(user);
  bag.props.setAlert({type: "Success", message:"Login Successful"})
 }).catch(() => {
  bag.props.setAlert({type:"error", message: "Invalid credentials" })
 })
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(16).required()
})

const initialValues = {
  email: '',
  password: '',
}

export function Login({ handleSubmit, handleBlur, handleChange, values, errors, touched}) {

  
  return (
    <div>
    
    <form onSubmit={ handleSubmit } className="mt-8 max-w-sm mx-auto ">

        <div className=" max-w-sm mx-auto ">
          <h4 className="text-2xl font-semibold py-4  px-2"> Login</h4>
        </div>

        <div className="border border-slate-200 rounded-lg m-2 flex flex-col p-8">

          <Input
          value = {values.email}
            error={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter Email or Username*"
            type="email"
            name="email"
            id="@email"
            required
            autoComplete="on"
            className="mt-2"
          />

          <Input
          value={values.password}
            error={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="password*"
            id="password"
            type="password"
            name="password"
            required
            autoComplete="on"
            className="mt-2"
          />

          <Button type="submit" className=" px-5 py-3 my-3 w-24 " >
            LOG IN
				</Button>

          <Link to="/ForgetPswd/" className="text-red-600 mb-2 ">Forget Password </Link>

          <p>Don't have an account? <Link to="/SignUp/" className="text-red-600 ">SignUp</Link>  </p>
        </div>
      </form>
    </div>
  );
}
const myHoc = withFormik({ handleSubmit: handleCallApi, initialValues: initialValues, validationSchema: schema
  });

const EasyLogin = myHoc(Login);
export default withAlert(withUser(EasyLogin));



//disabled= {!dirty && !isVaild  }

// <Formik
      //   onSubmit={hendleCallApi}
      //   initialValues={initialValues}
      //   validationSchema={schema}
      // >
