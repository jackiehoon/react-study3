import styled from "styled-components";
const Todo = () => {
  return (
    <Container>
      <Title>일정관리</Title>
      <InputWrapper>
        <InputText />
        <BtnSubmit>추가</BtnSubmit>
      </InputWrapper>
      <List>
        <Item>
          <label>
            <Checkbox type="checkbox" />
            <Content>할일1</Content>
          </label>
          <BtnDelete>삭제</BtnDelete>
        </Item>

        <Item>
          <label>
            <Checkbox type="checkbox" />
            <Content>할일1</Content>
          </label>
          <BtnDelete>삭제</BtnDelete>
        </Item>

        <Item>
          <label>
            <Checkbox type="checkbox" />
            <Content>할일1</Content>
          </label>
          <BtnDelete>삭제</BtnDelete>
        </Item>
      </List>
    </Container>
  );
};
const Container = styled.div`
  width: 500px;
  margin: 10px auto;
  border: 1px solid #000;
`;
const Title = styled.div`
  background: #000;
  color: #fff;
  text-align: center;
  font-weight: bold;
  padding: 10px 0;
`;
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #000;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;
const List = styled.ul``;
const Item = styled.li`
  display: flex;
  padding: 10px;
  label {
    flex: 1;
    display: flex;
    align-items: center;
  }
  & + & {
    border-top: 1px solid #efefef;
  }
`;
const Checkbox = styled.input``;
const Content = styled.div``;
const BtnDelete = styled.button``;
export default Todo;
