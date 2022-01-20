import { instance } from ".";

export const addUser = async (params) => {
  try {
    const result = await instance.post("/users", params);
    return result.data;
  } catch (error) {
    return error.response.data;
  }
};
