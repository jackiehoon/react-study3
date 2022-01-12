import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ title, image }) => (
        <Item>
          <Image src={image} />
          <Title dangerouslySetInnerHTML={{ __html: title }} />
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
const Title = styled.h3`
  font-weight: normal;
`;

export default BookList;
