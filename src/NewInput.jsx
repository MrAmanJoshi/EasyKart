import React, { memo } from "react"
import { useField } from 'formik';

function NewInput({
  name, error, touched, onChange, onBlur,id,className,value,label, ...rest
}) {
  
  // const field = useField({ name });
  // console.log("name is here", name);
  // console.log("field is here", field);
  
  // const [data, meta] = field;
  // const { onBlur, onChange, value } = data;
  // const { error, touched } = meta

  let borderClass = "border-slate-300"
  if (error && touched) {
    borderClass = "border-red-500"
  }

  return (

    <>
      <label htmlFor={id} className={"text-xm  font-medium " + className}>{label}</label>

      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        {...rest}
        className={"border border-slate-300 my-1 px-3 h-12  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  border-y-2 border-blue-500" + className + " " + borderClass}
      />
      {touched && error && <div className="text-red-400">{error}</div>}
    </>

  )
}


export default memo( NewInput);