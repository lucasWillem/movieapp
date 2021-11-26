import React from "react";
import "./FavouriteMovies.css";
import MoviesList from "../MoviesList";

import { useStoreState } from "easy-peasy";
import PropTypes from "prop-types";

import { Container, Row } from "react-bootstrap";

function FavouriteMovies({ noFavouritesYetMessage }) {
  const favouriteMovies = useStoreState((state) => state.favouriteMovies);

  return (
    <Container>
      <Row>
        {favouriteMovies.length === 0 ? (
          <p>{noFavouritesYetMessage}</p>
        ) : (
          <MoviesList movies={favouriteMovies} variant="favourites" />
        )}
      </Row>
    </Container>
  );
}

FavouriteMovies.defaultProps = {
  noFavouritesYetMessage: "No favourite movies have been added yet",
};

FavouriteMovies.propTypes = {
  noFavouritesYetMessage: PropTypes.string,
};

export default React.memo(FavouriteMovies);
