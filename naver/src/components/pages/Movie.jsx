import styled from "styled-components";
import { MovieList } from "../organisms";
const Movie = () => {
  return (
    <div>
      <h1>Movie</h1>
      <Form>
        <InputText />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList />
    </div>
  );
};

const Form = styled.form`
  display: flex;
  padding: 10px;
`;
const InputText = styled.input`
  flex: 1;
  margin-right: 10px;
`;
const BtnSubmit = styled.button``;

export default Movie;
