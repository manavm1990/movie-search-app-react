import React, { useState } from "react";

import { CardList, Search } from "./components";

import apiRepo from "api";

const api = apiRepo();

export const App = () => {
  const [movies, setMovies] = useState([]);

  const handleMoviesChange = (results) => setMovies(results);

  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <Search onMoviesChange={handleMoviesChange} />
      <CardList movies={movies} />
    </div>
  );
};
