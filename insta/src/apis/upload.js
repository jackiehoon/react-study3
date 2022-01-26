import { instance } from ".";

export const uploadImage = async ({ file }) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await instance.post("/upload/image", formData);
  return data;
};
