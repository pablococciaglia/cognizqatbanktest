import axios, { AxiosResponse } from "axios";
import { PersonData } from "../types/personTypes";
import { Blog, Blogs } from "../types/blogsTypes";

export const fetchData = async (url: string) => {
  try {
    const response: AxiosResponse<PersonData | Blogs> = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const putData = async (url: string, payload: Blog) => {
  try {
    const response: AxiosResponse<Blog> = await axios.put(url, payload);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
