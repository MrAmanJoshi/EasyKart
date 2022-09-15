import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import NoMaching from './NoMaching'
import Loading from './Loading';

import { useParams } from 'react-router-dom';
import { getProductData } from './Api';


function ProductDetailPage({ onAddToCart }) {

  const params = useParams();
  const id = +(params.id);


  const [Detail, useDetail] = useState();

  const [loading, setLoading] = useState(true)

  useEffect(function() {

    const promis = getProductData(id);

    promis.then(function(product) {

      useDetail(product)
      useLoading(false);

    }).catch(function(product) {

      setLoading(false);
    })

  }, [id]);

  if (loading) {
    return <Loading />
  }

  if (!Detail) {
    return <NoMaching />
  }
  return (
    <>
      <div className=" flex ">
        <ProductDetail
          onAddToCart={onAddToCart}
          data={Detail}
          add="1"
          btn="Add to card"
        />

      </div>
    </>)
}

export default ProductDetailPage;
