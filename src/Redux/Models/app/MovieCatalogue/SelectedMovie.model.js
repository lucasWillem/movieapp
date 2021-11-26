import { action, thunk } from "easy-peasy";

const selectedMovieModel = {
  selectedMovie: {},

  storeSelectedMovie: action((state, payload) => {
    state.selectedMovie = payload;
  }),

  fetchAndStoreSelectedMovie: thunk((actions, payload, helpers) => {
    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?r=json&i=${payload}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key": `${process.env.REACT_APP_FIND_MOVIE_BY_ID_OR_TITLE_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        actions.storeSelectedMovie(result);
        actions.setModalConfiguration({
          isVisible: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }),
};

export default selectedMovieModel;
