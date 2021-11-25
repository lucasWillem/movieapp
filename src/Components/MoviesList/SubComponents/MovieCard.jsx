import React from "react";
import PropTypes from "prop-types";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";

import { useStoreActions, useStoreState } from "easy-peasy";

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

  const flagMovieAsFavourite = useStoreActions(
    (actions) => actions.flagMovieAsFavourite
  );

  const unFlagMovieAsFavourite = useStoreActions(
    (actions) => actions.unFlagMovieAsFavourite
  );

  const setModalConfiguration = useStoreActions(
    (actions) => actions.setModalConfiguration
  );

  function determineLikeButtonState() {
    if (variant === "searchResults" && movie.isFavourite) {
      return (
        <Button
          onClick={(e) => {
            e.preventDefault();
            addToFavouriteMovies(movie);
            unFlagMovieAsFavourite(movie);
          }}
          variant="light"
        >
          <HandThumbsUpFill />
        </Button>
      );
    }

    if (variant === "searchResults" && !movie.isFavourite) {
      return (
        <Button
          onClick={(e) => {
            e.preventDefault();
            addToFavouriteMovies(movie);
            flagMovieAsFavourite(movie);
          }}
          variant="light"
        >
          <HandThumbsUp />
        </Button>
      );
    }
  }

  return (
    <Card
      style={{
        width: "10rem",
        margin: 10,
        padding: 5,
        cursor: "pointer",
      }}
      onClick={() => {
        setModalConfiguration({ isVisible: true, content: movie });
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
              unFlagMovieAsFavourite(movie);
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
        {determineLikeButtonState()}
      </div>
    </Card>
  );
}

export default React.memo(MovieCard);
