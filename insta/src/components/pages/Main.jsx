import { useEffect, useState } from "react";
import styled from "styled-components";
import { PostList } from "../organisms";
import { getPostList } from "../../apis/post";

const Main = () => {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    // IIFE 즉시실행함수
    (async () => {
      const { postList } = await getPostList();
      setPostList(postList);
    })();
  }, []);

  return (
    <Wrapper>
      <PostList data={postList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 614px;
  margin: 0 auto;
`;

export default Main;
