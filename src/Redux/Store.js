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
        const movieResultsWithIsFavouriteKey = result.Search.map((movie) => ({
          ...movie,
          isFavourite: false,
        }));
        actions.storeMovieResults(movieResultsWithIsFavouriteKey);
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
  flagMovieAsFavourite: action((state, payload) => {
    const movieResultsWithIsFavouriteKeyUpdated = state.movieResults.map(
      (movie) => {
        return movie.imdbID === payload.imdbID
          ? { ...movie, isFavourite: true }
          : { ...movie };
      }
    );

    state.movieResults = movieResultsWithIsFavouriteKeyUpdated;
  }),

  unFlagMovieAsFavourite: action((state, payload) => {
    const movieResultsWithIsFavouriteKeyUpdated = state.movieResults.map(
      (movie) => {
        return movie.imdbID === payload.imdbID
          ? { ...movie, isFavourite: false }
          : { ...movie };
      }
    );

    state.movieResults = movieResultsWithIsFavouriteKeyUpdated;
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

  fetchAndStoreSelectedMovie: thunk((actions, payload) => {
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
        console.log(result);
        actions.storeSelectedMovie(result);
        actions.setModalConfiguration({ isVisible: true, content: result });
      })
      .catch((err) => {
        console.log(err);
      });
  }),
});

export { store };
