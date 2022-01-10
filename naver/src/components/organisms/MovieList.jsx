import styled from "styled-components";
const MovieList = () => {
  return (
    <List>
      <Item>
        <Image src="https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg" />
        <Title>어벤져스</Title>
        <PubDate>2020</PubDate> / <UserRating>4.5</UserRating>
      </Item>
      <Item>
        <Image src="https://upload.wikimedia.org/wikipedia/ko/f/f2/%EC%96%B4%EB%B2%A4%EC%A0%B8%EC%8A%A4-_%EC%97%94%EB%93%9C%EA%B2%8C%EC%9E%84_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg" />
        <Title>어벤져스</Title>
        <PubDate>2020</PubDate> / <UserRating>4.5</UserRating>
      </Item>
    </List>
  );
};

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
const Item = styled.li``;
const Image = styled.img`
  width: 100%;
`;
const Title = styled.h3``;
const PubDate = styled.span``;
const UserRating = styled.span``;

export default MovieList;
