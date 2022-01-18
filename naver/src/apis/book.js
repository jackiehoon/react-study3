import { instance } from ".";

export const getBookList = async (params) => {
  const { data } = await instance.get("/book", {
    params,
  });
  return data;
};

export const getBookDetail = async (isbn) => {
  const { data } = await instance.get(`/book/${isbn}`);
  return data;
};
