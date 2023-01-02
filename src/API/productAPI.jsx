import axiosClient from "./axiosClient";

const productAPI = {
   getProducts: () => {
      const url = 'api/general/products'
      return axiosClient.get(url)
   },
   getSearchByName: (query) => {
      const url = 'api/general/products/search'
      return axiosClient.get(url, {
         params: query
      })
   }
}

export default productAPI