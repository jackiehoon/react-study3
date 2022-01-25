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
