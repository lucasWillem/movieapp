import React from "react";
import PropTypes from "prop-types";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { useStoreActions } from "easy-peasy";

import { Card, Button } from "react-bootstrap";

function MovieCard({ movie, variant }) {
  const removeFromFavouriteMovies = useStoreActions(
    (actions) => actions.removeFromFavouriteMovies
  );

  const addToFavouriteMovies = useStoreActions(
    (actions) => actions.addToFavouriteMovies
  );

  return (
    <Card style={{ width: "10rem", margin: 10, padding: 5 }}>
      <Card.Img
        variant="top"
        alt={movie.Title}
        src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          released: {movie.Year} ({movie.Type}){" "}
        </Card.Text>

        {variant === "favourites" ? (
          <Button
            onClick={(e) => {
              e.preventDefault();
              removeFromFavouriteMovies(movie);
            }}
            variant="outline-dark"
          >
            Remove From Favourites
          </Button>
        ) : (
          <Button
            onClick={(e) => {
              e.preventDefault();
              addToFavouriteMovies(movie);
            }}
            variant="outline-dark"
          >
            Add To Favourites
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default React.memo(MovieCard);
