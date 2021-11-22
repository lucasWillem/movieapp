import React from "react";
import ScreenContainer from "../Components/ScreenContainer";
import SearchForm from "../Components/SearchForm";
import FavouriteMoviesList from "../Components/FavouriteMoviesList";

function MovieSearchPage(props) {
  return (
    <ScreenContainer>
      <SearchForm />
      <FavouriteMoviesList />
    </ScreenContainer>
  );
}

export default React.memo(MovieSearchPage);
