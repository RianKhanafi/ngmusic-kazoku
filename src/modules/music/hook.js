import { useEffect, useState } from "react";
import { fetchingMusic } from "./api";

export const STATUS = {
  idle: "idle",
  loading: "loading",
  error: "error",
};

const useMusic = () => {
  const [status, setStatus] = useState("idle"); //idle, loading, error
  const [data, setData] = useState([]);
  const [searchParams, setSearchParams] = useState({
    search: "",
  });

  const fetchMusic = async (params) => {
    if (params?.search) setSearchParams(params);
    setStatus(STATUS.loading);
    const search = params?.search ? params?.search : searchParams?.search;

    try {
      const result = await fetchingMusic({
        search: search?.replaceAll(" ", "+"),
      });
      setStatus(STATUS.idle);

      if (result.status === 200) {
        setData(result.data);
      }
    } catch (err) {
      setStatus(STATUS.error);
      setSearchParams("");
    }
  };

  useEffect(() => {
    fetchMusic();
  }, []);

  return { data, status, fetchMusic, searchParams };
};

export { useMusic };
