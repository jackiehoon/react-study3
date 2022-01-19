import conn from "../db/index.js";

export const postUsers = async function (req, res, next) {
  const { username, password } = req.body;

  const query = `SELECT id FROM user WHERE user_name = '${username}'`;
  const [rows] = await conn.query(query);
  if (rows.length) {
    return res.send({
      success: false,
      message: "중복되는 아이디가 존재합니다.",
    });
  }
  res.send({ success: true });
};
