import React, { memo } from "react"


function Input({
  name, error, touched, onChange, onBlur, id, className, label, ...rest
}) {

  // const field = useField({ name });
  // console.log("name is here", name);
  // console.log("field is here", field);

  // const [data, meta] = field;
  // const { onBlur, onChange, value } = data;
  // const { error, touched } = meta

  let borderClass = "border-slate-300"
  let lebalClass = "text-gray-800"
  if (error && touched) {
    borderClass = "border-red-500"
    lebalClass = "text-red-400"
  }

  return (

    <>
      <label htmlFor={id} className={"text-xm  font-medium " + lebalClass}>{label}</label>

      <input
        id={id}
      
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        error={error}
        {...rest}
        className={"border border-slate-300 my-1 px-3 h-12  focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" + className + " " + borderClass}
      />
      {touched && error && <div className="text-red-400">{error}</div>}
    </>

  )
}


export default memo(Input);