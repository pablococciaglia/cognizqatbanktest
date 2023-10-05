import axios from "axios";
import { PersonData } from "../types/personTypes";

export const getPersonData = (url: string, method = "GET") => {
  const options = {
    method,
    url,
  };
  axios
    .request(options)
    .then(function ({ data }: { data: PersonData }) {
      return data;
    })
    .catch(function (error: any) {
      console.error(error);
    });
};
