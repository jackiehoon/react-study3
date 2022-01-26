import { instance } from ".";

export const getPostList = async () => {
  const { data } = await instance.get("/posts/main");
  return data;
};

export const addPost = async (params) => {
  const { data } = await instance.post("/posts", params);
  return data;
};
