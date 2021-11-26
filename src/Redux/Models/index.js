import alertsModel from "./Alert.model";
import favouriteMoviesModel from "./FavouriteMovies.model";
import loadingDisplayModel from "./LoadingDisplay.model";
import modalModel from "./Modal.model";
import movieSearchModel from "./MovieSearch.model";
import selectedMovieModel from "./SelectedMovie.model";
import movieDisplayVariationModel from "./MovieDisplayVariation.model";

const model = {
  ...alertsModel,
  ...favouriteMoviesModel,
  ...loadingDisplayModel,
  ...modalModel,
  ...movieSearchModel,
  ...selectedMovieModel,
  ...movieDisplayVariationModel,
};

export default model;
