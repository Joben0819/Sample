import { Login } from "../Utils/Interface";

const Domain = 'https://g8vns.dgg8.cn';
const gameapp = "/game88-game-app/";
const platform = "/game88-platform-app/";

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance = axios.create({
  // withCredentials: true, 
  // baseURL: '',
  // timeout: 1000000000000000,
  // headers: {'X-Custom-Header': 'foobar', "Access-Control-Allow-Origin": "*", }
});

export const api = async (
  param: string,
  params2: string,
  method: string,
  data?: any
): Promise<any> => {
  const url = Domain + params2 + param;

  try {
    var globalHeaders = {
      "front-host": url,
      dev: 2,
      version: "5.5.2.3",
      "Content-Type": "application/json;charset=UTF-8",
    };

    // Axios configuration
    const axiosConfig: AxiosRequestConfig = {
      method: method,
      url: url,
      headers: {
        "front-host": globalHeaders["front-host"], 
        dev: globalHeaders.dev.toString(),
        version: globalHeaders.version.toString(),
        "Content-Type": globalHeaders["Content-Type"],

      },
      data: JSON.stringify(data),
      // withCredentials: true, // Include credentials (cookies)
    };

    const response: AxiosResponse = await axiosInstance(axiosConfig);

    if (response.status !== 200) {
      throw new Error('Request failed');
    }
    else if (param === 'login') {
        if(response.data.code === 500){
          setTimeout(() => {
            alert(response.data.msg)
          }, 2000)

        }else{
          localStorage.setItem('token', response.data.data.token);
          // return response;
        }

    } else if (response.data.code === 401) {
      localStorage.removeItem('token');
    } else{
      return response;
    }
  } catch (error) {
    console.error('API request error:', error);
    return null; // Handle the error case as needed
  }
};

export function Login(data: Login): Promise<any> {
  return api('login', platform, 'POST', data);
}

export function getGameTypes(): Promise<any> {
  return api('getGameTypes', gameapp, 'POST');
}



export function Browseinit(): Promise<any> {
  return api('init', platform, 'POST');
}

export function AccountInfo(): Promise<any> {
  return api("getAccountInfo", platform, "POST");
}