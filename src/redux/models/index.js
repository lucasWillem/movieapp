import alertsModel from "./global/Alert.model";
import loadingDisplayModel from "./global/LoadingDisplay.model";

import favouriteMoviesModel from "./app/MovieCatalogue/FavouriteMovies.model";
import modalModel from "./app/MovieCatalogue/Modal.model";
import movieSearchModel from "./app/MovieCatalogue/MovieSearch.model";
import selectedMovieModel from "./app/MovieCatalogue/SelectedMovie.model";
import movieDisplayVariationModel from "./app/MovieCatalogue/MovieDisplayVariation.model";

const models = {
  ...alertsModel,
  ...favouriteMoviesModel,
  ...loadingDisplayModel,
  ...modalModel,
  ...movieSearchModel,
  ...selectedMovieModel,
  ...movieDisplayVariationModel,
};

export default models;
