import { Link } from "react-router-dom";
import styled from "styled-components";

const BookList = ({ data }) => {
  return (
    <List>
      {data.map(({ title, image, isbn }) => (
        <Link to={`/book/${isbn.split(" ")[1]}`} key={isbn}>
          <Item>
            <Image src={image} />
            <Title dangerouslySetInnerHTML={{ __html: title }} />
          </Item>
        </Link>
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
