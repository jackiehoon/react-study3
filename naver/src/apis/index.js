import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "X-Naver-Client-Id": "cXImhXldb32v4Yu5Hs9T",
    "X-Naver-Client-Secret": "kcNwJta1kV",
  },
});

export { instance };
