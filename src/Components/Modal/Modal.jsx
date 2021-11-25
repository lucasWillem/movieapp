import React from "react";
import "./Modal.css";

import imageNotFound from "../../assets/images/image-not-found.png";

import Container from "../Container";

import { useStoreState, useStoreActions } from "easy-peasy";

import { Modal as BootstrapModal, Image, Button } from "react-bootstrap";

import { HandThumbsUp, HandThumbsUpFill } from "react-bootstrap-icons";

function Modal(props) {
  const { isVisible, content } = useStoreState(
    (state) => state.modalConfiguration
  );

  const addToFavouriteMovies = useStoreActions(
    (actions) => actions.addToFavouriteMovies
  );

  const toggleMovieFavouredState = useStoreActions(
    (actions) => actions.toggleMovieFavouredState
  );

  function determineLikeButtonState() {
    if (content.isFavourite) {
      return (
        <Button
          onClick={() => {
            addToFavouriteMovies(content);
            toggleMovieFavouredState(content);
          }}
          variant="light"
        >
          <HandThumbsUpFill style={{ fontSize: 25 }} />
        </Button>
      );
    }

    if (!content.isFavourite) {
      return (
        <Button
          onClick={() => {
            addToFavouriteMovies(content);
            toggleMovieFavouredState(content);
          }}
          variant="light"
        >
          <HandThumbsUp style={{ fontSize: 25 }} />
        </Button>
      );
    }
  }

  return (
    <BootstrapModal show={isVisible}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Genre:</p>{" "}
            <p>{content.Genre}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "stretch",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Released on:</p>
            <p>{content.Released}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Director:</p>{" "}
            <p>{content.Director}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Writer(s):</p>{" "}
            <p>{content.Writer}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Featuring:</p>{" "}
            <p>{content.Actors}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Language(s):</p>{" "}
            <p>{content.Language}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> Meta Score:</p>
            <p>{content.Metascore}</p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p style={{ fontWeight: "bold", marginRight: 10 }}> IMDB:</p>
            <p>{content.imdbRating}</p>
          </div>
          <BootstrapModal.Footer>
            {determineLikeButtonState()}
          </BootstrapModal.Footer>
        </BootstrapModal.Body>
      </>
    </BootstrapModal>
  );
}

export default React.memo(Modal);
