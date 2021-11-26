import React from "react";
import "./MoviesList.css";
import MovieCard from "../MovieCard";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

function MoviesList({ movies, variant }) {
  return (
    <Container>
      <Row>
        {movies.map((movie, index) => (
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
  movies: [],
};

MoviesList.propTypes = {
  variant: PropTypes.string.isRequired,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default React.memo(MoviesList);
