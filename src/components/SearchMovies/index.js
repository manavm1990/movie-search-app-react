import React, { useState } from "react";

import apiRepo from "api";

import styles from "./SearchMovies.module.css"; // Import css modules stylesheet as styles

const api = apiRepo();

export const SearchMovies = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const searchMovies = async (event) => {
    event.preventDefault();

    console.log(await api.index(query));
  };

  return (
    <form className={styles.form} onSubmit={searchMovies}>
      <label htmlFor="query" className={styles.label}>
        Movie Name
      </label>
      <input
        type="search"
        id="query"
        placeholder="i.e. Jurassic Park"
        className={styles.input}
        onChange={handleInputChange}
      />
      <button className={styles.button} type="submit">
        Search
      </button>
    </form>
  );
};
