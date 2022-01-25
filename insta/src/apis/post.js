import { instance } from ".";

export const getPostList = async () => {
  const { data } = await instance.get("/posts/main");
  return data;
};
