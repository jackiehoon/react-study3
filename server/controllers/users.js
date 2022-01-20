import conn from "../db/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { JWT_SECRET_KEY as secretKey } from "../config/index.js";

export const postUsers = async function (req, res, next) {
  const { username, password } = req.body;

  const query = `SELECT id FROM user WHERE user_name = '${username}'`;
  const [rows] = await conn.query(query);
  if (rows.length) {
    return res.status(409).send({
      success: false,
      message: "중복되는 아이디가 존재합니다.",
    });
  }

  const salt = await bcrypt.genSalt();
  const hashedPW = await bcrypt.hash(password, salt);

  const query2 = `
    INSERT INTO user(user_name, password, salt)
    VALUES('${username}', '${hashedPW}', '${salt}');
  `;
  await conn.query(query2);

  res.send({ success: true });
};

export const postUsersToken = async (req, res) => {
  // 1. username이 Database에 존재하는지 확인.
  // 2-1. 없으면 return false
  // 2-2. username으로 찾은 user의 salt값으로
  //      회원가입 할 때랑 동일한 방법으로 hashedPW만든다
  // 3-1. 2-2에서 만든 hashedPW랑 DB에있는 password랑 같으면 로그인 성공
  // 3-2. 다르면 비밀번호 틀림(로그인 실패) return false
  // 4. 토큰을 생성하여 클라이언트에 보내준다.

  const { username, password } = req.body;

  // 아이디검증
  const query = `
    SELECT id, salt, password FROM user WHERE user_name = '${username}';
  `;
  const [users] = await conn.query(query);
  if (users.length === 0) {
    return res
      .status(401)
      .send({ success: false, message: "일치하는 유저가 없습니다." });
  }

  // 비밀번호 검증
  const user = users[0];
  const { salt } = user;
  const hashedPW = await bcrypt.hash(password, salt);
  if (user.password !== hashedPW) {
    return res
      .status(401)
      .send({ success: false, message: "비밀번호가 틀렸습니다." });
  }

  // 토큰 발급
  const payload = { userId: user.id };
  const option = { expiresIn: "1h" };
  const token = jwt.sign(payload, secretKey, option);

  res.send({ success: true, token });
};
