import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { Table, Image } from "react-bootstrap";
import { HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";

import "./MovieTable.css";
import imageNotFound from "assets/images/image-not-found.png";

function MovieTable({
  movies,
  onMovieSelected,
  onRemoveFromFavourites,
  onAddToFavourites,
  checkIfhasLikedMovie,
}) {
  const handleRemoveFromFavourites = useCallback(
    (movie) => {
      if (onRemoveFromFavourites) onRemoveFromFavourites(movie);
    },
    [onRemoveFromFavourites]
  );

  const handleAddToFavourites = useCallback(
    (movie) => {
      if (onAddToFavourites) onAddToFavourites(movie);
    },
    [onAddToFavourites]
  );

  return (
    <Table className={"movie-table"} bordered hover>
      <tbody>
        {movies.map((movie, index) => (
          <tr
            key={`${movie.imdbID}-${index}`}
            onClick={(e) => {
              e.stopPropagation();
              onMovieSelected(movie);
            }}
            className={"movie-table-row"}
          >
            <td>
              <Image
                className={"movie-image"}
                src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
              />
            </td>
            <td>
              <div>
                <h6>{movie.Title}</h6>
                <div className={"year-and-type-container"}>
                  <p>{movie.Year}</p>
                  <p>({movie.Type})</p>
                </div>
                {checkIfhasLikedMovie && checkIfhasLikedMovie(movie) ? (
                  <HandThumbsUpFill
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveFromFavourites(movie);
                    }}
                  />
                ) : (
                  <HandThumbsUp
                    onClick={(e) => {
                      e.stopPropagation();
                      handleAddToFavourites(movie);
                    }}
                  />
                )}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

MovieTable.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    })
  ).isRequired,
  onMovieSelected: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func,
  onAddToFavourites: PropTypes.func,
  checkIfhasLikedMovie: PropTypes.func,
};

export default React.memo(MovieTable);
