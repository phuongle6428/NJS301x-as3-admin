import axiosClient from "./axiosClient";

const authAPI = {
   postSignUp: (body) => {
      const url = '/auth/admin/signup';
      return axiosClient.post(url, body)
   },
   postSignIn: (body) => {
      const url = '/auth/admin/signin';
      return axiosClient.post(url, body)
   },
   getUserStatus: () => {
      const url = '/auth/admin/status'
      return axiosClient.get(url)
   }
}

export default authAPI