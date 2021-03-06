import { action, thunk } from "easy-peasy";

const movieSearchModel = {
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
          "x-rapidapi-key": `${process.env.REACT_APP_SEARCH_MOVIES_API_KEY}`,
        },
      }
    )
      .then((response) => response.json())
      .then((result) => {
        const uniqueResults = [];

        if (result.Response === "False") {
          throw new Error(result.Error);
        }

        result.Search.forEach((movieResultItem) => {
          if (
            !uniqueResults.some(
              (uniqueEntry) => uniqueEntry.imdbID === movieResultItem.imdbID
            )
          ) {
            uniqueResults.push(movieResultItem);
          }
        });
        actions.storeMovieResults(uniqueResults);
        actions.setLoaderVisibility(false);
      })
      .catch((err) => {
        actions.setLoaderVisibility(false);
        actions.setAlertConfiguration({
          isVisible: true,
          message: err.message,
        });
      });
  }),
};

export default movieSearchModel;
