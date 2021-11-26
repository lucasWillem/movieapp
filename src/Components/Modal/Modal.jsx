import React from "react";
import "./Modal.css";
import imageNotFound from "../../assets/images/image-not-found.png";
import Container from "../Container";

import { useStoreState, useStoreActions } from "easy-peasy";

import { Modal as BootstrapModal, Image, Button } from "react-bootstrap";

function Modal(props) {
  const { isVisible, content } = useStoreState(
    (state) => state.modalConfiguration
  );

  const favouriteMovies = useStoreState((state) => state.favouriteMovies);

  const addToFavouriteMovies = useStoreActions(
    (actions) => actions.addToFavouriteMovies
  );

  const removeFromFavouriteMovies = useStoreActions(
    (actions) => actions.removeFromFavouriteMovies
  );

  const setModalConfiguration = useStoreActions(
    (actions) => actions.setModalConfiguration
  );

  const storeSelectedMovie = useStoreActions(
    (actions) => actions.storeSelectedMovie
  );

  function resetStore() {
    setModalConfiguration({ isVisible: false, content: {} });
    storeSelectedMovie({});
  }

  const detailsWrapper = {
    display: "flex",
    flexDirection: "row",
  };

  const detailHeading = { fontWeight: "bold", marginRight: 10 };

  return (
    <BootstrapModal show={isVisible} onHide={() => resetStore()}>
      <BootstrapModal.Header closeButton>
        <BootstrapModal.Title>{content.Title}</BootstrapModal.Title>
      </BootstrapModal.Header>
      <>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <Image
            fluid
            src={content.Poster === "N/A" ? imageNotFound : content.Poster}
          />
        </Container>

        <BootstrapModal.Body>{content.Plot}</BootstrapModal.Body>
        <BootstrapModal.Body>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Genre:</p>
            <p>{content.Genre}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Released on:</p>
            <p>{content.Released}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Director:</p> <p>{content.Director}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Writer(s):</p> <p>{content.Writer}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Featuring:</p> <p>{content.Actors}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Language(s):</p> <p>{content.Language}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> Meta Score:</p>
            <p>{content.Metascore}</p>
          </div>
          <div style={detailsWrapper}>
            <p style={detailHeading}> IMDB:</p>
            <p>{content.imdbRating}</p>
          </div>
          <BootstrapModal.Footer>
            <Button
              disabled={favouriteMovies.some(
                (faveMovie) => faveMovie.imdbID === content.imdbID
              )}
              variant="outline-primary"
              onClick={() => {
                addToFavouriteMovies(content);
                resetStore();
              }}
            >
              Add To Favourites
            </Button>
            <Button
              disabled={
                !favouriteMovies.some(
                  (faveMovie) => faveMovie.imdbID === content.imdbID
                )
              }
              variant="outline-dark"
              onClick={() => {
                removeFromFavouriteMovies(content);
                resetStore();
              }}
            >
              Remove From Favourites
            </Button>
          </BootstrapModal.Footer>
        </BootstrapModal.Body>
      </>
    </BootstrapModal>
  );
}

export default React.memo(Modal);
