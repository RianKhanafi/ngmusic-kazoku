import { axiosApp } from "../../middleware/axiosApp";

export const fetchingMusic = (params) =>
  axiosApp.get(`/search?term=${params?.search}&limit=4`);
