import { instance } from ".";

export const getMovieList = async (params) => {
  const { data } = await instance.get("/v1/search/movie.json", {
    params,
  });
  return data;
};
