import jwt from "jsonwebtoken";

import { JWT_SECRET_KEY as secretKey } from "../config/index.js";
import conn from "../db/index.js";

export const getPostsMain = async (req, res) => {
  // 전체 포스트 보내주기

  const query = `
    SELECT post.*, user.user_name, user.profile_image,
        GROUP_CONCAT(image.url) AS imageList
    FROM post
    JOIN image ON image.post_id = post.id
    JOIN user ON user.id = post.user_id
    GROUP BY post.id
    ORDER BY post.created_at DESC
    LIMIT 15;  
  `;
  const [rows] = await conn.query(query);
  const postList = rows.map((post) => {
    const imageList = post.imageList.split(",");
    return { ...post, imageList };
  });

  res.send({ success: true, postList });
};

export const postPosts = async (req, res) => {
  // 1. 토큰을 통해서 요청한 사람이 누구인지 확인
  // 2. content로 포스트 생성
  // 3. 2에서 만든 post_id로 image 저장

  const token = req.headers.authorization;
  let payload;
  try {
    payload = jwt.verify(token, secretKey);
  } catch (e) {
    console.log(e);
    return res.send({ success: false });
  }

  const { userId } = payload;
  const { content, imageList } = req.body;
  const query = `
    INSERT INTO post(user_id, content) VALUES(${userId}, '${content}');
  `;
  const [newPost] = await conn.query(query);
  const postId = newPost.insertId;

  const promiseList = imageList.map((url) => {
    const query2 = `
      INSERT INTO image(post_id, url) VALUES(${postId}, '${url}');
    `;
    return conn.query(query2);
  });

  await Promise.all(promiseList);
  res.send({ success: true });
};
