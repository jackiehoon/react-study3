import styled from "styled-components";
const MovieList = ({ data }) => {
  return (
    <List>
      {data.map(({ image, title, pubDate, userRating }) => (
        <Item>
          <Image src={image} />
          <Title>{title}</Title>
          <PubDate>{pubDate}</PubDate> / <UserRating>{userRating}</UserRating>
        </Item>
      ))}
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
