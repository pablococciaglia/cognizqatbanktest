import axios, { AxiosResponse } from "axios";

export enum Method {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const fetchApi = async <T extends Object>(url: string, method?: Method, data?: unknown) => {
  try {
    const options = {
      method ,
      data,
      url,
    };
    const response: AxiosResponse<T> = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
