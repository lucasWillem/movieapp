import { action } from "easy-peasy";

const movieDisplayVariationModel = {
  movieListVariation: "card",
  setMovieListVariation: action((state, payload) => {
    state.movieListVariation = payload;
  }),
};

export default movieDisplayVariationModel;
