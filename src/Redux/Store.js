import { createStore, action, thunk } from "easy-peasy";

const store = createStore({
  movieListVariation: "card",
  setMovieListVariation: action((state, payload) => {
    state.movieListVariation = payload;
  }),
});

export { store };
