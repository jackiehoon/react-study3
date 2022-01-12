import { useState, useEffect } from "react";

import { Form, InputText, BtnSubmit } from "../atoms";
import { MovieList, Pagination } from "../organisms";
import { getMovieList } from "../../apis/movie";
import { countryList } from "../../datas";

const Movie = () => {
  const [page, setPage] = useState(1);
  const [country, setCountry] = useState(countryList[0].code);
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    searchMovie();
  }, [country, page, query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setQuery(text);
  };

  const searchMovie = async () => {
    if (!query) return;

    const start = page * 10 - 9;
    const params = { query, start };
    if (country !== "ALL") {
      params.country = country;
    }
    const { items } = await getMovieList(params);
    setMovieList(items);
  };

  return (
    <div>
      <h1>Movie</h1>
      <Form onSubmit={handleSubmit}>
        <select onChange={(e) => setCountry(e.target.value)}>
          {countryList.map(({ code, name }) => (
            <option value={code} key={code}>
              {name}
            </option>
          ))}
        </select>
        <InputText onChange={(e) => setText(e.target.value)} />
        <BtnSubmit>검색</BtnSubmit>
      </Form>
      <MovieList data={movieList} />
      <Pagination onPageChange={(page) => setPage(page)} />
    </div>
  );
};

export default Movie;
