import axios from "axios";

const naverInstance = axios.create({
  baseURL: "https://openapi.naver.com",
  headers: {
    "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
    "X-Naver-Client-Secret": "kcNwJta1kV",
  },
});

export { naverInstance };
