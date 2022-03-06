import { loginType } from "./data-types/index";
import callAPI from "../config/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `https://bwa-storegg.herokuapp.com/${API_VERSION}/auth/signup`
  // const response = await axios
  //   .post(`https://bwa-storegg.herokuapp.com/${API_VERSION}/${URL}`, data)
  //   .catch((err) => err.response);

  // const axiosResponse = response.data;
  // console.log("api response : ", axiosResponse);
  // if (axiosResponse?.error == 1) {
  //   return axiosResponse;
  // }
  return callAPI({
    url,
    method : "POST",
    data

  })
}

export async function setLogin(data: loginType) {
  const url = `https://bwa-storegg.herokuapp.com/${API_VERSION}/auth/signin`;
  // const response = await axios
  //   .post(`https://bwa-storegg.herokuapp.com/${API_VERSION}/${URL}`, data)
  //   .catch((err) => err.response);
  // console.log("response API: ", response)

  // if (response?.status > 300) {
  //   const res = {
  //     error: true,
  //     message: response.data.message,
  //     data: null,
  //   };
  //   return res;
  // }

  // const res = {
  //   error : false,
  //   message : 'success',
  //   data: response?.data?.data
  // }
  // console.log("response: ", res);
  
  return callAPI({
    url,
    method : 'POST',
    data
})
}
