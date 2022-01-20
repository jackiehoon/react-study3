import conn from "../db/index.js";
import bcrypt from "bcrypt";

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
