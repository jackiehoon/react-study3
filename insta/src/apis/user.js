import { instance } from ".";

export const addUser = async (params) => {
  try {
    const { data } = await instance.post("/users", params);
    return data;
  } catch ({ response }) {
    return response.data;
  }
};

export const getToken = async (params) => {
  console.log(params);
  try {
    const { data } = await instance.post("/users/token", params);
    return data;
  } catch ({ response }) {
    return response.data;
  }
};
