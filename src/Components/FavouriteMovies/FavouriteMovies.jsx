import React from "react";
import "./FavouriteMovies.css";
import MoviesList from "../MoviesList";

import { useStoreState } from "easy-peasy";

import { Container, Row } from "react-bootstrap";

function FavouriteMovies(props) {
  const favouriteMovies = useStoreState((state) => state.favouriteMovies);

  return (
    <Container>
      <Row>
        <MoviesList movies={favouriteMovies} variant="favourites" />
      </Row>
    </Container>
  );
}

export default React.memo(FavouriteMovies);
