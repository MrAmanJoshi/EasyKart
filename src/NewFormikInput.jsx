import React, { memo } from "react"
import { useField } from 'formik';
import NewInput from "./NewInput"

function NewFormikInput({
  name, ...rest
}) {

  const field = useField({ name });
  // console.log("name is here", name);
  // console.log("field is here", field);

  const [data, meta] = field;
  const { onBlur, onChange, value } = data;
  const { error, touched } = meta

  let borderClass = "border-slate-300"

  if (error && touched) {
    borderClass = "border-red-500"
  }
  return (
    <NewInput
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      error={error}
      touched={touched}
      name={name}
      {...rest}
    />
  )
}
export default NewFormikInput;






  // <>
    //   <label htmlFor={id} className={"text-xm  font-medium " + className}>{label}</label>

    //   <input
    //     id={id}
    //     value={value}
    //     onChange={onChange}
    //     onBlur={onBlur}
    //     name={name}
    //     {...rest}
    //     className={"border border-slate-300 my-1 px-3 h-12 " + className + " " + borderClass}
    //   />
    //   {touched && error && <div className="text-red-400">{error}</div>}
    // </>