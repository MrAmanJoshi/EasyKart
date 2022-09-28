import React, { useState, useEffect, memo } from 'react';
import ProductList from './ProductList';
import NoMaching from './NoMaching'
import Button from './Button';
import { getProductList } from './Api';
import Loading from './Loading';



function ProductListPage() {
  const [query, setQuery] = useState('');

  const [sort, setSort] = useState('Default');

  const [ApiProduct, useApiProduct] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(function() {

    const promis = getProductList();

    promis.then(function(products) {
      useApiProduct(products);
      setLoading(false);
    })
  }, []);

  let data = ApiProduct.filter(function(item) {
    const lowerCaseTitle = item.title.toLowerCase();

    const lowerCaseQuery = query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  });

  if (sort == 'price') {
    data.sort(function(x, y) {
      return y.price - x.price;
    });
  } else if (sort == 'priceLow') {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == 'title') {
    data.sort(function(x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }
  function handleChangeQuery(event) {
    setQuery(event.target.value);
  }

  function handleChangeSort(event) {
    setSort(event.target.value);
  }

  if (loading) {
    return (<Loading />);
  }


  return (
    <div>
      <div className="flex fixed top-12 left-0 right-0 bg-gradient-to-r from-white to-orange-100 py-4 mb-4 justify-center">
        <div className="flex border border-gray-400 w-80">
          <input
            type="search"
            placeholder="Search... "
            className=" h-8 w-80 "
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

      <div className="flex p-10 bg-gray-200 justify-center mt-28">
        <div className=" my-5 rounded-xl bg-white  p-5  ">
          {data.length > 0 && <ProductList products={data} />} {data.length == 0 && (
            <NoMaching />
          )}

        </div>
      </div>
      {data.length > 0 &&
        <div className="flex justify-center my-5 ">
          <Button title="1" />
          <Button title="2" />
          <Button title="Next" />
        </div>}

    </div>

  );
}
export default ProductListPage;
