import { useState } from "react";
import styled from "styled-components";
import { MovieList } from "../organisms";
import { getMovieList } from "../../apis/movie";

const Movie = () => {
  const [text, setText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      query: text,
    };
    const { items } = await getMovieList(params);
    setMovieList(items);
  };

  return (
    <div>
      <h1>Movie</h1>
      <Form onSubmit={handleSubmit}>
        <InputText onChange={(e) => setText(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
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
