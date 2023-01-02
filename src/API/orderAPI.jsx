import axiosClient from "./axiosClient";

const orderAPI = {
   getOrders: () => {
      const url = 'api/admin/orders'
      return axiosClient.get(url)
   }
}

export default orderAPI