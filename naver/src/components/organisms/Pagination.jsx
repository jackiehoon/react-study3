import styled from "styled-components";

const Pagination = ({ nowPage, total, onPageChange }) => {
  const lastPage = Math.ceil(total / 10);
  const startPage = Math.ceil(nowPage / 10) * 10 - 9;
  const endPage = startPage + 9 > lastPage ? lastPage : startPage + 9;

  const pageList = [];
  for (let i = startPage; i <= endPage; i++) {
    pageList.push(i);
  }

  return (
    <List>
      {nowPage > 1 && (
        <Item onClick={() => onPageChange(nowPage - 1)}>{"<"}</Item>
      )}
      {pageList.map((page) => (
        <Item
          onClick={() => onPageChange(page)}
          key={page}
          isActive={page === nowPage}
        >
          {page}
        </Item>
      ))}
      {nowPage < lastPage && (
        <Item onClick={() => onPageChange(nowPage + 1)}>{">"}</Item>
      )}
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

  background: ${({ isActive }) => isActive && "#000"};
  color: ${({ isActive }) => isActive && "#fff"};

  :hover {
    background: #000;
    color: #fff;
  }
`;

export default Pagination;
