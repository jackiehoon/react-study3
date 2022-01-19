import { instance } from ".";

export const addUser = (params) => {
  instance.post("/users", params);
};
