import React from "react";
import PropTypes from "prop-types";
import "./MovieModal.css";
import imageNotFound from "assets/images/image-not-found.png";
import Container from "../../../../global/Container";

import { Modal as BootstrapModal, Image, Button } from "react-bootstrap";

function MovieModal({
  movie,
  isVisible,
  onModalHidden,
  onAddToFavourites,
  onRemoveFromFavourites,
  isAFavourite,
}) {
  const detailsWrapper = {
    display: "flex",
    flexDirection: "row",
  };

  const detailHeading = { fontWeight: "bold", marginRight: 10 };

  return (
    <BootstrapModal show={isVisible} onHide={onModalHidden}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{movie.Title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Image
            fluid
            src={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
          />
        </Container>

        <BootstrapModal.Body>
          {movie.Plot ? movie.Plot : "no plot information available"}
        </BootstrapModal.Body>
        <BootstrapModal.Body>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Genre:</p>
            <p>
              {movie.Genre !== "N/A"
                ? movie.Genre
                : "no genre information available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Released on:</p>
            <p>
              {movie.Released !== "N/A"
                ? movie.Released
                : "no release date available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Director:</p>{" "}
            <p>
              {movie.Director !== "N/A"
                ? movie.Director
                : "no director name(s) available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Writer(s):</p>
            <p>
              {movie.Writer !== "N/A"
                ? movie.Writer
                : "no writer name(s) available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Featuring:</p>
            <p>
              {movie.Actors !== "N/A"
                ? movie.Actors
                : "no actor name(s) available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Language(s):</p>{" "}
            <p>
              {movie.Language !== "N/A"
                ? movie.Language
                : "no language information available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Meta Score:</p>
            <p>
              {movie.Metascore !== "N/A"
                ? movie.Metascore
                : "no meta rating available"}
            </p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> IMDB:</p>
            <p>
              {movie.imdbRating !== "N/A"
                ? movie.imdbRating
                : "no IMDB rating available"}
            </p>
            <p>{movie.imdbRating}</p>
          </div>
          <BootstrapModal.Footer>
            {isAFavourite ? (
              <Button
                variant="outline-dark"
                onClick={() => onRemoveFromFavourites(movie)}
              >
                Remove From Favourites
              </Button>
            ) : (
              <Button
                variant="outline-primary"
                onClick={() => onAddToFavourites(movie)}
              >
                Add To Favourites
              </Button>
            )}
          </BootstrapModal.Footer>
        </BootstrapModal.Body>
      </>
    </BootstrapModal>
  );
}

MovieModal.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Plot: PropTypes.string.isRequired,
    Genre: PropTypes.string.isRequired,
    Director: PropTypes.string.isRequired,
    Metascore: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
    Writer: PropTypes.string.isRequired,
    Actors: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
    Released: PropTypes.string.isRequired,
  }).isRequired,
  isVisible: PropTypes.bool,
  onModalHidden: PropTypes.func.isRequired,
  onAddToFavourites: PropTypes.func.isRequired,
  onRemoveFromFavourites: PropTypes.func.isRequired,
  isAFavourite: PropTypes.bool.isRequired,
};

MovieModal.defaultProps = {
  isVisible: false,
};

export default React.memo(MovieModal);
