import React from "react";

import dotenv from "dotenv";

import styles from "./SearchMovies.module.css"; // Import css modules stylesheet as styles

dotenv.config();

const searchMovies = async (event) => {
  event.preventDefault();

  const url = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_API_KEY}`;
  console.log(url);
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
