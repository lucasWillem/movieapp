import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  movieResults: [],
  addMovieResults: action((state, payload) => {
    state.movieResults.push(payload);
  }),
  saveMovieResults: thunk(async (actions, payload) => {
    try {
      const { data } = await fetch(
        "https://movie-database-imdb-alternative.p.rapidapi.com/",
        {
          params: { s: `${payload}`, r: "json", page: "1" },

          headers: {
            "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
            "x-rapidapi-key":
              "a6ae80c0edmshfe5b7a5058982c3p14ee45jsndb0cf2e7ec93",
          },
        }
      );

      console.log(data);

      actions.addMovieResults(data);
    } catch (error) {
      console.log("asdfasdf");
      console.log(error);
    }
  }),

  addListOfMovieResults: action((state, payload) => {
    state.movieResults.push(...payload);
  }),
});

export { store };
