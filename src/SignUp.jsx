import React from "react"
import Input from "./Input"
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { Link } from "react-router-dom";


function SignUp() {
  function handleSignUpApi(values) {
    console.log("values aa rhi hai", values)
  }

  const schema =
    Yup.object().shape({
      firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8).max(16).required(),
      Cpassword: Yup.string().min(8).max(16).required(),




    })
  const initialValues =
  {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Cpassword: "",

  }

  return (
    <div className=" max-w-sm mx-auto m-3 ">
       <Link to="/Login/"><IoArrowBackCircleOutline className="text-3xl mt-16 ml-2 "/></Link>
      <h1 className="text-2xl font-semibold py-4  px-2">Sign Up</h1>
      <Formik
        onSubmit={handleSignUpApi}
        initialValues={initialValues}
        validationSchema={schema}
        validateOnMount
        required
      >
        <Form className="mt-16 max-w-sm mx-auto my-4">
          <div className="border border-slate-200 rounded-lg m-2 flex flex-col p-8">

            <Input
              label="First Name*"
              type="text"
              id="firstName"
              name="firstName"
              className="mt-2"
            />

            <Input
              label="Last Name*"
              type="text"
              id="lastName"
              name="lastName"
              className="mt-2"
            />

            < Input label=" Email*"
              type="email"
              id="@signUpEmail"
              name="email"
              className="mt-2" />

            <Input
              label=" Password"
              type="password"
              id="@password"
              name="password"
              className="mt-2" />

            <Input
              label="Conform Password*"
              type="password"
              id="@Cpassword"
              name="Cpassword"
              className="mt-2" />

            <button className="px-3 py-1 bg-red-400 mx-4 my-2 text-white font-bold " type="submit" onSubmit={handleSignUpApi}>Create Account</button>

          </div>
        </Form>
      </Formik>

    </div>
  )
}
export default SignUp;

/* Yup.object().shape({

firstName: Yup.string().min(2, " Name is too sort").required(),

lastName: Yup.string().min(2, " Last Name is too sort").required(),

email: Yup.string().email("Invailed Email").required(),
password: Yup.string().min(8).max(16).required(),*/