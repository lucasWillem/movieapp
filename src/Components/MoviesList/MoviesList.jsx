import React from "react";
import "./MoviesList.css";
import MovieCard from "./SubComponents";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function MoviesList({ actionButtonText, movies, variant }) {
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

export default React.memo(MoviesList);
