import axios from "axios";


export function getProductData(id) {
  return axios.get("https://myeasykart.codeyogi.io/product/" + id).then(function(response) {
    return response.data
  })
}

export function getProductByIds(ids) {
  const idsBulk = ids.join()
  return (
    axios.get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: idsBulk
      }
    }
    ).then(function(response) {
      return response.data
    })
  )
}

export function getProductList(query, sortBy, page, sortType) {

  let params = {};

  if (query) {
    params.search = query;
  }

  if (sortBy) {
    params.sortBy = sortBy;
  }

  if (page) {
    params.page = page;
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

export function saveCartInServer(cart) {
  return axios.post("https://myeasykart.codeyogi.io/carts", { data: cart }, {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }).then(function(response) {
    return response.data
  })
}

export function getCart() {
  return axios.get('https://myeasykart.codeyogi.io/carts', {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }).then(function(response) {
    return response.data
  })
}
