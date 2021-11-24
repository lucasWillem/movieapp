import React, { useState } from "react";
import MovieListItem from "./SubComponents/MovieListItem";
import { Button, Stack, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function MoviesList({ actionButtonText, movies }) {
  const [favouriteMoviesAreVisible, setFavouriteMoviesAreVisible] =
    useState(false);

  return (
    <Container>
      <Row>
        {/* <Col md={2} sm={2} xs={2}>
          <Button
            variant="outline-dark"
            onClick={() => {
              favouriteMoviesAreVisible === true
                ? setFavouriteMoviesAreVisible(false)
                : setFavouriteMoviesAreVisible(true);
            }}
          >
            {actionButtonText}
          </Button>
        </Col> */}
        <Col md={9} sm={9} xs={9}>
          <Stack gap={3}>
            {movies &&
              movies.map((movie, index) => (
                <MovieListItem key={`${movie.imdbID}-${index}`} movie={movie} />
              ))}
          </Stack>
        </Col>
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
