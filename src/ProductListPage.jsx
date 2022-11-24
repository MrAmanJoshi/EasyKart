import React, { useState, useEffect, memo } from 'react';
import ProductList from './ProductList';
import NoMaching from './NoMaching'
import Button from './Button';
import { getProductList } from './Api';
import Loading from './Loading';
import { Navigate } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr"
import { Link, useSearchParams } from "react-router-dom";
import { range } from "lodash"
import { URLSearchParams } from 'whatwg-url';
import Profile from "./Profile"


function ProductListPage() {

  const [apiProduct, setApiProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();

  let params = Object.fromEntries([...searchParams])

  let { sort, query, page } = params;
  query = query || "";
  sort = sort || "default";
  page = +page || 1

  useEffect(() => {
    let sortBy;
    let sortType;
    if (sort == "title") {
      sortBy = "title"
    }
    if (sort == "priceHigh") {
      sortBy = "price"
      sortType = "desc"
    }
    if (sort == "priceLow") {
      sortBy = "price"
      sortType = "asc"
    }

    getProductList(query, sortBy, page, sortType).then((response) => {
      setApiProduct(response)
      setLoading(false)
    })
  }, [query, sort, page])

  function handleChangeQuery(event) {
    setSearchParams({
      ...params, query: event.target.value, page: 1
    });
  }

  function handleChangeSort(event) {
    setSearchParams({
      ...params, sort: event.target.value
    });
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
        <div className="flex  bg-gradient-to-r from-white to-orange-100 py-1 mb-2 justify-center">
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
              <option value="default">Sort</option>
              <option value="title">Sort by title</option>
              <option value="priceHigh">Sort by price: high to low</option>
              <option value="priceLow">Sort by price: low to high</option>
            </select>
          </div>
        </div>

        <div className="flex p-10 bg-slate-50 justify-center mt-28">
          <div className=" my-5 rounded-sm bg-white overscroll-none  p-5  ">
            <ProductList products={apiProduct.data} />
          </div>
        </div>

        <div className="flex justify-center mb-32 my-5 ">

          {range(1, apiProduct.meta.last_page + 1).map((pageNo) => (<Link key={pageNo} to={"?" + new URLSearchParams({ ...params, page: pageNo })} className={"text-white font-medium px-2 py-1 mx-2 " + (pageNo === page ? "bg-blue-400 " : " bg-red-400")}>{pageNo}</Link>))}

        </div>
      </div>}
    </div>
  );
}
export default ProductListPage;


// [...Array(apiProduct.meta.first_page).keys()].map((item)=>(<Button onClick={()=>(setPageNum(item+1))}>{item+1}</Button>))
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
//<div>
 //  <Profile/>
  // </div>