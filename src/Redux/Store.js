import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  movieResults: [],
  storeMovieResults: action((state, payload) => {
    state.movieResults = payload;
  }),
  fetchAndStoreMovieSearchResults: thunk((actions, payload) => {
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
        actions.storeMovieResults(result.Search);
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
    const updatedArray = state.favouriteMovies.filter(
      (faveMovie) => faveMovie.imdbID !== payload.imdbID
    );

    state.favouriteMovies = updatedArray;
  }),
  movieListVariation: "card",
  setMovieListVariation: action((state, payload) => {
    state.movieListVariation = payload;
  }),
  favouriteMoviesIsVisible: false,
  setFavouriteMoviesVisibility: action((state, payload) => {
    state.favouriteMoviesIsVisible = payload;
  }),
  modalConfiguration: { isVisible: false, content: {} },
  setModalConfiguration: action((state, payload) => {
    state.modalConfiguration = payload;
  }),

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
          "x-rapidapi-key":
            "a6ae80c0edmshfe5b7a5058982c3p14ee45jsndb0cf2e7ec93",
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        actions.storeSelectedMovie(result);
        actions.setModalConfiguration({
          isVisible: true,
          content: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }),
});

export { store };
