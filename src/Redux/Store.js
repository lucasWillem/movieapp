import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  movieResults: [],
  addMovieResults: action((state, payload) => {
    state.movieResults = payload;
  }),
  saveMovieResults: thunk((actions, payload) => {
    actions.setLoaderVisibility(true);

    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?s=${encodeURI(
        payload.trim()
      )}&r=json&page=1`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
          "x-rapidapi-key":
            "a6ae80c0edmshfe5b7a5058982c3p14ee45jsndb0cf2e7ec93",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        actions.addMovieResults(result.Search);
        actions.setLoaderVisibility(false);

        if (result.Response === "False") {
          throw new Error(result.Error);
        }
      })
      .catch((err) => {
        actions.setLoaderVisibility(false);
        actions.setAlertConfiguration({
          isVisible: true,
          message: err.message,
        });
      });
  }),
  isLoaderVisible: false,
  setLoaderVisibility: action((state, payload) => {
    state.isLoaderVisible = payload;
  }),

  alertConfiguration: { isVisible: false, message: "" },
  setAlertConfiguration: action((state, payload) => {
    state.alertConfiguration = payload;
  }),

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
    state.favouriteMovies = state.favouriteMovies.filter(
      (faveMovie) => faveMovie.imdbID !== payload.imdbID
    );
  }),
  favouriteMoviesIsVisible: false,
  setFavouriteMoviesVisibility: action((state, payload) => {
    state.favouriteMoviesIsVisible = payload;
  }),
});

export { store };
