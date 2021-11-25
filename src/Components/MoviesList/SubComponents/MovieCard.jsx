import React from "react";
import PropTypes from "prop-types";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";

import { useStoreActions } from "easy-peasy";

import { Card, Button, CloseButton, Row } from "react-bootstrap";

function MovieCard({ movie, variant }) {
  const removeFromFavouriteMovies = useStoreActions(
    (actions) => actions.removeFromFavouriteMovies
  );

  const addToFavouriteMovies = useStoreActions(
    (actions) => actions.addToFavouriteMovies
  );

  const setAlertConfiguration = useStoreActions(
    (actions) => actions.setAlertConfiguration
  );

  return (
    <Card
      style={{
        width: "10rem",
        margin: 10,
        padding: 5,
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
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        {variant === "searchResults" && (
          <Button
            onClick={(e) => {
              e.preventDefault();
              addToFavouriteMovies(movie);
            }}
            variant="light"
          >
            <HandThumbsUp />
          </Button>
        )}
      </div>
    </Card>
  );
}

export default React.memo(MovieCard);
