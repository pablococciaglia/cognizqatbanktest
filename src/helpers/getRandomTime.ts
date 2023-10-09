import { YEAR_MILISECONDS } from "../constants/constants";

export const getRandomTime = () =>
  new Date().getTime() - Math.floor(Math.random() * YEAR_MILISECONDS);
