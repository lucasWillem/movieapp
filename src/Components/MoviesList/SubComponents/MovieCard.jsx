import React from "react";
import "./MovieCard.css";
import PropTypes from "prop-types";

import imageNotFound from "../../../assets/images/image-not-found.png";

import { useStoreActions } from "easy-peasy";

import { Card, CloseButton } from "react-bootstrap";

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

  const cardWrapper = {
    width: "10rem",
    margin: 10,
    padding: 5,
    cursor: variant === "favourites" ? "auto" : "pointer",
  };

  const closeButtonWrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  };

  const closeButton = { height: 8, width: 8, margin: 5, marginBottom: 15 };

  return (
    <Card
      style={cardWrapper}
      onClick={() => {
        variant !== "favourites" && fetchAndStoreSelectedMovie(movie.imdbID);
      }}
    >
      <div style={closeButtonWrapper}>
        {variant === "favourites" && (
          <CloseButton
            style={closeButton}
            onClick={(e) => {
              e.stopPropagation();
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
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Card.Text>{movie.Year}</Card.Text>
          <Card.Text>({movie.Type})</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  variant: PropTypes.string.isRequired,
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

export default React.memo(MovieCard);
