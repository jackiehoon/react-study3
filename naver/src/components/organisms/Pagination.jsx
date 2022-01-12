import styled from "styled-components";

const Pagination = ({ onPageChange }) => {
  return (
    <List>
      <Item onClick={() => onPageChange(1)}>1</Item>
      <Item onClick={() => onPageChange(2)}>2</Item>
      <Item onClick={() => onPageChange(3)}>3</Item>
      <Item onClick={() => onPageChange(4)}>4</Item>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  justify-content: center;
`;
const Item = styled.li`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 50%;
  margin: 5px;
  cursor: pointer;
  :hover {
    background: #000;
    color: #fff;
  }
`;

export default Pagination;
