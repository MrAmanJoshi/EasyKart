import axios from "axios";


export function getProductData(id) {

  return axios.get("https://dummyjson.com/products/" + id).then(function(response) {
    return response.data
  })
}


export function getProductList(query, sortBy, pageNum, sortType) {

  let params = {};

  if (query) {
    params.search = query;
  }

  if (sortBy) {
    params.sortby = sortBy;
  }

  if (pageNum) {
    params.page = pageNum;
  }

  if (sortType) {
    params.sortType = sortType;
  }
  return axios.get('https://myeasykart.codeyogi.io/products', {
    params
  }).then((response) => {
    return response.data
  }
  )
}


