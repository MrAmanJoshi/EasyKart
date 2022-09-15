import React, { useState } from 'react';

import { Link } from "react-router-dom"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"

function ProductDetail({ data, onAddToCart }) {

  const [count, setCount] = useState(1)

  function hendleInputChange(event) {
    setCount(+event.target.value);
  }

  function hendleButtoClick() {
    onAddToCart(data.id, count);
    setCount(1)
  }

  function inputChangeRight(){
    return setCount(1)
  }
  function inputChangeLeft(){
    return setCount(1)
  }

  return (

    <div className="flex flex-col justify-center items-cenrter p-4  ">
      <div className=" text-black  ml-4">
        <Link to="/" className=" p-3" ><IoArrowBackCircleOutline className="text-4xl" /></Link>
      </div>
      <div className="flex justify-between">
        <div className="mx-5 flex-1">
          <img src={data.thumbnail} />
        </div>

        <div className="flex-1 flex-col ">
          <h1 className="text-xl font-medium text-gray-400 ">{data.category}</h1>

          <h1 className="text-xl font-medium ">{data.title}</h1>

          <p className="">{data.description}</p>

          <p className="mt-2"> ₹ {data.price}</p>
          <img src={data.imeges} />

          <div className="flex mt-5">
            <input value={count} onChange={hendleInputChange} type="number" add={data.add} class="w-12 px-2 hover:bg-green-400 bg-salte-400 ring-2 hover:ring-green-600 rounded-lg" />

            <button className="bg-white hover:bg-green-400 ring-2 hover:boder-transparent  ring-green-700  ml-2 bg-salte-400  rounded-lg p-2" onClick={hendleButtoClick} >add to cart</button></div>
        </div>
      </div>
      <div>

      </div>
      <div className="flex mt-4 p-4 justify-between  ">
        <div>
          {(data.id >= 2 && <Link to={"/viewDetail/" + (data.id - 1)}><HiChevronDoubleLeft className="text-5xl" onClick= {inputChangeLeft}/></Link>)}
        </div>
        <div className="">
          <Link onClick= {inputChangeRight} to={"/viewDetail/" + (data.id + 1)}><HiChevronDoubleRight className="text-5xl flex justify-end" /></Link>
        </div>
      </div>

    </div>
  );
}


export default ProductDetail;