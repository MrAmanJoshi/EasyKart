import React, { useState, useEffect, memo } from 'react';
import PageNotFound from "./PageNotFound";
import Loading from "./Loading"

import { Link } from "react-router-dom"
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi"
import { useParams } from 'react-router-dom';
import { getProductData } from './Api';

function ProductDetail({ onAddToCart }) {

  const [count, setCount] = useState(1)

  const [Detail, useDetail] = useState();

  const [loading, setLoading] = useState(true);


  const params = useParams();
  const id = +(params.id);


  useEffect(function() {
    const promis = getProductData(id);
    promis.then(function(product) {
      useDetail(product)
      setLoading(false)
    }).catch(function(){
      setLoading(false)
    })
  }, [id]);

  if (loading) {
    return (
      <Loading />
    )
  }

  if (!Detail) {
    return <PageNotFound />
  }
  

  function hendleInputChange(event) {
    setCount(+event.target.value);
  }

  function hendleButtoClick() {
   
    onAddToCart(Detail.id, count);
    setCount(1)
  }

  function inputChangeRight() {
    return setCount(1)
  }
  function inputChangeLeft() {
    return setCount(1)
  }

  return (
 
     <div className="flex flex-col justify-center items-cenrter mt-9 p-4  ">
   
      <div className="  ml-4">
        <Link to="/" className=" p-3" ><IoArrowBackCircleOutline className="text-4xl text-black "   /></Link>
      </div>
      <div className="sm:flex sm:justify-between">
        <div className="sm:mx-5 sm:flex-1 ">
          <img src={Detail.thumbnail} />
        </div>

        <div className="sm:flex-1 sm:flex-col ">
          <h1 className="sm:text-2xlxl sm:font-semibold text-gray-400 ">{Detail.category}</h1>

          <h1 className="sm:text-2xl sm:font-semibold ">{Detail.title}</h1>

          <p className="sm:text-2xl sm:font-semibold">{Detail.description}</p>

          <p className="mt-2 sm:text-2xl sm:font-semibold"> ₹ {Detail.price}</p>

          <div className="flex mt-5">
            <input value={count} onChange={hendleInputChange} type="number" add={Detail.add} className="w-12 px-2 hover:bg-red-600 bg-salte-400 ring-2 hover:ring-red-600 rounded-lg" />

            <button className="bg-red-400 hover:bg-red-600 ring hover:border-transparent hover:border  ring-red-700  ml-2 bg-salte-400  rounded-lg px-2 py-1" onClick={hendleButtoClick} >Add to cart</button></div>
        </div>
      </div>
      <div>

      </div>
      <div className="flex mt-4 p-4 justify-between  ">
        <div>
          {(Detail.id >= 2 && <Link to={"/viewDetail/" + (Detail.id - 1)}><HiChevronDoubleLeft className="text-5xl" onClick={inputChangeLeft} /></Link>)}
        </div>
        <div className="">
          <Link onClick={inputChangeRight} to={"/viewDetail/" + (Detail.id + 1)}><HiChevronDoubleRight className="text-5xl flex justify-end" /></Link>
        </div>
      </div>

    </div>
  );
}


export default ProductDetail;