import React, { useState, useEffect, memo } from 'react';
import ProductList from './ProductList';
import NoMaching from './NoMaching'
import Button from './Button';
import { getProductList } from './Api';
import Loading from './Loading';
import { Navigate } from "react-router-dom";
import {range} from "./lowdash"

function ProductListPage() {

  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('Default');
  const [apiProduct, setApiProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1)

  useEffect(() => {
    let sort;
    let sortType;
    if (sort == "title") {
      sortBy = "title"
    }
    if (sort == "price") {
      sortBy = "price"
    }
    if (sort == "priceLow") {
      sortBy = "price"
      sortType = "desc"
    }

    getProductList(query, sort, pageNum, sortType).then((response) => {console.log('response',response.meta)
      setApiProduct(response)
      setLoading(false)
    })
  }, [query, sort, pageNum])

  function handleChangeQuery(event) {
    setQuery(event.target.value);
  }

  function handleChangeSort(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return <Loading />
  }
  if (apiProduct.data.length == 0) {
    return <NoMaching />
  }


  return (
    <div>
      {apiProduct.data && <div>
        <div className="flex fixed top-14 left-0 right-0  bg-gradient-to-r from-white to-orange-100 py-2 mb-2 justify-center">
          <div className="flex border border-gray-200 w-full mx-4">
            <input
              type="search"
              placeholder="Search... "
              className=" h-8 w-full "
              onChange={handleChangeQuery}
              value={query}
            />

            <select
              className=" w-16"
              onChange={handleChangeSort}
            >
              <option value="Default">Sort</option>
              <option value="title">Sort by title</option>
              <option value="price">Sort by price high: to low</option>
              <option value="priceLow">Sort by price low: to high</option>
            </select>
          </div>
        </div>

        <div className="flex p-10 bg-slate-50 justify-center mt-28">
          <div className=" my-5 rounded-sm bg-white overscroll-none  p-5  ">
            <ProductList products={apiProduct.data} />
          </div>
        </div>
        <div className="flex justify-center mb-32 my-5 ">
    {
    [...Array(apiProduct.meta.last_page).keys()].map((item)=>(<Button onClick={()=>(setPageNum(item+1))}>{item+1}</Button>))
    }
        </div>
      </div>}
    </div>
  );
}
export default ProductListPage;



 //  useEffect(function() {
 // const promis = getProductList();
 // promis.then(function(products) {
 //      useApiProduct(products);
 //      setLoading(false);
 //    })
 //  }, []);

 //  let apiProduct = apiProduct.filter(function(item) {
 //    const lowerCaseTitle = item.title.toLowerCase();

 //    const lowerCaseQuery = query.toLowerCase();

 //    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
 //  });

 //  if (sort == 'price') {
 //    apiProduct.sort(function(x, y) {
 //      return y.price - x.price;
 //    });
 //  } else if (sort == 'priceLow') {
 //    apiProduct.sort(function(x, y) {
 //      return x.price - y.price;
 //    });
 //  } else if (sort == 'title') {
 //    apiProduct.sort(function(x, y) {
 //      return x.title < y.title ? -1 : 1;
 //    });
 //  }
