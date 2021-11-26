import React from "react";
import "./MovieTable.css";

import imageNotFound from "../../assets/images/image-not-found.png";

import { Table, Image } from "react-bootstrap";

import PropTypes from "prop-types";

const imageStyle = { width: 100 };

function MovieTable({ movies }) {
  return (
    <Table style={{ width: "60%" }} bordered hover>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={`${movie.imdbID}-${index}`}>
            <td>
              <Image
                style={imageStyle}
                src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
              />
            </td>
            <td>
              <div>
                <h6>{movie.Title}</h6>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
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
};

export default React.memo(MovieTable);
