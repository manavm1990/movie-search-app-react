import dotenv from "dotenv";

dotenv.config();

export default (
  baseURL = "https://api.themoviedb.org/3/search/movie",
  key = process.env.REACT_APP_API_KEY
) => ({
  async query(query) {
    return await fetch(
      `${baseURL}?api_key=${key}&query=${query}&page=1&include_adult=false`
    );
  },
});
