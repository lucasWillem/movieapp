import React from "react";
import "./MovieTable.css";

import imageNotFound from "../../assets/images/image-not-found.png";

import { Table, Image } from "react-bootstrap";

// import { useStoreState, useStoreActions } from "easy-peasy";

function MovieTable({ movies }) {
  return (
    <Table bordered hover>
      <tbody>
        {movies.map((movie) => (
          <tr>
            <td>
              <Image
                style={{ width: 100 }}
                src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
              />
            </td>
            <td>
              <div>
                <h6>
                  {movie.Title} ({movie.Year})
                </h6>
                <p>{movie.Type}</p>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default React.memo(MovieTable);
