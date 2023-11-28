import axios from "axios";

export const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api`;

const axiosClient = axios.create({
   baseURL,
   headers: {
      'content-type': 'application/json',
   }
});

export default axiosClient;