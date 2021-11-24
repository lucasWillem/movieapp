import React from "react";
import "./FavouriteMovies.css";
import MoviesList from "../MoviesList";

import { useStoreState } from "easy-peasy";

function FavouriteMovies(props) {
  const favouriteMovies = useStoreState((state) => state.favouriteMovies);

  return (
    <div>
      <MoviesList movies={favouriteMovies} variant="favourites" />
    </div>
  );
}

export default React.memo(FavouriteMovies);
