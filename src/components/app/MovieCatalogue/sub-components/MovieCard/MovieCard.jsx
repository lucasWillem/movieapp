import React from "react";
import PropTypes from "prop-types";
import { Card, CloseButton } from "react-bootstrap";

import imageNotFound from "assets/images/image-not-found.png";
import "./MovieCard.css";

function MovieCard({ movie, variant, onClick, onRemoveFromFavouritesClick }) {
  return (
    <Card
      className={"card-wrapper"}
      onClick={(e) => {
        e.stopPropagation();
        onClick(movie);
      }}
    >
      <div className={"close-button-wrapper"}>
        {variant === "favourites" && (
          <CloseButton
            className={"close-button"}
            onClick={(e) => {
              e.stopPropagation();
              onRemoveFromFavouritesClick(movie);
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
        <div className={"card-year-and-type-wrapper"}>
          <Card.Text>{movie.Year}</Card.Text>
          <Card.Text>({movie.Type})</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

MovieCard.propTypes = {
  variant: PropTypes.oneOf(["favourites", "searchResults"]).isRequired,
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onRemoveFromFavouritesClick: PropTypes.func.isRequired,
};

export default React.memo(MovieCard);
