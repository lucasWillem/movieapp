import React from "react";
import PropTypes from "prop-types";
import { Table, Image } from "react-bootstrap";

import "./MovieTable.css";
import imageNotFound from "assets/images/image-not-found.png";

function MovieTable({ movies, onMovieSelected }) {
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
};

export default React.memo(MovieTable);
