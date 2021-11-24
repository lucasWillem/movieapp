import React, { useState } from "react";
import MovieCard from "./SubComponents";
import { Button, Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function MoviesList({ actionButtonText, movies, variant }) {
  const [favouriteMoviesAreVisible, setFavouriteMoviesAreVisible] =
    useState(false);

  return (
    <Container>
      <Row>
        {movies &&
          movies.map((movie, index) => (
            <MovieCard
              key={`${movie.imdbID}-${index}`}
              movie={movie}
              variant={variant}
            />
          ))}
      </Row>
    </Container>
  );
}

MoviesList.defaultProps = {
  actionButtonText: "Favourites",
};

MoviesList.propTypes = {
  actionButtonText: PropTypes.string,
};

export default MoviesList;
