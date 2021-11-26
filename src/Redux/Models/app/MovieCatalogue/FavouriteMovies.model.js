import { action } from "easy-peasy";

const favouriteMoviesModel = {
  favouriteMovies: [],
  addToFavouriteMovies: action((state, payload) => {
    if (
      !state.favouriteMovies.some(
        (faveMovie) => faveMovie.imdbID === payload.imdbID
      )
    ) {
      state.favouriteMovies.push(payload);
    }
  }),
  removeFromFavouriteMovies: action((state, payload) => {
    const updatedArray = state.favouriteMovies.filter(
      (faveMovie) => faveMovie.imdbID !== payload.imdbID
    );

    state.favouriteMovies = updatedArray;
  }),
  favouriteMoviesIsVisible: false,
  setFavouriteMoviesVisibility: action((state, payload) => {
    state.favouriteMoviesIsVisible = payload;
  }),
};

export default favouriteMoviesModel;
