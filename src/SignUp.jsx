import React from "react"
import Input from "./Input"
import * as Yup from 'yup';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";
import { withFormik } from 'formik';
import axios from "axios";
import withProvider from './withProvider'
import { UserContext, AlertContext } from './Contexts'

function handleSignUpApi( values, bag, setUser ) { 
  axios.post( ' https://myeasykart.codeyogi.io/signup ', {
  fullName: values.fullName,
   email: values.email,
 password: values.password }).then( ( response )  => {
   const { user, token } = response.data;
    localStorage.setItem('token', token);
    bag.props.setUser( user );
    bag.props.setAlert( { type:"Success", message:"Signup successfull"})
 } ).catch( () => {
    bag.props.setAlert({
      type:"error", message:"Somthing wrong please check"
    })
 })
}

const schema =
  Yup.object().shape({
    fullName: Yup.string().required('Required').min(2, 'Too Short!').max(50, 'Too Long!'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).max(16).required(),
  })

const initialValues = {
  fullName: "",
  email: "",
  password: "",
}

export function SignUp({ 
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit }) {

  return (
    <div className=" max-w-sm mx-auto m-3 ">
      <Link to="/Login/"><IoArrowBackCircleOutline className="text-3xl mt-16 ml-2 " /></Link>
      <h1 className="text-2xl font-semibold py-4  px-2">Sign Up</h1>

      <form onSubmit={handleSubmit} className="mt-16 max-w-sm mx-auto my-4">
        <div className="border border-slate-200 rounded-lg m-2 flex flex-col p-8">

          <Input
            label="User Name*"
            type="text"
            id="fullName"
            name="fullName"
            className="mt-2"
            value={values.fullName}
            touched={touched.fullName}
            error={errors.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
             required
            autoComplete="on"
          />

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

          <button type="submit" className="bg-red-500 px-5 py-3 my-3 text-white w-24 rounded-lg font-medium " >
            Sign Up
				</button>

        </div>
      </form>
    </div>
  )
}
const myHoc = withFormik({
  handleSubmit: handleSignUpApi, initialValues: initialValues, validationSchema: schema
})
const NewSingnUp = myHoc(SignUp)

export default withProvider(UserContext)(NewSingnUp);



// <Formik
//         onSubmit={handleSignUpApi}
//         initialValues={initialValues}
//         validationSchema={schema}
//         validateOnMount
//         required
//       > </Formik>