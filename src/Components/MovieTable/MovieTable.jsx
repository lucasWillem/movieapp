import React from "react";
import "./MovieTable.css";

import imageNotFound from "../../assets/images/image-not-found.png";

import { Table, Image } from "react-bootstrap";

const imageStyle = { width: 100 };

function MovieTable({ movies }) {
  return (
    <Table style={{ width: "60%" }} bordered hover>
      <tbody>
        {movies.map((movie) => (
          <tr>
            <td>
              <Image
                style={imageStyle}
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
