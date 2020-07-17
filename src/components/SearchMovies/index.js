import React from "react";

import apiRepo from "api";

import styles from "./SearchMovies.module.css"; // Import css modules stylesheet as styles

const api = apiRepo();

const searchMovies = async (event) => {
  event.preventDefault();

  const query = "Jurassic Park";

  const url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  console.log(url, api.query);
};

export const SearchMovies = () => (
  <form className={styles.form} onSubmit={searchMovies}>
    <label htmlFor="query" className={styles.label}>
      Movie Name
    </label>
    <input
      type="search"
      id="query"
      placeholder="i.e. Jurassic Park"
      className={styles.input}
    />
    <button className={styles.button} type="submit">
      Search
    </button>
  </form>
);
