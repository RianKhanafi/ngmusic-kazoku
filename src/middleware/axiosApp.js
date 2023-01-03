import axios from "axios";

const axiosApp = axios.create({
  baseURL: "https://itunes.apple.com",
});

axiosApp.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    Promise.reject(err);
  }
);
axiosApp.interceptors.request.use(
  (config) => {
    const newConfig = { ...config };
    if (newConfig.headers["Content-Type"] === "multipart/form-data")
      return newConfig;

    return newConfig;
  },
  (err) => {
    Promise.reject(err);
  }
);

export { axiosApp };
