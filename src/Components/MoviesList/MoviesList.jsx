import React, { useState } from "react";
import MovieListItem from "./SubComponents/MovieListItem";
import { Button, Stack, Container, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";

function MoviesList({ actionButtonText, movies, variant }) {
  const [favouriteMoviesAreVisible, setFavouriteMoviesAreVisible] =
    useState(false);

  React.useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <Container>
      <Row>
        {variant === "favourites" && (
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
        )}

        <Col md={9} sm={9} xs={9}>
          <Stack gap={3}>
            {movies &&
              movies.map((movie, index) => (
                <MovieListItem
                  key={`${movie.imdbID}-${index}`}
                  movie={movie}
                  variant={variant}
                />
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
