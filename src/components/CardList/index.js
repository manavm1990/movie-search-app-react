import PropTypes from "prop-types";
import React from "react";

import styles from "./CardList.module.css";

function renderMovies(movies) {
  return movies.map(({ id, title }) => <li key={id}>{title}</li>);
}

export const CardList = ({ movies }) => {
  return <ul className={styles.cardList}>{renderMovies(movies)}</ul>;
};
CardList.propTypes = { movies: PropTypes.array.isRequired };
