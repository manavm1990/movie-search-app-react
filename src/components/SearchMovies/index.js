import React from "react";

import styles from "./SearchMovies.module.css"; // Import css modules stylesheet as styles

export const SearchMovies = () => (
  <form className={styles.form}>
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
