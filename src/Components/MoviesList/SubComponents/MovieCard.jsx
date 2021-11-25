import React from "react";
import PropTypes from "prop-types";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";

import { useStoreActions } from "easy-peasy";

import { Card, Button, CloseButton } from "react-bootstrap";

function MovieCard({ movie, variant }) {
  const removeFromFavouriteMovies = useStoreActions(
    (actions) => actions.removeFromFavouriteMovies
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.setAlertConfiguration
  );

  const fetchAndStoreSelectedMovie = useStoreActions(
    (actions) => actions.fetchAndStoreSelectedMovie
  );

  return (
    <Card
      style={{
        width: "10rem",
        margin: 10,
        padding: 5,
        cursor: "pointer",
      }}
      onClick={() => {
        fetchAndStoreSelectedMovie(movie.imdbID);
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {variant === "favourites" && (
          <CloseButton
            style={{ height: 8, width: 8, margin: 5, marginBottom: 15 }}
            onClick={(e) => {
              e.preventDefault();
              removeFromFavouriteMovies(movie);
              setAlertConfiguration({
                isVisible: true,
                message: "Item removed from Favourites",
              });
            }}
          />
        )}
      </div>

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
      </Card.Body>
    </Card>
  );
}

export default React.memo(MovieCard);
