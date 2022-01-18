import express from "express";
import { getMovieList, getBookList, getBookDetail } from "../apis/naver.js";
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "React" });
});

router.get("/movie", async function (req, res, next) {
  const result = await getMovieList(req.query);
  res.send(result);
});
// 책리스트 router 만들기
router.get("/book", async function (req, res, next) {
  const result = await getBookList(req.query);
  res.send(result);
});

router.get("/book/:isbn", async function (req, res, next) {
  const { isbn } = req.params;
  const params = {
    d_isbn: isbn,
  };
  const result = await getBookDetail(params);
  res.send(result);
});
export default router;
