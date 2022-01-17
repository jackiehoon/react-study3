import { instance } from ".";

export const getBookList = async (params) => {
  const { data } = await instance.get("/v1/search/book.json", {
    params,
  });
  return data;
};

export const getBookDetail = async (params) => {
  const { data } = await instance.get("/v1/search/book_adv.json", {
    params,
  });
  return data;
};
