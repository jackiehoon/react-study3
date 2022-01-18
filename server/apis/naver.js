import { naverInstance } from "./index.js";

export const getBookList = async (params) => {
  const { data } = await naverInstance.get("/v1/search/book.json", {
    params,
  });
  return data;
};

export const getBookDetail = async (params) => {
  const { data } = await naverInstance.get("/v1/search/book_adv.json", {
    params,
  });
  return data;
};

export const getMovieList = async (params) => {
  const { data } = await naverInstance.get("/v1/search/movie.json", {
    params,
  });
  return data;
};
